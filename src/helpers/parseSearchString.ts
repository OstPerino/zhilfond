export function splitString(input: string): [number[], string[]] {
    const values = input.split(' ');
    const digits: number[] = [];
    const words: string[] = [];

    for (const value of values) {
        if (!isNaN(Number(value))) {
            digits.push(Number(value));
        } else {
            words.push(value);
        }
    }

    return [digits.filter(Boolean), words];
}