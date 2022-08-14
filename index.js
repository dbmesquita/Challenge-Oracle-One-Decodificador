
visible = () => {
  document.getElementById("copy").style.display = "inline-block";
  document.getElementById("texto").style.display = "inline-block";
  document.getElementById("exibir-0").style.display = "none";
  document.getElementById("exibir-00").style.display = "none";
}

const texto = document.getElementById('buscar')
const regex = /^[a-z\s]+$/
const regexM = /^[A-Z\S]+$/

copiar = () => {
  const copy = document.getElementById('texto').select();
  document.execCommand('copy')
  alert("Menssagem Copiada!")
}

codificar = () => {
  const msg = texto.value

  if (regex.test(msg) == true) {

    const encrypt = msg
      .replaceAll('e', 'enter')
      .replaceAll('i', 'imes')
      .replaceAll('a', 'ai')
      .replaceAll('o', 'ober')
      .replaceAll('u', 'ufat')

    const outMsg = encrypt

    visible()
    document.getElementById('texto').innerHTML = outMsg
    document.getElementById('buscar').value = '';
  }
  else if (!isNaN(msg) && msg.length == 0) {
    alert("Nenhuma mensagem encontrada")
  }
  else if (regexM.test(msg) == true) {
    alert("Apenas letras minúsculas e sem acento.")
  }
  else {
    alert("Apenas letras minúsculas e sem acento.")
  }
}

decodificar = () => {
  const msg = texto.value

  if (regex.test(msg) == true) {

    const dencrypt = msg
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replaceAll('ai', 'a')
      .replaceAll('ober', 'o')
      .replaceAll('ufat', 'u')

    const outMsg = dencrypt

    visible()
    document.getElementById('texto').innerHTML = outMsg
    document.getElementById('buscar').value = '';
  }
  else if (!isNaN(msg) && msg.length == 0) {
    alert("Nenhuma mensagem encontrada")
  }
  else if (regexM.test(msg) == true) {
    alert("Apenas letras minúsculas e sem acento.")
  }
  else {
    alert("Apenas letras minúsculas e sem acento.")
  }
}