class Cache {
    /**@type {Map<number, unknown>} */
    // eslint-disable-next-line no-undef
    #cache = new Map()

    /**@type {number[]} */
    #hashKeys = []

    constructor({ maxSize = 10 }) {
        this.maxSize = maxSize
    }

    getCache() {
        return this.#cache
    }

    /**
     * @param {string | Map<string, string>} key
     * @param {any} value
     */
    set(key, value, { isHash = true }) {
        const saveKey = isHash ? this.#toHashKey(key) : key
        if (this.#hashKeys.find((key) => key === saveKey)) {
            this.#cache.set(saveKey, value)

            return true
        }

        if (this.#hashKeys.length > this.maxSize) {
            // 제일 사용 안된 key 삭제
            const removerKey = this.#hashKeys[0]
            this.#cache.delete(removerKey)
            this.#hashKeys.shift()

            return true
        }

        this.#hashKeys.push(saveKey)
        this.#cache.set(saveKey, value)

        return true
    }

    /**
     * @param {string | Map<string, string>} key
     * @param {string | Map<string, string>} cacheFindFallback
     */
    get(key, cacheFindFallback) {
        const hashKey = this.#toHashKey(key)
        const updateKeyLocation = this.#hashKeys.findIndex(
            (key) => key === hashKey
        )

        // 사용한 key를 맨 뒤로 LRU
        if (updateKeyLocation !== -1) {
            this.#hashKeys.splice(updateKeyLocation, 1)
            this.#hashKeys.push(hashKey)
            return this.#cache.get(hashKey)
        }

        this.set(hashKey, cacheFindFallback(), { isHash: false })
        return cacheFindFallback()
    }

    remove(key) {
        const hashKey = this.#toHashKey(key)
        const deleteKeyLocation = this.#hashKeys.findIndex(
            (key) => key === hashKey
        )

        if (deleteKeyLocation !== -1) {
            this.#hashKeys.splice(deleteKeyLocation, 1)
            this.#cache.delete(hashKey)
            return true
        }

        return false
    }

    /**
     * @param {Record<string, string>} key
     * @returns {number}
     */
    #toHashKey(key) {
        const getKeyValuePair = (key) =>
            Object.entries(key).reduce((acc, [key, value]) => {
                if (typeof value === "string" || typeof value === "number") {
                    return `${acc}${value}`
                }

                if (Array.isArray(value)) {
                    value
                    const to = value
                        .map((val) => {
                            if (typeof val === "string") {
                                return val
                            }
                            return getKeyValuePair(val)
                        })
                        .join("")
                    return `${acc}${to}`
                }

                return `${acc}${key}${getKeyValuePair(value)}`
            }, "")

        const keyValuePair = getKeyValuePair(key)

        let hashed = 0
        for (let i = 0; i < keyValuePair.length; i++) {
            hashed = (hashed << 5) - hashed + keyValuePair.charCodeAt(i)
            hashed |= 0
        }

        return hashed
    }
}

export { Cache }
