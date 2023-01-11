import Image from "next/image"

export default function Main() {
    return (
        <div>
            <h1 className={`text-5xl font-bold font-main-cute`}>
                귀욤체 & Thanks Clip
            </h1>

            <Image
                src={"/logo/1line_red.png"}
                alt="love"
                width={500}
                height={500}
            />
        </div>
    )
}
