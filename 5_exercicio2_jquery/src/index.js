

$(document).ready(function () {
     
    // prevenindo reload no formulario
    $("#formulario").submit(function (e) {
        e.preventDefault()

    })

    // campo cpf
    $("#cpf").mask("000.000.000-00");

    // campo telefone
    $("#telefone").mask("(00)00000-0000");

    // campo cep
    $("#cep").mask("00000-000");

});