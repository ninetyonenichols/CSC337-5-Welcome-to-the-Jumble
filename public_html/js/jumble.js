/*
 * Author: Justin Nichols
 * Class: CSC337 (Web Development)
 * Purpose: This page adds functionality to index.html.
 *          Specifically, it allows the user to update the ciphers / cipher-texts.
 */

/*
 * Updates the label for the Caesar-cipher's key
 */
function setCaesarKeyLabel() {
    var label = document.getElementById("caesar_key_label");
    var caesarKey = document.getElementById("caesar_key");
    label.innerText = caesarKey.value; 
}

/*
 * Updates the square for the Square-cipher's key
 */
function setSquareKey() {
}

/*
 * Updates the Caesar cipher-text
 * @param: plaintext, a string. The plaintext input by the user.
 */
function setCaesarText() {
    var plainText = plaintext.value.toLowerCase();
    var key = parseInt(document.getElementById("caesar_key").value);
    var cipherText = "";
    
    // building cipherText 
    for (var i = 0; i < plaintext.value.length; i++) {
        var currChar = plainText[i];
        // ignoring non-alphabetic chars
        if (currChar == currChar.toUpperCase()) {
            cipherText += currChar;
            continue;
        }
        var plainCode = plainText.charCodeAt(i);
        var cipherCode = "a".charCodeAt(0) + (plainCode + key) % 26;
        cipherText += String.fromCharCode(cipherCode);
    }

    document.getElementById("caesar_text").innerText = cipherText;
}

/*
 * Updates the Square cipher-text
 * @param: plaintext, a string. The plaintext input by the user.
 */
function setSquareText() {
    var squareText = document.getElementById("square_text");
    squareText.innerText = plaintext.value;
}

/*
 * Updates both cipher-texts
 */
function setCipherTexts() {
    var plaintext = document.getElementById("plaintext");
    setCaesarText(plaintext);
    setSquareText(plaintext);
}

/*
 * Initializes the page upon loading
 */
function initPage() {
    setCaesarKeyLabel();
    setSquareKey();
    setCipherTexts();
}

initPage();
