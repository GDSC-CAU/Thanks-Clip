# Router

```bash
📦router
 ┣ 📜LinkTo.jsx
 ┣ 📜RouterProvider.jsx
 ┣ 📜config.jsx
```

1. `LinkTo` - `react-router-dom`의 `Link`와 동일합니다. 다만, to prop 사용시 모든 route가 자동완성 됩니다! (버그가 안생겨요 ㅎㅎ)
2. `RouterProvider` - `react-router-dom` Provider를 설정한 후, `"/step"`으로 접속 시 `"/"`로 redirect 합니다.
3. `config`
    - `route` 구조를 정의한 곳입니다!
    - `"/step"`의 하위 route 페이지는 모두 `Layout` component의 child가 됩니다.
    - `routes` 경로를 상수로 만들었습니다. 경로가 필요한 경우에 해당 상수를 이용해주세요.

```js
const routes = {
    home: "/",
    stepCommon: "/step",
    step1: "/step/1",
    step2: "/step/2",
    step3: "/step/3",
    step4: "/step/4",
}
```
