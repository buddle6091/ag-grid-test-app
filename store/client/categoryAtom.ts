import { atom } from "recoil";

export const drawerIsOpenAtom = atom<boolean>({
    key: "DrawerIsOpen",
    default: false
})

interface IRow {
    name: string;
    order: number;
    appExposure: boolean;
    kioskExposure: boolean;
    posExposure: boolean;
}

export const categoryItemAtom = atom<IRow>({
    key: "CategoryItem",
    default: {
        name: "",
        order: 0,
        appExposure: true,
        kioskExposure: true,
        posExposure: true,
    }
})