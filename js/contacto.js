$(document).ready(function () {
    $("#contato").submit(function () {
        return validar();
    });
    var nome=$("#priname").val().trim();
    var apelido=$("#ultname").val().trim();
    var email = $("#email").val().trim();
});