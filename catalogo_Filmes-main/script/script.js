const filmes = [{
    titulo: "Vingadores",
    imagem: "https://noticiasdatv.uol.com.br/media/_versions/ordem-cronologica-marvel-vingadores-ultimato-imagem-divulgacao-disney_fixed_large.jpg",
    descricao: "Os maiores heróis da terra unidos",
},
{
    titulo: "Batman",
    imagem:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O cavaleiro das trevas"
},
{
    titulo: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da vizinhança"
},
{
    titulo: "Aladdin",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Aladdin_%282019%29.jpg/250px-Aladdin_%282019%29.jpg",
    descricao: "lâmpada mágica"
},
{
    titulo: "Harry Potter",
    imagem: "https://blog.pensanddolls.com.br/wp-content/uploads/2023/03/4-fatos-que-voce-nao-sabe-sobre-Harry-Potter.jpg",
    descricao: "Pedra Filosofal"
},
{
    titulo: "Esqueceram de mim",
    imagem: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/096d1213-70ba-412a-b09f-8f2555f1061f/compose?aspectRatio=1.78&format=webp&width=1200",
    descricao: "Uma grande aventura de natal"
}
]

const listaFilmes = document.getElementById ("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
        <div class="col-md-4">
        <div class="card card-filme h-100">
        <img src="${filme.imagem}" class="card-img-top">
        <div class="card-body">
            <h3>${filme.titulo}</h3>
            <p>${filme.descricao}</p>
            <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">VER DETALHES</button>
        </div>
        </div>
    </div>
        `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    })
}