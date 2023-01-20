const DownloadTitle = ({ from }) => {
    return (
        <div className="py-10 flex justify-center">
            <div className="flex flex-col justify-center gap-2">
                <h1 className="flex justify-center text-3xl text-black font-bold">
                    <span className="text-red-500">{from}</span>님의 마음이 담긴
                </h1>
                <h1 className="flex justify-center text-2xl text-red-400 font-bold">
                    Thanks Clip
                </h1>
                <h3 className="flex justify-center text-lg text-gray-400 pt-2">
                    편지를 확인해보세요! 💌
                </h3>
            </div>
        </div>
    )
}

export { DownloadTitle }
