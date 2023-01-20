import style from "./download.module.css"

const Envelop = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.5 283.5"
        className={style.envelop}
        {...props}
    >
        <path
            d="M246,224H38.7c-3.8,0-6.9-3.1-6.9-6.9V73.3c0-3.8,3.1-6.9,6.9-6.9H246c3.8,0,6.9,3.1,6.9,6.9v143.8
            C252.9,220.9,249.8,224,246,224z"
            className={style.st0}
        />
        <path
            d="M147.1,141.9c-2.8-2.2-6.7-2.2-9.5,0L34.1,222.2c1.2,1.1,2.9,1.8,4.6,1.8H246c1.8,0,3.4-0.7,4.6-1.8
            L147.1,141.9z"
            className={style.st1}
        />
        <path
            d="M137.6,148.5c2.8,2.2,6.7,2.2,9.5,0l103.5-80.3c-1.2-1.1-2.9-1.8-4.6-1.8H38.7c-1.8,0-3.4,0.7-4.6,1.8
            L137.6,148.5z"
            className={style.st2}
        />
    </svg>
)

export { Envelop }
