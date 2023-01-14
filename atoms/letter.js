//@ts-check
import { atom } from "jotai"

/**@typedef {{ type: "circle" | "star" | "heart", position: { x: number, y: number } }} Sticker */
/**@typedef {{ backgroundColor: string | "red" | "yellow" | "green" | "blue" | "purple" , from: string | null, to: string | null, letter: string | null, letterType: "torn" | "hole" | "overlap", stickers?: Sticker[], font: "cute" | "hand" | "sans", tags: string[] | null }} Letter */
/**@type {Letter} */
const letterInitialValue = {
    font: "hand",
    // to: null,
    // from: null,
    from: "hayeon",
    to: "junseong",
    // letter: null,
    letter: "우리 벌써 10년째 친구다 그치 ㅠㅠ나는 너 처음 봤을 때 아직도 기억나는데, 진짜 시간 너무 훅 가는 것 같아.우리 마흔살까지 솔로면 같이 실버타운 가자~ 우리 우정 최고!",
    tags: null,
    letterType: "torn",
    backgroundColor: "#ffffff",
}

const letter = atom(letterInitialValue)

export { letter }
