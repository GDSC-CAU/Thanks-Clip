/**
 * @note 사이트 base `path`
 */
const pathBase =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://thanksclip.vercel.app"

export { pathBase }
