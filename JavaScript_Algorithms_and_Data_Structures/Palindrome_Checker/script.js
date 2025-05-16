const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const textInput = document.getElementById("text-input");

checkButton.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value");
    } 
    else if (textInput.value.length === 1) {
        resultDiv.innerText = `${textInput.value}  is a palindrome`
    }
    else if (textInput.value === textInput.value.split("").reverse().join("")) {
        resultDiv.innerText = `${textInput.value} is a palindrome`;
    }
    //now if there is _,!@#$%^&*()/\ or spaces in the string, we should remove them
    else if (textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === textInput.value.replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("").toLowerCase()) {
        resultDiv.innerText = `${textInput.value} is a palindrome`;
    }
    else {
        resultDiv.innerText = `${textInput.value} is not a palindrome`;
    }
    
});