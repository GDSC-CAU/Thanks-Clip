import Link from "next/link"
import { Button } from "./common/Button"
import style from "./logo.module.css"

const Logo = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 567 567" {...props}>
        <path
            d="M117 179s38.5 5.5 75.5 2.5 38-5 39-9-13.3-12.6-28.5-.5c-15 12-26 31-26 84"
            className={style.logo}
        />
        <path
            className={style.logo}
            d="M216 193s-7 8-12 34c-5 25.8-3 29-3 29s6-21 16-26 17 2 18 8-1 19-1 19M235 215s12-7 26-7 20 7 18 21-11 28-22 24-4-20 3-25 21-12 25 2 1 28 1 28M301 205s4 12 4 26-1 25-1 25 1-23 8-35 13-13 17-13 11 4 13 17 0 31 0 31M360 178s3 24 3 43c0 21-2 35-2 35s1-9 3-22c.9-5.6 3-13 7-18 7.8-9.8 18-9 23-6s7 11 3 17-19 8-19 8 15 26 35 39M447 216s-9-13-24-8c-14.4 4.8-6.9 20 2 21 9 1 26-2 25 12-1.1 15-28 15-42 0M264 306s4-20-8-26-25.2-2.6-34 16c-9 19-7 39-3 50 3.4 9.3 11 20 25 20s25-6 25-6"
        />
        <path
            className={style.logo}
            d="M255 344s23-4 38-20 12-32 12-35-1-10-6-11-19 9-17 46 18 42 29 42M321 280s3 9 4 19M326 314s5 34 2 52M346 315s3 26 3 38-2 28-3 35c-.5 3.8 2-18 4.6-37.9 2.3-17.3 9.3-32.1 21.4-32.1 19 0 22 24 16 33s-12 9-25 7"
        />
    </svg>
)

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

export default async function Main() {
    return (
        <main className="flex flex-col gap-4 w-full min-w-[16rem] max-w-[30rem] h-full min-h-screen mx-auto sm:w-[30rem] md:w-[30rem] lg:w-[30rem] px-4 pt-12 pb-10 bg-white shadow justify-between">
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex-1 relative">
                    <div className="object-cover object-center overflow-hidden h-80 sm:h-full ">
                        <Logo />
                    </div>
                    <LogoAirplane />
                </div>
                <div className="flex flex-col gap-2 font-main-cute mb-4">
                    <div className="flex justify-center">
                        <h1 className="text-4xl">
                            Send your{" "}
                            <span className="text-red-400">Thanks</span>
                        </h1>
                    </div>
                    <div className="flex justify-center text-neutral-400 text-2xl">
                        마음을 담아낸, 나만의 영상 편지
                    </div>
                </div>
            </div>
            <Link href="/step/1">
                <Button>
                    <span>한번 만들어 볼까요?</span>
                </Button>
            </Link>
        </main>
    )
}
