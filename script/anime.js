const animes = [{
    titulo: "One Piece",
    imagem: "https://static.wikia.nocookie.net/onepiece/images/8/87/One_Piece_Anime_Logo.png/revision/latest/scale-to-width-down/1200?cb=20250813211750&path-prefix=pt",
    descricao: " A história acompanha Monkey D. Luffy, um jovem cujo corpo ganhou propriedades de borracha após comer uma fruta mágica, em sua jornada para reunir uma tripulação e encontrar o lendário tesouro One Piece para se tornar o Rei dos Piratas."
},
{
    titulo: "Os Vingadores de Tóquio",
    imagem:"https://images.justwatch.com/poster/302216264/s718/dong-jing-ribenziyazu.jpg",
    descricao: "onde um jovem adulto viaja 12 anos ao passado para salvar sua ex-namorada da morte. Ao se infiltrar em uma perigosa gangue escolar, ele tenta alterar o futuro modificando eventos históricos."
},
{
    titulo: "JUJUTSU KAISEN",
    imagem: "https://m.media-amazon.com/images/M/MV5BMjBlNTExMDAtMWZjZi00MDc5LWFkMjgtZDU0ZWQ5ODk3YWY5XkEyXkFqcGc@._V1_.jpg",
    descricao: "A trama acompanha Yuji Itadori, um jovem que ingere o dedo de um demônio lendário chamado Ryomen Sukuna para salvar seus amigos. Ele se torna o hospedeiro dessa criatura e passa a treinar em uma escola secreta de feiticeiros para exorcizar Maldições — monstros nascidos dos sentimentos negativos humanos"
},
{
    titulo: "Dragon Ball Super",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/74/Dragon_Ball_Super_Key_visual.jpg",
    descricao: "A história se passa após a derrota de Majin Boo, acompanhando Goku e Vegeta em uma jornada para alcançar níveis de poder divino e defender o universo de ameaças interplanetárias, divinas e multiversais"
},
{
    titulo: "Naruto Shippuden",
    imagem: "https://i.redd.it/99u82er66aib1.jpg",
    descricao: "Ambientada dois anos e meio após o protagonista partir para treinar com o mestre Jiraiya, a história acompanha um Naruto mais maduro e habilidoso retornando à Vila da Folha para enfrentar a organização criminosa Akatsuki e resgatar seu amigo Sasuke"
},
{
    titulo: "Demon Slayer - Kimetsu no Yaiba",
    imagem: "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    descricao: "um jovem que se torna um caçador de demônios após sua família ser massacrada e sua irmã mais nova, Nezuko, ser transformada em uma dessas criaturas. O objetivo dele é vingar os seus entes queridos e encontrar uma cura para reverter a maldição da irmã"
}
]

const listaAnimes = document.getElementById ("listaAnimes");

function mostrarAnimes(lista) {
    listaAnimes.innerHTML = ""
    lista.forEach(anime => {
        listaAnimes.innerHTML += `
        <div class="col-md-4">
        <div class="card card-filme h-100">
        <img src="${anime.imagem}" class="card-img-top">
        <div class="card-body">
            <h3>${anime.titulo}</h3>
            <p>${anime.descricao}</p>
            <button class="btn btn-dark" onclick="verDetalhes('${anime.titulo}')">VER DETALHES</button>
        </div>
        </div>
    </div>
        `
    })
}

mostrarAnimes(animes)
function verDetalhes(titulo, descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
}