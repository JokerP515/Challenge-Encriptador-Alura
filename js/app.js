//Se basa en cifrado cesar con desplazamiento 4

function encriptar(){
    const texto = document.getElementById('input').value;
    let textoEncriptado = '';
    for(let i=0;i<texto.length;i++){
        let codigo = texto.charCodeAt(i);
        textoEncriptado+= String.fromCharCode(codigo+4);
    }
    document.getElementById('contenido_caja_texto').innerText = `Texto encriptado: ${textoEncriptado}`;
}

function desencriptar(){
    const texto = document.getElementById('input').value;
    let textoDesencriptado = '';
    for(let i=0;i<texto.length;i++){
        let codigo = texto.charCodeAt(i);
        textoDesencriptado+= String.fromCharCode(codigo-4);
    }
    document.getElementById('contenido_caja_texto').innerText = `Texto desencriptado: ${textoDesencriptado}`;
}

function copiarTexto(){
    const contenido = document.getElementById('contenido_caja_texto').innerText.split(': ')[1];
    navigator.clipboard.writeText(contenido);
    document.getElementById('input').value = '';
}