const TornIcon = (props) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m2.674 7.617-.29-4.876L6.665 2l4.663.37 4.663.186L20.654 2 22 4.222l-.577 6.852c.225 3.978 0 10.185 0 10.185h-4.038L8.538 22l-5.769-.74L2 12.832l.674-5.216Z"
            fill="#fff"
            stroke={props.stroke}
            strokeWidth={0.75}
            strokeLinejoin="round"
        />
        <path
            d="M7 8.4h10.1M7 12h10.1M7 15.7h10.1"
            stroke={props.stroke}
            strokeWidth={0.75}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
export { TornIcon }
