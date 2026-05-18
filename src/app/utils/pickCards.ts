import { sunConfig, moonConfig, cardInfo } from "../constants/config";

export type Mode = "SUN" | "MOON";

export type CardResult = {
    path: string;
    infoTitle: string;
    info1: string;
    info2: string;
};

export function pickCards(mode: Mode, count: number): CardResult[] {
    const sourceConfig = mode === "SUN" ? sunConfig : moonConfig;
    const array = [...sourceConfig];
    const result: CardResult[] = [];
    for (let i = 0; i < count; i++) {
        const rand = Math.floor(Math.random() * array.length);
        const item = array[rand];
        result.push({
            path: item.key,
            infoTitle: cardInfo[item.infoKey].title,
            info1: cardInfo[item.infoKey].upright,
            info2: cardInfo[item.infoKey].reversed
        });
        array.splice(rand, 1);
    }
    return result;
}
