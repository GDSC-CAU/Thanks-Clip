const OverlapIcon = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M3.6 2.5H18c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5H3.6c-.8 0-1.5-.7-1.5-1.5V4c0-.9.7-1.5 1.5-1.5Z"
            fill="#fff"
            stroke={props.stroke}
            strokeWidth={0.75}
        />
        <path
            d="M5.9 4.8h14.4c.8 0 1.5.7 1.5 1.5v14c0 .8-.7 1.5-1.5 1.5H5.9c-.8 0-1.5-.7-1.5-1.5v-14c.1-.8.7-1.5 1.5-1.5Z"
            fill="#fff"
            stroke={props.stroke}
            strokeWidth={0.75}
        />
        <path
            d="M7.9 9.7h10.4M7.9 13.3h10.4M7.9 16.9h10.4"
            stroke={props.stroke}
            strokeWidth={0.75}
            strokeLinecap="round"
        />
    </svg>
)
export { OverlapIcon }
