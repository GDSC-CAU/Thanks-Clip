import { setCookie } from "cookies-next"

/**
 * @note `props` 데이터를 `JSON` 형식으로 `cookie`에 저장합니다
 * @param {string} key
 * @param {any} props
 */
const setPropsOnCookie = (key, props) => setCookie(key, JSON.stringify(props))

export { setPropsOnCookie }
