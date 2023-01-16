import { setCookie } from "cookies-next"

/**
 * @param {string} key
 * @param {any} props
 */
const setPropsOnCookie = (key, props) => setCookie(key, JSON.stringify(props))

const COOKIE_KEY = "THANKS_CLIP_COOKIE"

export { COOKIE_KEY, setPropsOnCookie }
