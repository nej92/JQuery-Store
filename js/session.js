function obtenerDatosSession (){
    const user = document.getElementById('user-alma').value;
    const pass = document.getElementById('pass-alma').value;
    sessionStorage.setItem("usuario", user);
    sessionStorage.setItem("contraseña", pass);
}

$('#confirm-btn').on('click', function (){
    obtenerDatosSession();
    $("#session-page").css ("display", "none");
    $("#pagina").css("display", "block");  
    }
);