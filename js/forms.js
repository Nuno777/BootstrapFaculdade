$(document).ready(function () {
    $("#contato").submit(function () {
        return validar();
    });
    
    $("#validarfeed").hide();
    $("#name").on("change keyup", verificarNome);
    $("#apelido").on("change keyup", verificarApelido);
    // $("#email").on("change keyup", verificarEmail);
    // $("#age").on("change keyup", verificarIdade);
    // $("#tel").on("change", verificarTelefone);
    // $("#password").on("change keyup", verificarPass);

    /*var nome = $("#name").val().trim();
    var apelido = $("#apelido").val().trim();
    var email = $("#email").val().trim();
    var endereco = $("#endereco").val().trim();
    var genero = $("#gen").val().trim();
    var telefone = $("#tel").val().trim();
    var msg = $("#mensagem").val().trim();
    var testEmail = /^\S+@\S+.\S+$/; */

    function verificarNome() {
        var nome = $("#name").val().trim();
        if (nome.length === 0 || nome.length < 6||nome.length >150) {
            $(".invalid-name").show();
        } else {
            $(".invalid-name").hide();
        }
    }

    function verificarApelido() {
        var nome = $("#apelido").val().trim();
        if (nome.length === 0 || nome.length < 6||nome.length >150) {
            $(".invalid-apelido").show();
        } else {
            $(".invalid-apelido").hide();
        }
    }

});