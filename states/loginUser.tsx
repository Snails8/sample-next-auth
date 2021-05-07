import { atom } from "recoil"

// recoilのatomによるデータストア宣言(key default必須)
export const loginUserState = atom({
    key: 'LoginUser',
    default: undefined,
});