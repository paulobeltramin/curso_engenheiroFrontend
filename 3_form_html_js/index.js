

const formulario = document.getElementById("form");

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    const campo_a = Number(document.getElementById("A").value);
    const campo_b = Number(document.getElementById("B").value);

    const sucesso = document.querySelector(".sucess")
    const messageSucess = "Formulario validado com sucesso "
    const erro = document.querySelector(".error")
    const msgError = `O valor de <b>${campo_b}</b> do campo B deve ser maior que o valor de <b>${campo_a}</b> do campo A`

    if (campo_a < campo_b) {
        sucesso.style.display = "block"
        erro.style.display = "none"
        sucesso.innerHTML = messageSucess


    } else {
        erro.style.display = "block"
        sucesso.style.display = "none"
        erro.innerHTML = msgError
    }


});