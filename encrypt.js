function encrypt2(message, key) {
    var encryptedMssg = []
    for (var i = 0; i < message.length; i++) {
        var changeMessage = i%key.length
        var charCode = (message.charCodeAt(i)+key.charCodeAt(changeMessage));
        encryptedMssg.push(charCode);
    }
    //return JSON.stringify(encryptedMssg);
    console.log(encryptedMssg)
}

function mod(x, y) {
    const remainder = x % y;
    if (remainder < 1) {
        return y + remainder;
    } else {
        return remainder;
    }
}

function encrypt(message, key) {
    var encryptedMssg = ""
    for (var i = 0; i < message.length; i++) {
        const combined = (message[i].charCodeAt(0)-96 + key[i].charCodeAt(0)-96)
        const index = mod(combined, 26);
        encryptedMssg+= String.fromCharCode(index+96);

        return encryptedMssg

}

encrypt2("hello world", "1234")


// function decrypt(encryptedMssg, key) {
//     var originalMssg = []; 
//     for (var i = 0; i<encryptedMssg.length; i++) {

//     }
// }


