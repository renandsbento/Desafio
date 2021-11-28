function fazGet(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criarLinha(usuario) {
  // colocando infods da tabela

  linha = document.createElement("tr");
  tdbairro = document.createElement("td");
  tdcep = document.createElement("td");
  tdcidade = document.createElement("td");
  tdfachada = document.createElement("td");
  tdlocationlat = document.createElement("td");
  tdlocationlong = document.createElement("td");
  tdnome = document.createElement("td");
  tdnum = document.createElement("td");
  tdplantadorms = document.createElement("td");
  tdplantametragem = document.createElement("td");
  tdplantapreco = document.createElement("td");
  tdplantavagas = document.createElement("td");
  tdrua = document.createElement("td");
  tdespaco = document.createElement("hr");

  tdbairro.innerHTML = usuario.bairro;
  tdcep.innerHTML = usuario.cep;
  tdcidade.innerHTML = usuario.cidade;
  tdfachada.innerHTML = usuario.fachada;
  tdlocationlat.innerHTML = usuario.location._lat; //.location._lat    só dar console log dos usuarios, e passar a mão no console log pra ver o codigo exato
  tdlocationlong.innerHTML = usuario.location._long;
  tdnome.innerHTML = usuario.nome;
  tdnum.innerHTML = usuario.num;
  tdplantadorms.innerHTML = usuario.planta.dorms;
  tdplantametragem.innerHTML = usuario.planta.metragem;
  tdplantapreco.innerHTML = usuario.planta.preco;
  tdplantavagas.innerHTML = usuario.planta.vagas;
  tdrua.innerHTML = usuario.rua;

  // Testezinho
  var lista = [];
  lista.push(usuario.cidade);
  //console.log(lista)

  linha.appendChild(tdbairro);
  linha.appendChild(tdcep);
  linha.appendChild(tdcidade);
  linha.appendChild(tdfachada);
  linha.appendChild(tdlocationlat);
  linha.appendChild(tdlocationlong);
  linha.appendChild(tdnome);
  linha.appendChild(tdnum);
  linha.appendChild(tdplantadorms);
  linha.appendChild(tdplantametragem);
  linha.appendChild(tdplantapreco);
  linha.appendChild(tdplantavagas);
  linha.appendChild(tdrua);
  linha.appendChild(tdespaco);

  return linha;
}

function criarLinha2(usuario) {
  // SEM PLANTA

  linha = document.createElement("tr");
  tdbairro = document.createElement("td");
  tdcep = document.createElement("td");
  tdcidade = document.createElement("td");
  tdfachada = document.createElement("td");
  tdlocationlat = document.createElement("td");
  tdlocationlong = document.createElement("td");
  tdnome = document.createElement("td");
  tdnum = document.createElement("td");
  tdrua = document.createElement("td");
  tdespaco = document.createElement("hr");

  tdbairro.innerHTML = usuario.bairro;
  tdcep.innerHTML = usuario.cep;
  tdcidade.innerHTML = usuario.cidade;
  tdfachada.innerHTML = usuario.fachada;
  tdlocationlat.innerHTML = usuario.location._lat; 
  tdlocationlong.innerHTML = usuario.location._long;
  tdnome.innerHTML = usuario.nome;
  tdnum.innerHTML = usuario.num;
  tdrua.innerHTML = usuario.rua;

  linha.appendChild(tdbairro);
  linha.appendChild(tdcep);
  linha.appendChild(tdcidade);
  linha.appendChild(tdfachada);
  linha.appendChild(tdlocationlat);
  linha.appendChild(tdlocationlong);
  linha.appendChild(tdnome);
  linha.appendChild(tdnum);
  linha.appendChild(tdrua);
  linha.appendChild(tdespaco);

  return linha;
}

function main() {
  let data = fazGet("https://api.estagio.amfernandes.com.br/imoveis");
  let usuarios = JSON.parse(data);
  let tabela = document.getElementById("tabela");


  console.log(usuarios);

  // Se o length for 9, então  tem a PLANTA !! e 8 não tem planta , usar < que 10

  listacont = [];
  i = 0;

  usuarios.forEach((element) => {
    var len = Object.keys(usuarios[i]).length; 
    if (len > 8) {

      let linha = criarLinha(element);
      tabela.appendChild(linha);
    } else {
      let linha = criarLinha2(element);
      tabela.appendChild(linha);
      listacont.push(i);
    }
    i += 1;
  });

  pesq4(listacont);
}

function pesq4(lista) {
  let Row = document.getElementById("tabela");
  let Cells = Row.getElementsByTagName("td");
  let Cells2 = Row.getElementsByTagName("tr");

  console.log(Cells.length);
  console.log(Cells2.length);

  console.log(lista);
  novalista = [];

  for (var b = 0; b < lista.length; b++) {
    a = lista[b] * 13; // vezes 13 pra ter a contagem de Cells
    novalista.push(a);
  }

  console.log(novalista);

  const inputEle = document.getElementById("txt");
  inputEle.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;

    if (key == 13) {
      for (var k = 0; k < Cells2.length; k++) {
        Cells2[k].style.display = "none";
      }

      c = 0;

      for (b = 0; b < Cells.length; b++) {
        if (b % 9 == 0) {
          if (
            b == novalista[0] ||
            b == novalista[1] ||
            b == novalista[2] ||
            b == novalista[3] ||
            b == novalista[4] ||
            b == novalista[5] ||
            b == novalista[6] ||
            b == novalista[7] ||
            b == novalista[8]
          ) {
            // ENTÃO NÃO TEM PLANTA, TUDO POR 9
            if (
              Cells[b].innerText == this.value ||
              Cells[b].innerText.toLowerCase() == this.value ||
              Cells[b].innerText.toUpperCase() == this.value
            ) {
        
              console.log("carregou enter o valor digitado foi: " + this.value); // OU alert
              Cells2[b / 9].style.display = "block";

              c += 4;
            }
          }
        } else {
          if (b % 13 == 0)
            if (
              Cells[b].innerText == this.value ||
              Cells[b].innerText.toLowerCase() == this.value ||
              Cells[b].innerText.toUpperCase() == this.value
            ) {
              Cells2[b / 13 - c].style.display = "block";
            }
        }
      }
    }
  });
}

main();
