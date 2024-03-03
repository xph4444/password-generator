const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

console.log("hello")
let passwordValue1 = document.getElementById("password-shelf-1")
let passwordValue2 = document.getElementById("password-shelf-2")
// let passwordValues = document.querySelectorAll("password-shelf"); needs foreach to go through the elements inside it
let passwordValues = document.getElementsByClassName("password-shelf");
let tipsText = document.getElementById("tips")
let ifChecked = true



function randomCharacter() {
    let index = " "
    if (ifChecked === true) {
        index = Math.floor(Math.random() * characters.length)
    } else {
        index = Math.floor(Math.random() * (characters.length - 40))
    }

    return characters[index]
}


function generatePassword() {
    ifChecked = document.getElementById("mySwitch").checked
    passwordValue1.textContent = ""
    passwordValue2.textContent = ""
    for (i = 0; i < 15; i++) {
        passwordValue1.textContent += randomCharacter()
        passwordValue2.textContent += randomCharacter()
    }
    for (i = 0; i < passwordValues.length; i++) {
        passwordValues[i].style.color = "#55F991"
    }
    tipsText.textContent = "Click on the password to copy"
}


// 2024-02-28, 以下function来自chatGPT

function copyText(clickedDiv) {
    // 获取被点击的div内的文本内容
    var textToCopy = clickedDiv.innerText;

    // 创建一个临时的textarea元素
    var tempTextArea = document.createElement("textarea");


    // 设置textarea的value为要复制的文本内容
    tempTextArea.value = textToCopy;

    // 将textarea添加到DOM中
    document.body.appendChild(tempTextArea);

    // 选中textarea中的文本
    tempTextArea.select();

    // 将选中的文本复制到剪贴板
    document.execCommand("copy");

    // 移除临时的textarea元素
    document.body.removeChild(tempTextArea);

    // 可以添加一些提示，表明文本已被复制
    // alert("Text has been copied to clipboard: " + textToCopy);
    tipsText.textContent = "Text has been copied: " + textToCopy
}



