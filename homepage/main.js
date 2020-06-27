const buttonEntrar = document.querySelector(".btn-entrar")
console.log(buttonEntrar);

buttonEntrar.addEventListener('click', function (){
    const inputName = document.querySelector(".input-name")
    localStorage.setItem('nomeUsuario', inputName.value)
})