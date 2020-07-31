import all_emojis from './all_emojis';
import { wordToEmoji as wTE } from './wordToEmoji';


export default () => {
    console.log("❤️emojis❤️");
}

export function getRandomEmoji() {
    return all_emojis[Math.floor(Math.random() * all_emojis.length)].symbol;
}

export const wordToEmoji = wTE;

export function emojify(text: string) {
    let emojifiedText = text;
    all_emojis.forEach((emoji) => {
        emojifiedText = emojifiedText.replace(new RegExp(emoji.name, "gi"), emoji.symbol);
    });

    return emojifiedText;
}
