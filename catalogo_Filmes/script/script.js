const filmes = [{
    titulo: "Vingadores",
imagem: "https://.themoviedb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg",
descricao: "Os maiores heróis da terra unidos.",
},
{
    titulo: "Batman",
    imagem:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O cavaleiro das trevas,"
},
{
    titulo: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da vizinhança "
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