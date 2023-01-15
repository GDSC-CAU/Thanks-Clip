const HoleIcon = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M4.709 2H21.29C22.197 2 23 2.722 23 3.753v16.494c0 .928-.703 1.753-1.709 1.753H4.71C3.804 22 3 21.278 3 20.247V3.753C3.1 2.722 3.804 2 4.709 2Z"
            fill="#fff"
            stroke={props.stroke}
            strokeWidth={0.8}
        />
        <path
            d="M7.6 6.2a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM18.461 6.2a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM14.84 6.2a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2ZM11.222 6.2a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Z"
            fill={props.fill}
        />
        <path
            d="M7 10h12M7 13.6h12M7 17.2h12"
            stroke={props.stroke}
            strokeWidth={0.8}
            strokeLinecap="round"
        />
    </svg>
)
export { HoleIcon }
