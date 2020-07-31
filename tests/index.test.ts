import { getRandomEmoji, wordToEmoji, emojify } from '../src/index';

describe('word-to-emoji', () => {
    it('returns a random emoji', () => {
        global.Math.random = () => 0;

        expect(getRandomEmoji()).toBe('😀');

        global.Math.random = () => 0.5;

        expect(getRandomEmoji()).toBe('♣️');

        global.Math.random = () => 0.9;

        expect(getRandomEmoji()).toBe('🇪🇬');
    });

    it('returns right emoji for word', () => {
        expect(wordToEmoji('Sparkling Heart')).toBe('💖');
    });

    it('returns right emoji for word', () => {
        expect(emojify('Sparkling Heart emojis sparkling heart')).toBe('💖 emojis 💖');
    });
});
