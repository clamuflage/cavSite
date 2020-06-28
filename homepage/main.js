const buttonEntrar = document.querySelector(".btn-entrar")
console.log(buttonEntrar);
//const teste = {
  //  casa:'A Casa Arte Vida é uma organização não governamental, sem fins lucrativos. Fundada em 2007, a CAV foi idealizada por um grupo de profissionais de diversas áreas, interessados em promover o desenvolvimento social, visando a erradicação da pobreza, através de iniciativas ligadas à educação de qualidade.'
//};
//console.log(teste.casa);

buttonEntrar.addEventListener('click', function (){
    const inputName = document.querySelector(".input-name")
    localStorage.setItem('nomeUsuario', inputName.value)
})