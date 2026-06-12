const series = [{
    titulo: "supernatural",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDmq9CDxCoYtSZxbqr8Z21UfiCWIcsg0GbA&s",
    descricao: "Sam e Dean Winchester foram treinados por seu pai para caçar criaturas sobrenaturais. Agora, seu pai desapareceu misteriosamente enquanto caçava o demônio que matou sua mãe, 22 anos atrás",
},
{
    titulo: "Spider-Noir",
    imagem:"https://m.media-amazon.com/images/M/MV5BYjU3NjEwNTItMzc1Mi00Y2QyLTljNDItOTQ4YjU4NjZjN2EyXkEyXkFqcGc@._V1_.jpg",
    descricao: "O detetive particular Ben Reilly é contratado para casos simples"
},
{
    titulo: "My Little Pony: A Amizade É Mágica",
    imagem: "https://images.justwatch.com/poster/250089983/s718/my-little-pony-friendship-is-magic.jpg",
    descricao: "A história acompanha a studiosa pônei Twilight Sparkle enquanto ela explora o reino mágico de Equestria, fazendo novas amigas e aprendendo valiosas lições sobre laços afetivos"
},
{
    titulo: "Star vs. As Forças do Mal",
    imagem: "https://br.web.img3.acsta.net/pictures/15/10/29/17/58/034512.jpg",
    descricao: "é uma série de animação que acompanha Star Butterfly, uma princesa mágica e impulsiva do reino de Mewni"
},
{
    titulo: "Gravity Falls: Um Verão de Mistérios",
    imagem: "https://m.media-amazon.com/images/I/61-vTP1hQ6S._AC_UF894,1000_QL80_.jpg",
    descricao: "acompanha os gêmeos de 12 anos, Dipper e Mabel Pines. Eles são enviados para passar as férias com o seu excêntrico tio-avô Stan, na pequena e bizarra cidade de Gravity Falls, no Oregon"
},
{
    titulo: "The Boys",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e5/The_Boys_%28s%C3%A9rie_de_televis%C3%A3o%29.webp",
    descricao: "é uma sátira ácida sobre um mundo onde super-heróis são celebridades corruptas e patrocinadas por uma corporação gananciosa, a Vought International"
}
]

const listaSeries = document.getElementById ("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML = ""
    lista.forEach(serie => {
        listaSeries.innerHTML += `
        <div class="col-md-4">
        <div class="card card-filme h-100">
        <img src="${serie.imagem}" class="card-img-top">
        <div class="card-body">
            <h3>${serie.titulo}</h3>
            <p>${serie.descricao}</p>
            <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">VER DETALHES</button>
        </div>
        </div>
    </div>
        `
    })
}

mostrarSeries(series)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da Serie",
        icon: "info"
    })
}