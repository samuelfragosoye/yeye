const albuns =[
    {
        id: 1,
        titulo: "The College Dropout",
        descricao: "O álbum de estreia que redefiniu o hip-hop com suas batidas soul e letras introspectivas. Lançado em 2004.",
        imagem: "images/album1.png",
        conteudo: "Lançado em 2004, The College Dropout foi um marco no hip-hop. Kanye West desafiou a predominância do gangsta rap com produção baseada em samples de soul e letras que abordavam temas como família, religião, racismo e a busca por sucesso fora dos padrões tradicionais."
    },
    {
        id: 2,
        titulo: "Late Registration",
        descricao: "O segundo álbum que elevou o rap com arranjos orquestrais e produção inovadora. Lançado em 2005.",
        imagem: "images/album2.png",
        conteudo: "Com Late Registration (2005), Kanye expandiu sua paleta sonora, colaborando com o compositor Jon Brion para incorporar arranjos orquestrais complexos, criando um som mais grandioso e cinematográfico."
    },
    {
        id: 3,
        titulo: "Graduation",
        descricao:"Marcou a transição para um som mais eletrônico e de arena, consolidando seu status de superestrela global em 2007.",
        imagem: "images/album3.png",
        conteudo: "Graduation (2007) representa a transição de Kanye para um som mais eletrônico, influenciado pelo house e synth-pop, com hinos projetados para grandes arenas como 'Stronger' e 'Flashing Lights'."
    },
    {
        id: 4,
        titulo: "808s & Heartbreak",
        descricao: "Um álbum inovador que incorporou o uso pesado do Auto-Tune e temas de vulnerabilidade emocional, lançado em 2008.",
        imagem: "images/album4.jpg",
        conteudo:"Utilizando a bateria eletrônica Roland TR-808 e o Auto-Tune como ferramenta expressiva para cantar sobre perda e solidão, Kanye criou uma obra que influenciaria profundamente uma nova geração de artistas de hip-hop e R&B."
    },
    {
        id: 5,
        titulo: "My Beautiful Dark Twisted Fantasy",
        descricao: "Considerado por muitos uma obra-prima, este álbum de 2010 é uma exploração maximalista da fama e do excesso.",
        imagem: "images/album5.jpg",
        conteudo:"Considerado por muitos como sua magnum opus, My Beautiful Dark Twisted Fantasy (2010) é um álbum maximalista e complexo. Gravado no Havaí, o projeto é uma reflexão sobre a fama, o excesso e o lado sombrio do sonho americano."
    },
    {
        id: 6,
        titulo: "Watch The Throne",
        descricao: "Uma colaboração monumental que celebra o luxo, o sucesso e a cultura afro-americana com uma produção grandiosa e letras afiadas. Lançado em 2011.",
        imagem: "images/album6.jpg",
        conteudo: ""
    },
    {
        id: 7,
        titulo: "Yeezus",
        descricao: "Marcado por uma sonoridade industrial, minimalista e agressiva, este álbum de 2013 é uma obra de protesto e confronto sonoro.",
        imagem: "images/album7.jpg",
        conteudo: ""  
    },
    {
        id:8,
        titulo: "The Life Of Pablo",
        descricao: "Um álbum 'vivo' e multifacetado que mistura gospel, trap e soul, refletindo um período de caos criativo e espiritualidade. Lançado em 2016.",
        imagem: "images/album8.png",
        conteudo: ""
    },
    {
        id: 9,
        titulo: "Ye",
        descricao: "Em sete faixas introspectivas, este projeto de 2018 explora temas como saúde mental, família e as controvérsias de sua vida pessoal.",
        imagem: "images/album9.png",
        conteudo: ""
    },
    {
        id: 10,
        titulo: "Kid See Ghosts",
        descricao: "",
        imagem: "images/album10.jpg",
        conteudo: ""
    },
    {
        id: 11,
        titulo: "Jesus Is King",
        descricao: "",
        imagem: "images/album11.jpg",
        conteudo: ""
    },
    {
        id: 12,
        titulo: "Donda",
        descricao: "",
        imagem: "images/album12.webp",
        conteudo: ""
    },
    {
        id: 13,
        titulo: "Vultures 1",
        descricao: "",
        imagem: "images/album13.png",
        conteudo: ""
    },
    {
        id: 14,
        titulo: "Vultures 2",
        descricao: "",
        imagem: "images/album14.jpg",
        conteudo: ""
    },
    {
        id: 15,
        titulo: "Donda 2",
        descricao: "",
        imagem: "images/album15.jpg",
        conteudo: ""
    }
    
];

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('discografia-cards-container');
    if (cardsContainer){
        albuns.forEach(album => {
            const cardHtml = `
                <div class="col-lg-4 col-md-6 mb-4 d-flex">
                    <div class="card">
                        <img src="${album.imagem}" class="card-img-top" alt="Capa do álbum ${album.titulo}">
                        <div class="card-body">
                            <h5 class="card-title">${album.titulo}</h5>
                            <p class="card-text">${album.descricao}</p>
                            <a href="detalhes.html?id=${album.id}" class="btn btn-dark">Ver Detalhes</a>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += cardHtml;
        });
    }

    const detalhesContainer = document.getElementById('detalhes-album-container');
    if(detalhesContainer) {
        const params = new URLSearchParams(window.location.search);
        const albumID = params.get('id');
        const album = albuns.find(item => item.id == albumID);

        if(album){
            const detalheHtml = `
            <div class="row">
                    <div class="col-md-5">
                        <img src="${album.imagem}" class="img-fluid rounded" alt="Capa do álbum ${album.titulo}">
                    </div>
                    <div class="col-md-7">
                        <h2>${album.titulo}</h2>
                        <p class="lead">${album.descricao}</p>
                        <p>${album.conteudo}</p>
                    </div>
                </div>
            `;
            detalhesContainer.innerHTML = detalheHtml;
        } else {
            detalhesContainer.innerHTML = "<p class='text-center'>Álbum não encontrado.</p>";
        }
    }
});