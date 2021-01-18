function countChar(str) {
    let charObj = {};

    for(let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){     //add regex for count only number and charecter 
            charObj[char] = ++charObj[char] || 1;
        }
    }
    console.log("====",charObj)
    return charObj;
}

countChar('abcc@! # cCc');