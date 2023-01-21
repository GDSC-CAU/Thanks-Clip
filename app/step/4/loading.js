import style from "./airplane.module.css"

const LogoAirplane = (props) => (
    <svg
        className={style.airplane}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 567 567"
        {...props}
    >
        <polygon
            points="297,320 350.8,363.3 324.7,300.9"
            className={style.st0}
        />
        <path
            d="M419.9,201l-287.6-19.9L363,274.6l0,0l64.8-44.6C440.2,221.4,434.9,202,419.9,201z M324.7,300.9L132.3,181.1l40.3,187.3c3.3,15.4,21.2,22.5,34.2,13.6l90.1-62L324.7,300.9L324.7,300.9z"
            className={style.st1}
        />
        <polygon
            points="132.3,181.1 324.7,300.9 324.7,300.9 350.8,363.3 363,274.6 363,274.6 	"
            className={style.st2}
        />
    </svg>
)

export default function Step4Loading() {
    return (
        <div className="flex flex-col h-full items-center justify-center gap-4">
            <div className="relative w-full h-20">
                <div className="abosolute">
                    <LogoAirplane />
                </div>
            </div>
            <div className="text-lg text-black font-bold text-center leading-6">
                열심히 영상을 만드는 중이에요 !
                <br />
                잠시만 기다려주세요
            </div>
        </div>
    )
}
