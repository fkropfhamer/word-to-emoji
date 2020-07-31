import { getRandomEmoji } from '../src/index';

describe('word-to-emoji', () => {
    it('returns a random emoji', () => {
        global.Math.random = () => 0;

        expect(getRandomEmoji()).toBe('😀');

        global.Math.random = () => 0.5;

        expect(getRandomEmoji()).toBe('♣️');

        global.Math.random = () => 0.9;

        expect(getRandomEmoji()).toBe('🇪🇬');
    });
});
