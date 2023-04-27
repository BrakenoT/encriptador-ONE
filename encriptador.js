var boton_encriptar = document.querySelector("#boton-encriptar");

function encriptar(){
    var texto_para_encriptar = document.getElementById("texto_a_encriptar").value.toLowerCase();

    var texto_encriptado = texto_para_encriptar.replace(/e/img, "enter")
                                                .replace(/i/img, "imes")
                                                .replace(/a/img, "ai")
                                                .replace(/o/img, "ober")
                                                .replace(/u/img, "ufat")
    
    document.getElementById("respuesta").innerHTML = texto_encriptado;
}
boton_encriptar.onclick = encriptar;

var boton_desencriptar = document.querySelector("#boton-desencriptar");

function desencriptar(){
    var texto_para_desenpcriptar = document.getElementById("texto_a_encriptar").value.toLowerCase();

    var texto_desencriptado = texto_para_desenpcriptar.replace(/enter/img, "e")
                                                        .replace(/imes/img, "i")
                                                        .replace(/ai/img, "a")
                                                        .replace(/ober/img, "o")
                                                        .replace(/ufat/img, "u")

    document.getElementById("respuesta").innerHTML = texto_desencriptado;
}

boton_desencriptar.onclick = desencriptar;

var boton_copiar = document.querySelector("#boton-copiar");

function copiar(){
    var texto_a_copiar = document.querySelector("#respuesta");
    texto_a_copiar.select();

    document.execCommand("copy");
}

boton_copiar.onclick = copiar;

var boton_limpiar = document.querySelector("#boton-limpiar");

function limpiar(){
    var accion_limpiar = document.location.reload()
}
boton_limpiar.onclick = limpiar;

function mostrarOcultarDivs() {
    setTimeout(() => {
      let texto = document.getElementById("texto_a_encriptar").value;
      let divPasivo = document.getElementById("pasivo");
      let divActivo = document.getElementById("activo");
      let textoEncriptado = document.getElementById("imagen_de_vacio");
      if (texto == "") {
       
        divActivo.style.display = "none";
      } else {
        
        divPasivo.style.display = "none";
        divActivo.style.display = "block";
        
        textoEncriptado.value = texto;
      }
    }, 0);
  }

