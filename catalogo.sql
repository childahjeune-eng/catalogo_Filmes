create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table animes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

select * from filmes;

insert into filmes (titulo, imagem, descricao)
values
("Vingadores", "https://noticiasdatv.uol.com.br/media/_versions/ordem-cronologica-marvel-vingadores-ultimato-imagem-divulgacao-disney_fixed_large.jpg", "Os maiores heróis da terra unidos"
),
("Batman", "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", "O cavaleiro das trevas"
),
("Homem-Aranha", "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg", "O amigo da vizinhança"
),
( "Aladdin", "https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Aladdin_%282019%29.jpg/250px-Aladdin_%282019%29.jpg","lâmpada mágica" 
),
("Harry Potter", "https://blog.pensanddolls.com.br/wp-content/uploads/2023/03/4-fatos-que-voce-nao-sabe-sobre-Harry-Potter.jpg", "Pedra Filosofal"
),
("Esqueceram de mim", "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/096d1213-70ba-412a-b09f-8f2555f1061f/compose?aspectRatio=1.78&format=webp&width=1200",  "Uma grande aventura de natal"
);

select * from series;

insert into filmes (titulo, imagem, descricao)
values
("supernatural", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDmq9CDxCoYtSZxbqr8Z21UfiCWIcsg0GbA&s", "Sam e Dean Winchester foram treinados por seu pai para caçar criaturas sobrenaturais. Agora, seu pai desapareceu misteriosamente enquanto caçava o demônio que matou sua mãe, 22 anos atrás" 
),
("Spider-Noir", "https://m.media-amazon.com/images/M/MV5BYjU3NjEwNTItMzc1Mi00Y2QyLTljNDItOTQ4YjU4NjZjN2EyXkEyXkFqcGc@._V1_.jpg", "O detetive particular Ben Reilly é contratado para casos simples"
),
("My Little Pony: A Amizade É Mágica", "https://images.justwatch.com/poster/250089983/s718/my-little-pony-friendship-is-magic.jpg", "A história acompanha a studiosa pônei Twilight Sparkle enquanto ela explora o reino mágico de Equestria, fazendo novas amigas e aprendendo valiosas lições sobre laços afetivos"
),
("Star vs. As Forças do Mal", "https://br.web.img3.acsta.net/pictures/15/10/29/17/58/034512.jpg", "é uma série de animação que acompanha Star Butterfly, uma princesa mágica e impulsiva do reino de Mewni"
),
("Gravity Falls: Um Verão de Mistérios", "https://m.media-amazon.com/images/I/61-vTP1hQ6S._AC_UF894,1000_QL80_.jpg", "acompanha os gêmeos de 12 anos, Dipper e Mabel Pines. Eles são enviados para passar as férias com o seu excêntrico tio-avô Stan, na pequena e bizarra cidade de Gravity Falls, no Oregon"
),
("The Boys", "https://upload.wikimedia.org/wikipedia/pt/e/e5/The_Boys_%28s%C3%A9rie_de_televis%C3%A3o%29.webp", "é uma sátira ácida sobre um mundo onde super-heróis são celebridades corruptas e patrocinadas por uma corporação gananciosa, a Vought International"
);

select * from series;

insert into filmes (titulo, imagem, descricao)
values
("One Piece", "https://static.wikia.nocookie.net/onepiece/images/8/87/One_Piece_Anime_Logo.png/revision/latest/scale-to-width-down/1200?cb=20250813211750&path-prefix=pt",  " A história acompanha Monkey D. Luffy, um jovem cujo corpo ganhou propriedades de borracha após comer uma fruta mágica, em sua jornada para reunir uma tripulação e encontrar o lendário tesouro One Piece para se tornar o Rei dos Piratas"
),
("Os Vingadores de Tóquio", "https://images.justwatch.com/poster/302216264/s718/dong-jing-ribenziyazu.jpg",  "onde um jovem adulto viaja 12 anos ao passado para salvar sua ex-namorada da morte. Ao se infiltrar em uma perigosa gangue escolar, ele tenta alterar o futuro modificando eventos históricos"
),
("JUJUTSU KAISEN", "https://m.media-amazon.com/images/M/MV5BMjBlNTExMDAtMWZjZi00MDc5LWFkMjgtZDU0ZWQ5ODk3YWY5XkEyXkFqcGc@._V1_.jpg", "A trama acompanha Yuji Itadori, um jovem que ingere o dedo de um demônio lendário chamado Ryomen Sukuna para salvar seus amigos. Ele se torna o hospedeiro dessa criatura e passa a treinar em uma escola secreta de feiticeiros para exorcizar Maldições — monstros nascidos dos sentimentos negativos humanos"
),
("Dragon Ball Super", "https://upload.wikimedia.org/wikipedia/pt/7/74/Dragon_Ball_Super_Key_visual.jpg", "A história se passa após a derrota de Majin Boo, acompanhando Goku e Vegeta em uma jornada para alcançar níveis de poder divino e defender o universo de ameaças interplanetárias, divinas e multiversais"
),
("Naruto Shippuden", "https://i.redd.it/99u82er66aib1.jpg", "Ambientada dois anos e meio após o protagonista partir para treinar com o mestre Jiraiya, a história acompanha um Naruto mais maduro e habilidoso retornando à Vila da Folha para enfrentar a organização criminosa Akatsuki e resgatar seu amigo Sasuke"
),
("Demon Slayer - Kimetsu no Yaiba", "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "um jovem que se torna um caçador de demônios após sua família ser massacrada e sua irmã mais nova, Nezuko, ser transformada em uma dessas criaturas. O objetivo dele é vingar os seus entes queridos e encontrar uma cura para reverter a maldição da irmã"
);