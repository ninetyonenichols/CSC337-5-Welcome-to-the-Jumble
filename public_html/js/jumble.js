/*
 * Author: Justin Nichols
 * Class: CSC337 (Web Development)
 * Purpose: This page adds functionality to index.html.
 *          Specifically, it allows the user to update the ciphers / cipher-texts.
 */

// making this global for random access later
shuffledAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

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
    nRows = 5;
    nCols = 5;
    tableHTML = "";

    // serializing table
    for (let row = 0; row < nRows; row++) {
        tableHTML += "<tr>";
        for (let col = 0; col < nCols; col++) {
            tableHTML += "<td>";
            tableHTML += shuffledAlphabet[row * 5 + col];
            tableHTML += "</td>";
        }
        tableHTML += "</tr>";
    }

    document.getElementById("square_key").innerHTML = tableHTML;
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
        // ignoring non-alphabetic chars and "z"
        if (currChar == currChar.toUpperCase() || currChar == "z") {
            cipherText += currChar;
            continue;
        }
        var plainCode = plainText.charCodeAt(i);
        let aCode = "a".charCodeAt(0);
        var cipherCode = aCode + (plainCode - aCode + key) % 26;
        cipherText += String.fromCharCode(cipherCode);
    }

    document.getElementById("caesar_text").innerText = cipherText;
}

/*
 * Updates the Square cipher-text
 * @param: plaintext, a string. The plaintext input by the user.
 */
function setSquareText() {
    var plainText = plaintext.value.toLowerCase();
    var cipherText = "";

    // building cipherText
    for (var i = 0; i < plaintext.value.length; i++) {
        var currChar = plainText[i];
        // ignoring non-alphabetic chars and "z"
        if (currChar == currChar.toUpperCase() || currChar == "z") {
            cipherText += currChar;
            continue;
        }
        var plainCode = plainText.charCodeAt(i);
        let aCode = "a".charCodeAt(0);
        cipherText += shuffledAlphabet[plainCode - aCode];
    }
    
    document.getElementById("square_text").innerText = cipherText;
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
 * Shuffles the global shuffledAlphabet array
 * This function implements the Fisher-Yates shuffle algorithm, as described here:
 *     https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array.
 */
function shuffleAlphabet() {
    var origIdx, randIdx, origVal;
    
    for (origIdx = 0; origIdx < shuffledAlphabet.length; origIdx++) {
        randIdx = Math.floor(Math.random() * (origIdx + 1));
        origVal = shuffledAlphabet[origIdx];
        shuffledAlphabet[origIdx] = shuffledAlphabet[randIdx];
        shuffledAlphabet[randIdx] = origVal;
    }
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
