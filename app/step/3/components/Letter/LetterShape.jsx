import { useAtomValue } from "jotai"
import { store } from "../../../../../atoms"

const Hole = () => {
    return (
        <div style={{ display: "flex", flex: "1 1 0%" }}>
            <div
                style={{ backgroundColor: "rgb(255 255 255)", flex: "1 1 0%" }}
            />
            <div
                style={{
                    width: "2rem",
                    height: "2rem",
                    background:
                        "radial-gradient(transparent 0.5rem,white 0.5rem)",
                }}
            />
            <div
                style={{ backgroundColor: "rgb(255 255 255)", flex: "1 1 0%" }}
            />
        </div>
    )
}

const Holes = () => {
    return (
        <>
            <div style={{ height: "0.5rem", background: "rgb(255 255 255)" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                    style={{
                        backgroundColor: "rgb(255 255 255)",
                        flex: "1 1 0%",
                    }}
                />
                <Hole />
                <Hole />
                <Hole />
                <Hole />
                <Hole />
                <Hole />
                <Hole />
                <Hole />
                <div
                    style={{
                        backgroundColor: "rgb(255 255 255)",
                        flex: "1 1 0%",
                    }}
                />
            </div>
            <div
                style={{
                    backgroundColor: "rgb(255 255 255)",
                    height: "0.5rem",
                }}
            />
        </>
    )
}

const LetterTorn = ({ children }) => {
    return (
        <div
            style={{
                filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                width: "296px",
                height: "296px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "2rem",
                    backgroundColor: "#ffffff",
                    clipPath:
                        "polygon(1%2%,5%1%,12%2%,20%0%,27%1%,32%0%,42%1%,49%1%,54%0%,63%1%,67%1%,80%0,85%1%,93%1%,95%0%,99%1%,100%5%,99%12%,99%15%,98%31%,99%35%,99%53%,100%58%,99%69%,100%75%,99%90%,100%97%,97%100%,90%99%,84%100%,80%100%,50%99%,43%100%,36%100%,30%99%,13%99%,9%100%,5%99%,0%99%,0%95%,1%91%,1%88%,0%84%,0%80%,1%70%,0%53%,0%50%,1%46%,1%28%,0%26%,1%9%,0%5%,1%2%)",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        background:
                            "repeating-linear-gradient(white,white calc(1.5rem - 1px),#ccc calc(1.5rem - 1px),#ccc 1.5rem)",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

const LetterOverlap = ({ children }) => {
    return (
        <div
            style={{
                filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                width: "296px",
                height: "296px",
                position: "relative",
            }}
        >
            <div
                style={{
                    filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.08)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                    width: "280px",
                    height: "280px",
                    padding: "2rem",
                    position: "absolute",
                    transform: "rotate(-2deg)",
                    backgroundColor: "#ffffff",
                    zIndex: 1,
                }}
            >
                {children}
            </div>

            <div
                style={{
                    filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.08)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                    width: "280px",
                    height: "280px",
                    position: "absolute",
                    backgroundColor: "#ffffff",
                }}
            />
            <div
                style={{
                    filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                    width: "280px",
                    height: "280px",
                    position: "absolute",
                    transform: "rotate(2deg)",
                    backgroundColor: "#ffffff",
                }}
            />
        </div>
    )
}

const LetterHole = ({ children }) => {
    return (
        <div
            style={{
                filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.2)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
                width: "296px",
                height: "296px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Holes />
            <div
                style={{
                    flex: "1 1 0%",
                    padding: "0 1rem 2rem 1rem",
                    backgroundColor: "#ffffff",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        padding: "0 1rem",
                        background:
                            "repeating-linear-gradient(#ffffff,#ffffff calc(1.5rem - 1px),#ccc calc(1.5rem - 1px),#ccc 1.5rem)",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

const LetterShape = ({ children }) => {
    const type = useAtomValue(store.letter).letterType
    return (
        <>
            {type === "torn" && <LetterTorn>{children}</LetterTorn>}
            {type === "overlap" && <LetterOverlap>{children}</LetterOverlap>}
            {type === "hole" && <LetterHole>{children}</LetterHole>}
        </>
    )
}

export { LetterShape }
