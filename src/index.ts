import all_emojis from './all_emojis.json';


function wordToEmoji() {
    console.log("❤️emojis❤️");
}

export function getRandomEmoji() {
    return all_emojis[Math.floor(Math.random() * all_emojis.length)].symbol;
}
  
export default wordToEmoji;
