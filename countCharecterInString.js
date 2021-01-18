function countChar(str) {
    let charObj = {};

    for(let char of str) {
        char = char.toLowerCase();
        if(charObj[char]){
            charObj[char]++
        }
        else{
            charObj[char] = 1
        }
    }
    return charObj;
}

countChar('abcccCc');