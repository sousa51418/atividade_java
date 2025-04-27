// (1) Mostrar "Olá Mundo" ao clicar no botão
function mostrarOlaMundo() {
    alert("Olá Mundo!");
  }
  
  // (2) Somar dois números e mostrar o resultado
  function somar() {
    const n1 = parseInt(document.getElementById('num1').value);
    const n2 = parseInt(document.getElementById('num2').value);
    const resultado = n1 + n2;
    document.getElementById('resultado').innerText = "Resultado: " + resultado;
  }
  
  // (3) Alterar texto e cor do elemento por ID
  function alterarTextoCor() {
    const texto = document.getElementById('textoAlterar');
    texto.innerText = "Texto alterado!";
    texto.style.color = "red";
  }
  
  // (4) Alterar propriedade de um elemento por NAME
  function alterarTextoPorName() {
    const campo = document.getElementsByName('campoTexto')[0];
    campo.value = "Texto alterado pelo JavaScript";
  }
  
  // (5) Alterar propriedade de elementos por CLASS
  function resetarCaixas() {
    const caixas = document.getElementsByClassName('caixa');
    for (let i = 0; i < caixas.length; i++) {
      caixas[i].checked = false;
    }
  }
  