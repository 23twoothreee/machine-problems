/** Machine Problem: Phone Combinations
Using javascript/typescript, return all possible letter combinations that a phone button from 2-9 represents. The order of the answer does not matter.
                    1 2abc 3def
                    4ghi 5jkl 6mno
                    7pqrs 8tuv 9wxyz
a. Example 1:
    ■ Input: “23”
    ■ Output: [“ad”,”ae”,”af”,”bd”,”be”,”bf”,”cd”,”ce”,”cf”]
b. Example 2:
    ■ Input: “”
    ■ Output: []
c. Example 3:
    ■ Input: “2”
    ■ Output: [“a”,”b”,”c”]
*/

function phoneCombinations(digits) {
    const digitToLetters = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    
    digits = filterDigits(digits);
    if(!digits) return [];
    let combinations = [""];

    for (let digit of digits) {
        const letters = digitToLetters[digit];
        
        if (letters === "") {
            continue;
        }
        const newCombinations = [];

        for (let combination of combinations) {
            for (let letter of letters) {
                newCombinations.push(combination + letter);
            }
        }
        combinations = newCombinations;
    }
    return combinations;
}

function filterDigits(digits) {
    return digits
        .split('') 
        .filter(digit => /[2-9]/.test(digit))
        .join(''); 
}

let input = "23"
answer = phoneCombinations(input);
console.log(answer);