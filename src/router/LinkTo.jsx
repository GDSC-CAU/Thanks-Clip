import { Link } from "react-router-dom"

/**@typedef { "/" | "/step/1" | "/step/2" | "/step/3" | "/step/4" | "/step/5" Route } */
/**@typedef {{children: React.ReactNode, to: Route } & import("react-router-dom").LinkProps & React.RefAttributes<HTMLAnchorElement> LinkToProps} */
/**
 * @param {LinkToProps}
 */
const LinkTo = ({ children, ...linkProps }) => (
    <Link {...linkProps}>{children}</Link>
)

export { LinkTo }
