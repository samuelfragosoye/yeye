
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
                nome: "Heartless",
                imagem: "images/album4.jpg"
            },
            {
                nome: "Love Lockdown",
                imagem: "images/album4.jpg"
            },
            {
                nome: "Paranoid",
                imagem: "images/album4.jpg"
            }
        ],
        imagens_era: [
            {
                legenda:"Com um visual mais limpo e elegante, Kanye deixava pra trás o brilho da era anterior e entrava em um momento de introspecção. Essa fase marcou uma virada emocional e estética, com foco na vulnerabilidade e no minimalismo." ,
                imagem:"images/secundario/80801.jpeg"
            },
            {
                legenda:"A combinação entre arte pop e sentimentos reais definiu essa era. O álbum misturou sons eletrônicos com letras sobre perda e solidão, criando uma identidade visual e sonora totalmente nova no hip hop." ,
                imagem:"images/secundario/80802.jpeg"
            },
            {
                legenda:"Nos palcos, Kanye manteve a sofisticação do terno, mas com uma energia mais contida e emocional. Cada performance refletia o tom melancólico e inovador que marcou o 808s & Heartbreak." ,
                imagem:"images/secundario/80803.jpeg"
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
                nome: "POWER",
                imagem: "images/album5.jpg"
            },
            {
                nome: "Monster",
                imagem: "images/album5.jpg"
            },
            {
                nome: "Devil In A New Dress",
                imagem: "images/album5.jpg"
            },
            {
                nome: "Runaway",
                imagem: "images/album5.jpg"
            }
        ],
        imagens_era: [
            {
                legenda:"Com uma estética teatral e marcante, Kanye transformou cada apresentação em um espetáculo visual. O vermelho simboliza poder, paixão e conflito — tudo o que define essa fase intensa." ,
                imagem:"images/secundario/mbdtf01.jpeg"
            },
            {
                legenda:"Entre o céu e o inferno, entre o amor e o excesso. As letras e a sonoridade exploram os altos e baixos da fama, com um tom grandioso e introspectivo." ,
                imagem:"images/secundario/mbdtf04.jpeg"
            },
            {
                legenda:"O urso clássico retorna, mas agora de forma sombria e fragmentada. É um símbolo da transformação de Kanye — da inocência das primeiras eras para a complexidade de um artista em crise e reinvenção." ,
                imagem:"images/secundario/mbdtf03.jpeg"
            },
            {
                legenda:"A arte e a confusão se misturam. O visual caótico e distorcido reflete o estado mental e emocional de Kanye durante a criação do álbum — uma mistura de genialidade e descontrole." ,
                imagem:"images/secundario/mbdtf02.jpeg"
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
                nome: "No Church In The Wild",
                imagem: "images/album6.jpg"
            },
            {
                nome: "Ni**as In Paris",
                imagem: "images/album6.jpg"
            },
            {
                nome: "Otis",
                imagem: "images/album6.jpg"
            }
        ],
        imagens_era: [
            {
                legenda:"Dois ícones frente a frente, planejando o próximo passo. ‘Watch the Throne’ uniu duas das maiores mentes do rap em um projeto que celebrava conquistas, ambição e legado." ,
                imagem:"images/secundario/wtt01.jpeg"
            },
            {
                legenda:"Entre camaradagem e competição, Kanye e Jay-Z mostraram sintonia dentro e fora do estúdio. A parceria misturava respeito mútuo e energia criativa no auge das carreiras de ambos." ,
                imagem:"images/secundario/wtt02.jpeg"
            },
            {
                legenda:"Com a bandeira americana ao fundo, a dupla simbolizou poder e sucesso no cenário global. ‘Watch the Throne’ foi mais que um álbum — foi uma declaração de grandeza compartilhada." ,
                imagem:"images/secundario/wtt03.jpeg"
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
                nome: "On Sight",
                imagem: "images/album7.jpg"
            },
            {
                nome: "Black Skinhead",
                imagem: "images/album7.jpg"
            },
            {
                nome: "New Slaves",
                imagem: "images/album7.jpg"
            },
            {
                nome: "Blood On The Leaves",
                imagem: "images/album7.jpg"
            },
            {
                nome: "Bound 2",
                imagem: "images/album7.jpg"
            }
        ],
        imagens_era: [
            {
                legenda:"O palco virou um confessionário. Coberto e iluminado, Kanye apresentou uma versão mais intensa e crua de si mesmo, misturando arte, fé e rebeldia em cada performance." ,
                imagem:"images/secundario/yeezus01.jpeg"
            },
            {
                legenda:"A turnê de ‘Yeezus’ transformou o show em experiência teatral. Cenários grandiosos, temas religiosos e uma atmosfera quase divina reforçavam a dualidade entre ego e redenção." ,
                imagem:"images/secundario/yeezus02.jpeg"
            },
            {
                legenda:"Com uma produção visual impressionante, Kanye explorou o papel do artista como figura mítica. A estética minimalista e apocalíptica combinava com o som agressivo e inovador do álbum." ,
                imagem:"images/secundario/yeezus03.jpeg"
            },
            {
                legenda:"Em meio às luzes e à energia do público, Kanye parecia levitar — símbolo da libertação criativa e da intensidade dessa era. Foi o auge da ousadia e da performance como arte." ,
                imagem:"images/secundario/yeezus04.jpeg"
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
                nome: "Father Stretch My Hands Pt.1",
                imagem: "images/album8.png"
            },
            {
                nome: "Famous",
                imagem: "images/album8.png"
            },
            {
                nome: "Saint Pablo",
                imagem: "images/album8.png"
            }
        ],
        imagens_era: [
            {
                legenda:"Um momento marcante, onde tudo parecia se alinhar. A energia, as pessoas, a criação — dava pra sentir que algo importante estava nascendo ali." ,
                imagem:"images/secundario/tlop01.jpeg"
            },
            {
                legenda:"Alegria e liberdade em um só clique. A vibe era única, pura celebração entre quem realmente viveu e fez parte da história." ,
                imagem:"images/secundario/tlop02.jpeg"
            },
            {
                legenda:"Um abraço que simboliza respeito e parceria. Mais que música, era sobre união e o impacto de uma geração inteira." ,
                imagem:"images/secundario/tlop03.jpeg"
            },
            {
                legenda:"No altar flutuante, Kanye estende a mão para a congregação, elevando a performance a um ato de fé coletiva." ,
                imagem:"images/secundario/tlop04.jpeg"
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
                nome: "All Mine",
                imagem: "images/album9.png"
            },
            {
                nome: "Ghost Town",
                imagem: "images/album9.png"
            },
            {
                nome: "Violent Crimes",
                imagem: "images/album9.png"
            }
        ],
        imagens_era: [
            {
                legenda:"Um momento de introspecção nas montanhas. Simples, sereno, mas carregado de sentimento. Era o recomeço, o encontro com o próprio silêncio." ,
                imagem:"images/secundario/ye01.jpeg"
            },
            {
                legenda:"Energia leve, risadas e liberdade criativa. O cenário de calmo Wyoming contrastava com o caos interno — e disso nasceu uma das fases mais sinceras." ,
                imagem:"images/secundario/ye02.jpeg"
            },
            {
                legenda:"Cercado de amigos e boas vibrações, o clima era de paz. Nada de luxo, só autenticidade e a sensação de estar exatamente onde devia." ,
                imagem:"images/secundario/ye03.jpeg"
            },
            {
                legenda:"No estúdio, o olhar distante e o silêncio dizem mais que qualquer palavra. Um retrato da fase em que a vulnerabilidade virou força, e a música nasceu do peso de simplesmente ser humano." ,
                imagem:"images/secundario/ye04.jpeg"
            },
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
                nome: "4th Dimension",
                imagem: "images/album10.jpg"
            },
            {
                nome: "Reborn",
                imagem: "images/album10.jpg"
            },
            {
                nome: "Kids See Ghosts",
                imagem: "images/album10.jpg"
            },
        ],
        imagens_era: [
            {
                legenda:"No começo, dois artistas com visões diferentes, mas o mesmo desejo de mudar tudo. O início de uma parceria que redefiniria o som de uma geração." ,
                imagem:"images/secundario/ksg01.jpeg"
            },
            {
                legenda:"Anos depois, entre risadas e multidões, a conexão continuava a mesma. Dois gênios que se entendem sem precisar falar muito." ,
                imagem:"images/secundario/ksg02.jpeg"
            },
            {
                legenda:"No meio do caos e da criação, nasceram Kids See Ghosts. Um projeto sobre dor, superação e a beleza de se perder pra se encontrar de novo." ,
                imagem:"images/secundario/ksg03.jpeg"
            },
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
                nome: "Selah",
                imagem: "images/album11.jpg"
            },
             {
                nome: "Follow God",
                imagem: "images/album11.jpg"
            },
             {
                nome: "Closed On Sunday",
                imagem: "images/album11.jpg"
            },
             {
                nome: "God Is",
                imagem: "images/album11.jpg"
            },
        ],
        imagens_era: [
            {
                legenda:"O palco virou um templo. O coral, um instrumento de fé. A música, uma oração. Jesus Is King marcou o momento em que arte e devoção se tornaram uma só coisa." ,
                imagem:"images/secundario/jesusking01.jpeg"
            },
            {
                legenda:"Entre as colinas do Wyoming, um artista em busca de redenção. Cercado por ovelhas, guiado por algo maior que ele mesmo." ,
                imagem:"images/secundario/jesusking02.jpeg"
            },
            {
                legenda:"Longe das luzes e dos palcos, Kanye reencontra o silêncio e a simplicidade. A fé agora é o centro de tudo — e a criação nasce desse encontro." ,
                imagem:"images/secundario/jesusking03.jpeg"
            },
            {
                legenda:"O olhar firme de quem passou pela tempestade e saiu transformado. Jesus Is King não é só um álbum — é o testemunho de uma alma que decidiu recomeçar." ,
                imagem:"images/secundario/jesusking04.jpeg"
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
                nome: "Off The Grid",
                imagem: "images/album12.webp"
            },
            {
                nome: "Hurricane",
                imagem: "images/album12.webp"
            },
            {
                nome: "Praise God",
                imagem: "images/album12.webp"
            },
            {
                nome: "Jesus Lord",
                imagem: "images/album12.webp"
            },
            {
                nome: "Pure Souls",
                imagem: "images/album12.webp"
            },
        ],
        imagens_era: [
            {
                legenda:"A casa simboliza o retorno às origens. Em ‘Donda’, o lar é memória, fé e redenção — um espaço entre o que foi e o que ainda busca ser." ,
                imagem:"images/secundario/donda01.jpeg"
            },
            {
                legenda:"Antes do espetáculo, o silêncio. A solidão do processo criativo é onde ‘Donda’ começou — entre o peso das ideias e a calma da reflexão." ,
                imagem:"images/secundario/donda02.jpeg"
            },
            {
                legenda:"Esconder o rosto para mostrar a alma. O colete ‘Donda’ é proteção e símbolo: arte como escudo, fé como força." ,
                imagem:"images/secundario/donda03.jpeg"
            },
            {
                legenda:"No vazio do estádio, um ato de entrega. Ajoelhar-se é transformar dor em oração — o momento mais humano de ‘Donda’." ,
                imagem:"images/secundario/donda04.jpeg"
            },
            {
                legenda:"Os espinhos representam a dor que molda. Em ‘Donda’, o sofrimento se torna poder, e a arte, redenção." ,
                imagem:"images/secundario/donda05.jpeg"
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
                nome: "PAID",
                imagem: "images/album13.png"
            },
            {
                nome: "DO IT",
                imagem: "images/album13.png"
            },
            {
                nome: "VULTURES",
                imagem: "images/album13.png"
            },
            {
                nome: "CARNIVAL",
                imagem: "images/album13.png"
            },
        ],
        imagens_era: [
            {
                legenda:"Pureza e mistério. Em Vultures 1, o branco simboliza renascimento — uma nova fase, limpa e livre das amarras." ,
                imagem:"images/secundario/v01.jpeg"
            },
            {
                legenda:"A nova geração sob o mesmo nome. Vultures é herança, continuidade e espírito de criação que passa de pai para filha." ,
                imagem:"images/secundario/v02.jpeg"
            },
            {
                legenda:"Unidos na escuridão. Vultures representa irmandade, força coletiva e estilo como manifesto." ,
                imagem:"images/secundario/v03.jpeg"
            },
            {
                legenda:"A sombra também é palco. Vultures vive no contraste entre o sagrado e o sombrio, o luxo e a dor." ,
                imagem:"images/secundario/v04.jpeg"
            },
            {
                legenda:"Paz após o caos. Vultures 1 celebra o controle — encontrar serenidade mesmo depois da tempestade." ,
                imagem:"images/secundario/v05.jpeg"
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
                nome: "FIELD TRIP",
                imagem: "images/album14.jpg"
            },
            {
                nome: "530",
                imagem: "images/album14.jpg"
            },
            {
                nome: "RIVER",
                imagem: "images/album14.jpg"
            },
        ],
        imagens_era: [
            {
                legenda:"Confiança e reinvenção. Vultures 2 representa um artista que domina o próprio caos e transforma a escuridão em estilo." ,
                imagem:"images/secundario/v2secundario01.jpeg"
            },
            {
                legenda:"Ao lado de Bianca Censori o contraste entre força e mistério. O visual minimalista reflete a essência de Vultures: arte crua, direta e sem explicações." ,
                imagem:"images/secundario/v2secundario02.jpeg"
            },
            {
                legenda:"Entre o luxo e a simplicidade, o contraste cria narrativa. Vultures 2 é sobre presença — não apenas aparência." ,
                imagem:"images/secundario/v2secundario03.jpeg"
            },
            {
                legenda:"O brilho metálico como símbolo de poder. Vultures 2 representa união, confiança e a força de quem já sobreviveu a tudo." ,
                imagem:"images/secundario/v2secundario04.jpeg"
            },
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
                nome: "TRUE LOVE",
                imagem: "images/album15.jpg"
            },
            {
                nome: "BROKEN ROAD",
                imagem: "images/album15.jpg"
            },
            {
                nome: "CITY OF GOD",
                imagem: "images/album15.jpg"
            }
        ],
        imagens_era: [
            {
                legenda:"O olhar além do humano. Donda 2 reflete a transformação espiritual — quando a visão interior supera o que os olhos veem." ,
                imagem:"images/secundario/donda201.jpeg"
            },
            {
                legenda:"Kanye e Future, duas forças criativas lado a lado. Donda 2 nasce da colaboração e da energia bruta de quem vive a arte como batalha." ,
                imagem:"images/secundario/donda202.jpeg"
            },
            {
                legenda:"A casa retorna como símbolo, agora cercada por águas e fogo. Em Donda 2, o passado é purificado e renasce sob uma nova luz." ,
                imagem:"images/secundario/donda203.jpeg"
            }
        ]
    }
    
];

const polemicas = [
    {
        ano: "2005",
        titulo: "George Bush não se importa com pessoas negras",
        descricao: "Durante uma transmissão ao vivo para arrecadar fundos para as vítimas do furacão Katrina, Kanye West declarou que o então presidente não se importava com a população negra."
    },
    {
        ano: "2009",
        titulo: "Interrupção de Taylor Swift no VMA",
        descricao: "Kanye subiu ao palco e interrompeu o discurso de Taylor Swift no VMA, afirmando que o prêmio deveria ter sido de Beyoncé. O ato foi criticado mundialmente."
    },
    {
        ano: "2016",
        titulo: "A letra de 'Famous' e a briga com Taylor Swift",
        descricao: "No álbum 'The Life of Pablo', a música 'Famous' continha a letra 'Eu sinto que eu e Taylor ainda podemos fazer sexo / Por quê? Eu fiz aquela vadia famosa'. A controvérsia explodiu, com Kanye e Kim Kardashian afirmando que Taylor havia aprovado a letra em uma ligação, que mais tarde foi vazada."
    },
    {
        ano: "2016",
        titulo: "Dívida de US$ 53 milhões e apelo a Mark Zuckerberg",
        descricao: "Em uma série de tweets, West declarou ter uma dívida pessoal de US$ 53 milhões e pediu publicamente a Mark Zuckerberg para investir US$ 1 bilhão em suas ideias, gerando confusão e debate sobre sua estabilidade financeira."
    },
    {
        ano: "2018",
        titulo: "Apoio a Donald Trump e o boné 'MAGA'",
        descricao: "Kanye West gerou intensa controvérsia ao expressar publicamente seu apoio ao então presidente Donald Trump, usando o boné 'Make America Great Again' e visitando a Casa Branca."
    },
    {
        ano: "2020",
        titulo: "Candidatura à Presidência dos EUA",
        descricao: "West lançou uma campanha presidencial improvável, marcada por um comício conturbado na Carolina do Sul, onde fez declarações emocionais e pessoais sobre sua família, gerando preocupação sobre sua saúde mental."
    },
    {
        ano: "2022",
        titulo: "Comentários antissemitas e colapso de parcerias",
        descricao: "Após uma série de comentários considerados antissemitas em entrevistas e redes sociais, grandes marcas como Adidas, Balenciaga e Gap encerraram suas parcerias bilionárias com o artista, resultando em um enorme prejuízo financeiro e de imagem."
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
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        polemicas.forEach(item => {
            const timelineItemHtml = `
               <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date">${item.ano}</div>
                    <div class="timeline-content">
                        <h3>${item.titulo}</h3>
                        <p>${item.descricao}</p>
                    </div>
                </div>
            `;
            timelineContainer.innerHTML += timelineItemHtml;
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
            if(sliderContainer.scrollWidth <= sliderContainer.clientWidth){
                prevBtn.classList.add('hidden');
                nextBtn.classList.add('hidden');
                return;
            }
            const updateArrowVisibility = () => {
                prevBtn.classList.toggle('hidden', sliderContainer.scrollLeft <= 0);
                const isAtEnd = sliderContainer.scrollLeft + sliderContainer.clientWidth >= sliderContainer.scrollWidth - 1;
                nextBtn.classList.toggle('hidden', isAtEnd);
            }

            nextBtn.addEventListener('click', () => {
                const scrollAmount = sliderContainer.querySelector(':first-child').offsetWidth + 16;
                sliderContainer.scrollLeft += scrollAmount;
            });
            prevBtn.addEventListener('click', () => {
                const scrollAmount = sliderContainer.querySelector(':first-child').offsetWidth + 16;
                sliderContainer.scrollLeft -= scrollAmount;
            });

            sliderContainer.addEventListener('scroll', updateArrowVisibility);
            updateArrowVisibility();
        };
        initSlider('imagens-era-container', 'imagens-prev-btn', 'imagens-next-btn');
        initSlider('faixas-container', 'faixas-prev-btn', 'faixas-next-btn');
    }
});