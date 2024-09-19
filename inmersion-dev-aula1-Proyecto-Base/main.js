let canti = document.getElementById('cantidad');
let button = document.getElementById('generar');
let respuesta = document.getElementById('contrasena');

let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=!@#$%^&*()"


function generarPassword(){
    let imput = parseInt(canti.value);
    if(imput < 8){
        alert("La cantidad debe ser mayor a 8 caracteres");
    }

    let password ='';
    
    for (let i = 0; i < imput; i++) {
        
        let letra = caracteres[Math.floor(Math.random()*caracteres.length)];//Estamos calculando la posicion de la cadena de caracteres y sacamos la letra con ejm.caracteres[25]    
        password+=letra;//concatenamos cada letra al estring vacio
    }
    console.log(password);
    respuesta.value = password;

    const debil = /^.{0,5}$/;
    const media = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
    const fuerte = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // Validaciones
    if (debil.test(password)) {
        return console.log('Débil');
        
    } else if (fuerte.test(password)) {
        return console.log('Fuerte');
    } else if (media.test(password)) {
        return console.log('Media');
        
    }

    let valor

}


function elimi() {
    respuesta.value = '';
}




