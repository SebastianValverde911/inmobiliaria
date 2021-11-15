window.onload = function () {
    document.getElementById("submit").addEventListener("click", function () {
        var verificacion = document.getElementById("verificacion").checked;
        var cedula = document.getElementById("cedula").value;
        var msg_cedula = document.getElementById("msg-cedula");
        var msg_verificar = document.getElementById("msg-verificar");
        var msg_celular = document.getElementById("msg-celular");

        msg_cedula.innerHTML="";
        msg_verificar.innerHTML="";
        msg_celular.innerHTML="";

        if (cedula.length == 0) {
            /* alert("Digite la cedula"); */
            msg_cedula.innerHTML="Digite cedula";
        }

        if (!verificacion) {
            /* alert("Debe de aceptar las politicas"); */
            msg_verificar.innerHTML="Debe de aceptar las politicas";

        }

        let celular = document.getElementById("celular").value;
        let expresion = /^[0-9]{10}$/;

        if(!expresion.test(celular)){
            /* alert('El campo celular debe tener 10 numeros'); */
            msg_celular.innerHTML="El campo celular debe tener 10 numeros";
        }
    });
}