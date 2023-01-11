/**
 * @param {{ main: React.ReactNode, sub?: React.ReactNode }} props
 */
const Title = ({ main, sub }) => {
    return (
        <div className="flex flex-col items-start justify-center gap-1">
            <h1 className="text-xl text-black font-bold">{main}</h1>
            {sub && <h3 className="text-xs text-gray-400">{sub}</h3>}
        </div>
    )
}

export { Title }
