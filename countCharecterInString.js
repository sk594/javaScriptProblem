function countChar(str) {
    let charObj = {};

    for(let char of str) {
        char = char.toLowerCase();
        // if(/[a-z0-9]/.test(char)){     //add regex for count only number and charecter 
        //     charObj[char] = ++charObj[char] || 1;
        // }
        if(isAlfaNumeric(char)){
            charObj[char] = ++charObj[char] || 1;
        }
    }
    console.log("====",charObj)
    return charObj;
}

function isAlfaNumeric(char) { //check charecter is alfaNumeric or not
    code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&   //numeric 0-9
       !(code > 64 && code < 91) &&   // upper case alfa A-Z
       !(code > 96 && code < 123)     // lower case alfa a-z
    ){
        return false;
    } return true;
}

countChar('abcc@! # cCc');