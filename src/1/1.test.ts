import {multiply, splittingIntoWords, sum} from "./1";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    const sum1 = sum(a, b);
    const sum2 = sum(b, c);

    expect(sum1).toBe(3);
    expect(sum2).toBe(5);
})

test('multiply should be correct', () => {
    const multiply1 = multiply(a, b);
    const multiply2 = multiply(b, c);

    expect(multiply1).toBe(2);
    expect(multiply2).toBe(6);
})

test('splitting into words', () => {
    const words1 = splittingIntoWords('Hello my friends');
    const words2 = splittingIntoWords('JS - the best programming language.')

    expect(words1.length).toBe(3);
    expect(words1[0]).toBe('hello');
    expect(words1[1]).toBe('my');
    expect(words1[2]).toBe('friends');

    expect(words2.length).toBe(5);
    expect(words2[0]).toBe('js');
    expect(words2[1]).toBe('the');
    expect(words2[2]).toBe('best');
    expect(words2[3]).toBe('programming');
    expect(words2[4]).toBe('language');
})