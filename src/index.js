import all_emojis from './all_emojis';


export default () => {
    console.log("❤️emojis❤️");
}

export function getRandomEmoji() {
    return all_emojis[Math.floor(Math.random() * all_emojis.length)].symbol;
}

export function wordToEmoji(word, languages = ['English', 'Deutsch', 'Español', 'Français', 'Italiano', 'Polski', 'Português', 'Русский']) {
    const normalizedWord = word.toLowerCase();

    const emoji = all_emojis.find((element) => {
        let found = false
        languages.forEach((language) => {
            if (element.translations[language].toLowerCase() === normalizedWord) {
                found = found || true;
            }
        });

        return found;
    });

    return emoji.symbol;
}

export function emojify(text) {
    let emojifiedText = text;
    all_emojis.forEach((emoji) => {
        emojifiedText = emojifiedText.replace(new RegExp(emoji.name, "gi"), emoji.symbol);
    });

    return emojifiedText;
}


  

