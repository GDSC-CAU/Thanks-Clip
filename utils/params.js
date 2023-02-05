/**
 * @note `server` / `client`에서 searchParams를 추출
 * @note `server`: `urlSearchParams`에서 `search` 키워드 추출
 * @note `client`: `params`에서 `search` 키워드 추출
 * @template {string} T
 * @param {{ params: string, search: T[], type: "server" | "client" }} serverSearch
 * @returns {{[key in T]: string | undefined}}
 */
const getSearchParams = ({ params, search, type = "server" }) => {
    const urlSearchParams =
        type === "server" ? new URLSearchParams(params) : params

    const paramResult = search.reduce((acc, curr) => {
        const searchResult = urlSearchParams?.get(curr)
        acc[curr] = searchResult ?? undefined
        return acc
    }, {})

    return paramResult
}

export { getSearchParams }
