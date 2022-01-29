var email = document.getElementById('email');
var senha = document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#4A5F6A";
})

email.addEventListener('bluer',()=>{
    email.style.borderColor = "#ccc";
})

senha.addEventListener('focus',()=>{
    senha.style.borderColor = "#4A5F6A";
})

senha.addEventListener('bluer',()=>{
    senha.style.borderColor = "#ccc";
})