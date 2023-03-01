export const value01_01 = '01_01'

export const sum = (a: number, b: number) => {
    return a + b;
}

export const multiply = (a: number, b: number) => {
    return a * b;
}

export const splittingIntoWords = (sentence: string) => {
    let words = sentence.toLowerCase().split(' ');
    return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', ''))
}