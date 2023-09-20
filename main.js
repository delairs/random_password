let password = document.getElementById('password');
let passwordLength = document.getElementById('passwordLength');
let saveButton = document.getElementById('saveButton');

function generatePw(len){
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const uppalphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = "1234567890";
    const char = "~!@#$%^&*()_+-={}[]':;/?.,<>";

    const data = lowAlphabet + uppalphabet + num + char;
    let generate = '';
    for (let i = 0; i < len; i++){
        generate += data[Math.floor(Math.random() * data.length)];
    }
    return generate;
}

function getPw(){
    let newPw = generatePw(passwordLength.value);
    password.value = newPw; 
}


function savePw(){
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8' + encodeURIComponent(`password saya: ${document.title}`));
    saveButton.setAttribute('download', 'MyPassword.txt');
    return false;
}