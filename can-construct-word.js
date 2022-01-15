"use strict";


// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, str) {
    if(word.length === 0 ){return true;}
    if(str.length === 0){return false;}
    
    
    let wordObj = createFreqCounter(word);
    let strObj = createFreqCounter(str);
    for(let char in wordObj){
        if(wordObj[char] > strObj[char]){
            return false;
        }

    }
    return true;

}

function createFreqCounter(string){
    let freqs ={};
    for(let char of string){
        let charCount = freqs[char] || 0;
        freqs[char] = charCount + 1;
    }
    return freqs;
}