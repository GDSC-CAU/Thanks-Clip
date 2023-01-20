const pathBase =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://thxtest.vercel.app"

//!TODO: 배포 주소로 변경하기

export { pathBase }
