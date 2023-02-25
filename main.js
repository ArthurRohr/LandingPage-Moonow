const errorNome = document.getElementById("errorNome")
const errorEmail = document.getElementById("errorEmail")
const errorButton = document.getElementById("errorButton")

function validateForm() {
    let nome = document.forms["myForm"]["nome"].value;
    let email = document.forms["myForm"]["email"].value;
    var valid = true

    if ( nome == ""  ) {
        errorNome.innerHTML = `*Campo Obrigatório*`;
        errorButton.innerHTML = `Não foi possível efetivar seu cadastro.`;
        valid = false;
    } else {errorNome.innerHTML = ``}

    if ( email == "" ) {
        errorEmail.innerHTML = `*Campo Obrigatório*`;
        errorButton.innerHTML = `Não foi possível efetivar seu cadastro.`;
        valid = false;
    } else {errorEmail.innerHTML = ``}

    if ( nome !== "" && email !== "" )
    errorButton.innerHTML = `<span style='color:#7834F3'> Cadastro efetuado com sucesso. </span>`;
    valid = true;

}