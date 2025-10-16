const albuns =[
    {
        id: 1,
        titulo: "The College Dropout",
        descricao: "O álbum de estreia que redefiniu o hip-hop com suas batidas soul e letras introspectivas. Lançado em 2004.",
        imagem: "images/album1.png",
        destaque: true,
        conteudo: "Lançado em 2004, The College Dropout foi um marco no hip-hop. Kanye West desafiou a predominância do gangsta rap com produção baseada em samples de soul e letras que abordavam temas como família, religião, racismo e a busca por sucesso fora dos padrões tradicionais.\nO álbum estreou no número dois no gráfico da Billboard 200 dos EUA, vendendo 441.000 cópias em sua primeira semana. Foi um grande sucesso comercial, produzindo cinco singles que alcançaram sucesso nas paradas. Após a sua libertação, The College Dropout recebeu aclamação geral dos críticos de música e ganhou vários prêmios West, incluindo um Grammy Awards para Melhor Álbum de Rap na quadragésima sétima edição da premiação. Ele é o álbum mais vendido de West, nos Estados Unidos, com vendas de mais de 3,1 milhões de exemplares e as vendas mundiais de mais de quatro milhões de cópias. Rolling Stone nomeou o álbum como o décimo melhor da década de 2000.",
        imagem_carousel: "images/dropout_banner.jpeg",
        faixas_destaques: [
            {
                nome: "All Falls Down",
                imagem: "images/album1.png"
            },
            {
                nome: "Jesus Walks",
                imagem: "images/album1.png"
            },
            {
                nome: "Through The Wire",
                imagem: "images/album1.png"
            }

        ],
        imagens_era: [
            {
                legenda:"Antes de qualquer fama, antes das controvérsias — era só um garoto com um sonho, um urso de pelúcia e batidas que mudariam o rap pra sempre. Kanye transformou a sala de aula em estúdio e a rotina em arte." ,
                imagem:"images/secundario/tcdsecundario01.jpeg"
            },
            {
                legenda:"O ‘dropout’ que não precisava de diploma pra provar que era gênio. No banco da escola ou no topo do mundo, Kanye já sabia que seu caminho era escrever história, não fazer prova" ,
                imagem:"images/secundario/tcdsecundario02.jpeg"
            },
            {
                legenda:"Com o urso no peito e a alma no microfone, ele levou o espírito universitário pra dentro do hip hop — e mostrou que vulnerabilidade e ego podem coexistir na mesma faixa." ,
                imagem:"images/secundario/tcdsecundario03.jpeg"
            }
        ]
    },
    {
        id: 2,
        titulo: "Late Registration",
        descricao: "O segundo álbum que elevou o rap com arranjos orquestrais e produção inovadora. Lançado em 2005.",
        destaque: false,
        imagem: "images/album2.png",
        conteudo: "Com Late Registration (2005), Kanye expandiu sua paleta sonora, colaborando com o compositor Jon Brion para incorporar arranjos orquestrais complexos, criando um som mais grandioso e cinematográfico.\n Cinco singles foram retirados de Late Registration, incluindo os hits internacionais Touch the Sky, Heard 'Em Say e Gold Digger, que atingiu primeiro lugar na Billboard Hot 100. Foram produzidos vídeos para todos os cinco singles. Para divulgar o álbum West fez uma turnê promocional, e gravou o álbum ao vivo Late Orchestration.",
        faixas_destaques: [
            {
                nome: "Touch The Sky",
                imagem: "images/album2.png"
            },
            {
                nome: "Gold Digger",
                imagem: "images/album2.png"
            },
            {
                nome: "Roses",
                imagem: "images/album2.png"
            }
        ],
        imagens_era: [
            {
                legenda:"Entre livros e batidas, nasceu a lição mais importante: o conhecimento vem de muitos lugares, mas a inspiração vem de dentro. O ‘College Dropout’ não fugiu da escola — ele só criou a própria." ,
                imagem:"images/secundario/lrsecundario01.jpeg"
            },
            {
                legenda:"Enquanto o mundo esperava que ele aprendesse fórmulas, ele preferiu reinventar o som. ‘Late Registration’ foi mais do que um álbum — foi uma aula sobre persistência, estética e propósito." ,
                imagem:"images/secundario/lrsecundario02.jpeg"
            }, 
            {
                legenda:"Entre cabos, MPCs e sonhos, nascia um novo capítulo na música. Kanye não produzia só batidas — ele produzia a si mesmo, nota por nota, rima por rima." ,
                imagem:"images/secundario/lrsecundario03.jpeg"
            }
        ]
    },
    {
        id: 3,
        titulo: "Graduation",
        descricao:"Marcou a transição para um som mais eletrônico e de arena, consolidando seu status de superestrela global em 2007.",
        destaque: true,
        imagem: "images/album3.png",
        conteudo: "Graduation (2007) representa a transição de Kanye para um som mais eletrônico, influenciado pelo house e synth-pop, com hinos projetados para grandes arenas como 'Stronger' e 'Flashing Lights'. Para a direção artística de Graduation, bem como a concepção da capa do disco e seus singles correspondentes, West colaborou com o artista contemporâneo japonês Takashi Murakami. Often chamou 'o Andy [Warhol] do Japão'; o visual artístico surreal de Murakami é caracterizado por criaturas de desenho animado que aparecem de forma amigável e alegre à primeira vez, mas que possuem tons obscuros e torcidos. A colaboração entre os dois surgiu depois que West visitou o estúdio Kaikai Kiki, de Murakami, em Roppongi Hills, durante uma breve viagem à Tóquio, Japão, enquanto estava em turnê. A capa do álbum expressa uma imagem de cor pastel, influenciada pela filiação de Murakami com a superflat, um movimento artístico pós-moderno influenciado pelo manga e o anime.",
        imagem_carousel: "images/graduation_banner.jpeg",
        faixas_destaques: [
            {
                nome: "Stronger",
                imagem: "images/album3.png"
            },
            {
                nome: "I Wonder",
                imagem: "images/album3.png"
            },
            {
                nome: "Flashing Lights",
                imagem: "images/album3.png"
            },
            {
                nome: "Can't Tell Me Nothing",
                imagem: "images/album3.png"
            },
        ],
        imagens_era: [
            {
                legenda:"Do porão da universidade para as catedrais do rap, Kanye se tornou o aluno que virou mestre. Cada verso uma tese, cada sample uma revolução sonora." ,
                imagem:"images/secundario/graduationsecundario01.jpeg"
            },
            {
                legenda:"Palco lotado, luzes acesas, a voz do dropout ecoa: não há limites pra quem acredita no próprio som. O microfone virou diploma, e o mundo virou plateia." ,
                imagem:"images/secundario/graduationsecundario02.jpeg"
            },
            {
                legenda:"No fim da trilogia, o urso se forma — e com ele, toda uma geração que aprendeu a sonhar alto. ‘Graduation’ não foi o fim da jornada, foi apenas o início da lenda." ,
                imagem:"images/secundario/graduationsecundario03.jpeg"
            }
        ]   
    },
    {
        id: 4,
        titulo: "808s & Heartbreak",
        descricao: "Um álbum inovador que incorporou o uso pesado do Auto-Tune e temas de vulnerabilidade emocional, lançado em 2008.",
        destaque: false,
        imagem: "images/album4.jpg",
        conteudo:"Lançado em 2008, 808s & Heartbreak representou uma revolução sonora e emocional na carreira de Kanye West. Após a trágica morte de sua mãe e o fim de um relacionamento, West canalizou sua dor em um projeto minimalista e experimental. Utilizando a bateria eletrônica Roland TR-808 e o Auto-Tune como ferramenta expressiva para cantar sobre perda e solidão, Kanye criou uma obra que quebrou as convenções do hip-hop. O álbum foi inicialmente recebido com ceticismo, mas sua influência se provou profunda, inspirando uma nova geração de artistas de hip-hop e R&B que abraçariam a vulnerabilidade emocional como tema central.",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]    
    },
    {
        id: 5,
        titulo: "My Beautiful Dark Twisted Fantasy",
        descricao: "Considerado por muitos uma obra-prima, este álbum de 2010 é uma exploração maximalista da fama e do excesso.",
        destaque: true,
        imagem: "images/album5.jpg",
        conteudo:"Considerado por muitos como sua magnum opus, My Beautiful Dark Twisted Fantasy (2010) é um álbum maximalista e complexo. Gravado no Havaí em um período de autoexílio após uma série de controvérsias, o projeto é uma reflexão épica sobre a fama, o excesso e o lado sombrio do sonho americano. Com produções suntuosas, orquestras grandiosas e colaborações estelares, West criou uma obra que simultaneamente celebra e critica a cultura da celebridade. O álbum recebeu aclamação universal da crítica, com muitos considerando-o não apenas o melhor trabalho de West, mas um dos maiores álbuns da história da música popular.",
        imagem_carousel: "images/mbdtf_banner.jpeg",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 6,
        titulo: "Watch The Throne",
        descricao: "Uma colaboração monumental que celebra o luxo, o sucesso e a cultura afro-americana com uma produção grandiosa e letras afiadas. Lançado em 2011.",
        destque: false,
        imagem: "images/album6.jpg",
        conteudo: "Watch The Throne (2011) marca a colaboração monumental entre Kanye West e Jay-Z, dois dos maiores nomes do hip-hop. O álbum é uma celebração opulenta do sucesso, luxo e excelência negra, com produções suntuosas que incorporam desde samples de soul clássico até elementos eletrônicos modernos. Tracks como N***as in Paris e Otis se tornaram hinos culturais, enquanto letras como Murder to Excellence abordam questões raciais com profundidade. O projeto foi acompanhado por uma turnê mundial espetacular que solidificou seu status como um dos eventos mais significativos da música contemporânea.",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 7,
        titulo: "Yeezus",
        descricao: "Marcado por uma sonoridade industrial, minimalista e agressiva, este álbum de 2013 é uma obra de protesto e confronto sonoro.",
        destaque: true,
        imagem: "images/album7.jpg",
        conteudo: "Com Yeezus (2013), Kanye West entregou seu trabalho mais agressivo e confrontacional. Influenciado pela música industrial, noise e dancehall, o álbum é um ataque direto aos padrões da indústria musical e às convenções sociais. Sua produção espartana, letras provocativas e estética crua criaram um projeto que dividiu crítica e público. Colaborando com artistas como Daft Punk, Rick Rubin e Chief Keef, West desconstruiu completamente sua própria fórmula, criando um álbum que funciona como um manifesto artístico contra a complacência criativa e um reflexo de sua própria luta interna com a fama e identidade." , 
        imagem_carousel: "images/yeezus_banner.jpeg",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id:8,
        titulo: "The Life Of Pablo",
        descricao: "Um álbum 'vivo' e multifacetado que mistura gospel, trap e soul, refletindo um período de caos criativo e espiritualidade. Lançado em 2016.",
        destaque: true,
        imagem: "images/album8.png",
        conteudo: "The Life Of Pablo (2016) representa o caos criativo de Kanye West em sua forma mais pura. Apresentado como 'um álbum vivo' que continuou sendo modificado mesmo após seu lançamento, o projeto navega entre o gospel, trap, soul e música eletrônica. Com letras que abordam desde suas lutas espirituais até suas relações familiares, o álbum funciona como um diário musical em tempo real. A campanha de lançamento inovadora, incluindo a estreia no Madison Square Garden e múltiplas revisões do tracklist, refletiu a nova abordagem de West à criação e distribuição musical na era digital.",
        imagem_carousel: "images/tlop_banner.jpeg",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 9,
        titulo: "Ye",
        descricao: "Em sete faixas introspectivas, este projeto de 2018 explora temas como saúde mental, família e as controvérsias de sua vida pessoal.",
        destaque: true,
        imagem: "images/album9.png",
        conteudo: "Ye (2018) é talvez o projeto mais confessional de Kanye West. Lançado como parte da Wyoming Sessions, o álbum de sete faixas funciona como um retrato íntimo do artista em um período de intensa turbulência pessoal e pública. West aborda abertamente seu diagnóstico de transtorno bipolar, suas lutas conjugais e as consequências de suas declarações controversas. A produção minimalista e atmosférica serve como pano de fundo para letras que oscilam entre o arrependimento e a defesa, criando um documento complexo e humano de um artista em crise existencial.",
        imagem_carousel: "images/ye_banner.jpeg",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 10,
        titulo: "Kid See Ghosts",
        descricao: "Colaboração psicodélica com Kid Cudi sobre saúde mental e superação. Lançado em 2018.",
        destaque: false,
        imagem: "images/album10.jpg",
        conteudo: "Kids See Ghosts (2018) representa a colaboração perfeita entre Kanye West e Kid Cudi. O álbum é uma jornada psicodélica através dos demônios internos de ambos os artistas, culminando em uma mensagem de esperança e redenção. Combinando elementos de rock psicodélico, hip-hop e música experimental, o projeto aborda temas de depressão, vício e recuperação com uma honestidade brutal. A química entre West e Cudi é palpável, resultando em um trabalho coeso que muitos consideram o ponto alto das Wyoming Sessions e um testemunho do poder terapêutico da criação artística.",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 11,
        titulo: "Jesus Is King",
        descricao: "Transição para o gospel com corais inspiradores e letras devocionais. Lançado em 2019.",
        destaque: false,
        imagem: "images/album11.jpg",
        conteudo: "Jesus Is King (2019) marca a transformação mais radical na carreira de Kanye West. Após anos de luta espiritual, West entrega um álbum inteiramente dedicado à sua fé cristã renascida. Abandonando completamente o conteúdo explícito de trabalhos anteriores, o projeto apresenta corais gospel exuberantes, letras devocionais e produções que mesgam hip-hop tradicional com música sacra. Acompanhado pelos Sunday Service Choir, Ye cria uma experiência musical que é tanto uma declaração de fé quanto uma reinvenção artística, dividindo opiniões mas demonstrando seu compromisso inabalável com sua nova direção espiritual.",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 12,
        titulo: "Donda",
        descricao: "Homenagem pessoal à sua mãe, misturando gospel e trap. Lançado em 2021.",
        destaque: true,
        imagem: "images/album12.webp",
        conteudo: "Donda (2021) é uma homenagem monumental e dolorosamente pessoal à Dra. Donda West, mãe do artista. Com mais de 27 faixas e múltiplas colaborações, o álbum é uma jornada épica através do luto, legado e espiritualidade. West combina elementos gospel, trap e música minimalista para criar um ambiente sonoro que é ao mesmo tempo celestial e terreno. As listening parties espetaculares, realizadas em estádios com elementos performáticos elaborados, transformaram o processo de lançamento em um ritual público de cura e celebração, solidificando Donda como um dos projetos mais ambiciosos e emocionalmente carregados de sua carreira.",
        imagem_carousel: "images/donda_banner.jpeg",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 13,
        titulo: "Vultures 1",
        descricao: "Collaboração com Ty Dolla $ign sobre desejo, luxo e polêmicas atuais. Lançado em 2024.",
        destaque: false,
        imagem: "images/album13.png",
        conteudo: "Vultures 1 (2024) marca o retorno de Kanye West após um período de intensa controvérsia pública. Em colaboração com Ty Dolla $ign, o álbum aborda diretamente as polêmicas que cercaram o artista, transformando críticas em combustível criativo. As letras oscilam entre a defesa arrogante e a admissão de falhas, enquanto a produção mesma o luxo característico de West com elementos sombrios e industriais. O projeto funciona tanto como um comeback estratégico quanto como um comentário sobre cancelamento cultura e resiliência na era digital, demonstrando a capacidade contínua de West de manter-se no centro das conversas culturais.",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 14,
        titulo: "Vultures 2",
        descricao: "Sequência experimental com temas de redenção e legado artístico.",
        destaque: false,
        imagem: "images/album14.jpg",
        conteudo: "Vultures 2 expande os temas introduzidos em seu predecessor, aprofundando-se na exploração de relacionamentos conturbados e decadência moral. A colaboração com Ty Dolla $ign atinge novos patamares de coesão, com West entregando algumas de suas letras mais confessais sobre a vida pós-divórcio e as consequências de suas ações públicas. A produção incorpora elementos ainda mais experimentais, incluindo samples obscuros e estruturas não convencionais, criando um retrato sonoro de um artista navegando as complexidades da redenção pessoal e artística em meio ao escrutínio constante.",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    },
    {
        id: 15,
        titulo: "Donda 2",
        descricao: "Álbum introspectivo sobre o divórcio com Kim Kardashian e reconstrução pessoal.",
        destaque: false,
        imagem: "images/album15.jpg",
        conteudo: "Donda 2 (2022) serve como uma sequência profundamente introspectiva ao seu predecessor, focando especificamente no doloroso processo de divórcio de Kim Kardashian e na subsequente reconstrução pessoal. West utiliza o álbum como uma terapia musical, explorando temas de perda conjugal, paternidade solitária e a busca por identidade fora de um casamento público. A produção é mais crua e menos polida que a do primeiro Donda, refletindo o estado emocional vulnerável do artista. O projeto funciona como um documento visceral da jornada de West através do luto relacional e do difícil caminho em direção à autoconsciência e crescimento pessoal.",
        faixas_destaques: [
            {
                nome: "",
                imagem: ""
            }
        ],
        imagens_era: [
            {
                legenda:"" ,
                imagem:""
            }
        ]
    }
    
];



document.addEventListener('DOMContentLoaded', () => {
    const carouselIndicatorsContainer = document.getElementById('carousel-indicators-container');
    const carouselInnerContainer = document.getElementById('carousel-inner-container');
    if (carouselIndicatorsContainer && carouselInnerContainer){
        const albunsDestaque = albuns.filter(album => album.destaque === true);
        albunsDestaque.forEach((album, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const indicatorHtml = `
            <button type="button" data-bs-target="#carouselDestaques" data-bs-slide-to="${index}" class="${activeClass}" aria-current="${index === 0 ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>
            `;
            const itemHtml = `
            <div class="carousel-item ${activeClass}">
                    <a href="detalhes.html?id=${album.id}">
                        <img src="${album.imagem_carousel}" class="d-block w-100" alt="${album.titulo}">
                    </a>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${album.titulo}</h5>
                        <p>${album.descricao}</p>
                    </div>
                </div>
            `;
            carouselIndicatorsContainer.innerHTML += indicatorHtml;
            carouselInnerContainer.innerHTML += itemHtml;
        })
    }
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
            const imagensEraContainer = document.getElementById('imagens-era-container');
            if(imagensEraContainer && album.imagens_era && album.imagens_era.length > 0) {
                album.imagens_era.forEach(imagem => {
                    const imagemHtml = `
                    <div class="col-md-4 mb-4">
                            <div class="card">
                                <img src="${imagem.imagem}" class="card-img-top card-img-uniforme" alt="${imagem.legenda}">
                                <div class="card-body">
                                    <p class="card-text text-center">${imagem.legenda}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    imagensEraContainer.innerHTML += imagemHtml;
                });
            }
            const faixasContainer = document.getElementById('faixas-container');
            if (faixasContainer && album.faixas_destaques && album.faixas_destaques.length > 0){
                album.faixas_destaques.forEach(faixa => {
                    const faixaHtml = `
                    <div class="col-lg-3 col-md-4 col-6 mb-4">
                            <div class="card text-center h-100">
                                <img src="${faixa.imagem}" class="card-img-top card-img-uniforme" alt="${faixa.nome}">
                                <div class="card-body">
                                    <h6 class="card-title">${faixa.nome}</h6>
                                </div>
                            </div>
                        </div>
                    `;
                    faixasContainer.innerHTML += faixaHtml;
                })
            }
        } else {
            detalhesContainer.innerHTML = "<p class='text-center'>Álbum não encontrado.</p>";
        }
        const initSlider = (containerId, prevBtnId, nextBtnId) => {
            const sliderContainer = document.getElementById(containerId);
            const prevBtn = document.getElementById(prevBtnId);
            const nextBtn = document.getElementById(nextBtnId);

            if (!sliderContainer || !prevBtn || !nextBtn) return;
            const scrollAmount = sliderContainer.querySelector(':first-child').offsetWidth + 16;

            nextBtn.addEventListener('click', () => {
                sliderContainer.scrollLeft += scrollAmount;
            });
            prevBtn.addEventListener('click', () => {
                sliderContainer.scrollLeft -= scrollAmount;
            });
        };
        initSlider('imagens-era-container', 'imagens-prev-btn', 'imagens-next-btn');
        initSlider('faixas-container', 'faixas-prev-btn', 'faixas-next-btn');
    }
});