"use strict";

/** Checking if word object has a greater value at same key of string object. Inputs: Two Strings(word and string of letters) Output: Returns true or false */

// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, str) {
    if (word.length === 0) { return true; }
    if (str.length === 0) { return false; }

    //Creating objects to compare
    let wordObj = createFreqCounter(word);
    let strObj = createFreqCounter(str);

    //Looping through word object
    for (let char in wordObj) {
        if (wordObj[char] > strObj[char]) {
            return false;
        }
    }
    return true;

}

/** Creates frequency counter object to keep track of frequency of letters. Input: String Output: Object */

function createFreqCounter(string) {
    let freqs = {};
    for (let char of string) {
        let charCount = freqs[char] || 0;
        freqs[char] = charCount + 1;
    }
    return freqs;
}