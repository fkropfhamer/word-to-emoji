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
