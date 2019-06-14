import { StrengthPipe } from "./strength.pipe";

describe('Strength Pip', () => {
    let pipe;
    beforeEach(() => {
        pipe = new StrengthPipe();
    })

    it('should return weak', () => {
        expect(pipe.transform(2)).toBe('2 (weak)')
    });

    it('should return strong', () => {
        expect(pipe.transform(11)).toBe('11 (strong)')
    })

    it('should return unbelievable', () => {
        let pipe = new StrengthPipe();
        expect(pipe.transform(22)).toBe('22 (unbelievable)')
    })
})