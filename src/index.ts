import all_emojis from './all_emojis';


export default () => {
    console.log("❤️emojis❤️");
}

export function getRandomEmoji() {
    return all_emojis[Math.floor(Math.random() * all_emojis.length)].symbol;
}

export function wordToEmoji(word: string) {
    const emoji = all_emojis.find((element) => {
        return element.translations.English === word || element.translations.Deutsch === word || element.translations.Español === word || element.translations.Français === word || element.translations.Italiano === word || element.translations.Polski === word || element.translations.Português === word || element.translations.Русский === word
    });

    return emoji.symbol;
}

export function emojify(text: string) {
    let emojifiedText = text;
    all_emojis.forEach((emoji) => {
        emojifiedText = emojifiedText.replace(new RegExp(emoji.name, "gi"), emoji.symbol);
    });

    return emojifiedText;
}


  

