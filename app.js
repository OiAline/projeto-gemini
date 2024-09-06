function pesquisar() {
  //Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

   // se o campoPesquisa for uma string sem nada
   if (!campoPesquisa) {
    section.innerHTML = "Pesquise seu ADC"
      return
   }

   campoPesquisa = campoPesquisa.toLowerCase ()

    //Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
   

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      
      //se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa)) {
            //cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <img src="${dado.imagem}" alt="${dado.titulo}">
          <a href="${dado.link}" target="_blank">${dado.titulo}</a>
        </h2>
        <p>${dado.descricao}</p>
      </div>
    `;
      }
    }

    if (!resultados){
      resultados = "Pesquise seu ADC"

    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }
