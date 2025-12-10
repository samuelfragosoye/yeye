// Define a URL base da sua API do JSON Server
const API_URL = 'http://localhost:3000';

// Variável para armazenar o ID do álbum em modo de edição
let albumIdParaEditar = null;

/**
 * Função principal que é executada quando o DOM está pronto.
 * Ela "roteia" a execução para as funções corretas com base nos
 * elementos presentes na página.
 */
document.addEventListener('DOMContentLoaded', () => {
    // --- Elementos da index.html ---
    const carouselIndicators = document.getElementById('carousel-indicators-container');
    const carouselInner = document.getElementById('carousel-inner-container');
    const discografiaContainer = document.getElementById('discografia-cards-container');
    const timelineContainer = document.getElementById('timeline-container');

    // --- Elementos da detalhes.html ---
    const detalhesContainer = document.getElementById('detalhes-album-container');
    const imagensEraContainer = document.getElementById('imagens-era-container');
    const faixasContainer = document.getElementById('faixas-container');

    // --- Elementos da cadastro_album.html ---
    const formCadastro = document.getElementById('form-cadastro-album'); // Você precisa dar este ID ao seu <form>

    // --- Roteamento ---

    // Se estiver na index.html
    if (carouselIndicators && discografiaContainer) {
        carregarCarousel();
        carregarDiscografia();
    }
    if (timelineContainer) {
        carregarTimeline();
    }

    // Se estiver na detalhes.html
    if (detalhesContainer) {
        carregarDetalhesAlbum();
    }
    // Inicializa os sliders (Lógica original da detalhes.html)
    if (imagensEraContainer) {
        initSlider('imagens-era-container', 'imagens-prev-btn', 'imagens-next-btn');
    }
    if (faixasContainer) {
        initSlider('faixas-container', 'faixas-prev-btn', 'faixas-next-btn');
    }

    // Se estiver na cadastro_album.html
    if (formCadastro) {
        setupFormulario();
    }
});

// ===================================================================
// == ETAPA 3: (R)EAD - Lógica da index.html
// ===================================================================

/**
 * (R)EAD: Carrega os álbuns em destaque no carrossel da index.html
 */
async function carregarCarousel() {
    const carouselIndicatorsContainer = document.getElementById('carousel-indicators-container');
    const carouselInnerContainer = document.getElementById('carousel-inner-container');

    try {
        const response = await fetch(`${API_URL}/albuns?destaque=true`);
        if (!response.ok) throw new Error('Erro ao carregar destaques.');
        
        const albunsDestaque = await response.json();

        carouselIndicatorsContainer.innerHTML = '';
        carouselInnerContainer.innerHTML = '';

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
        });

    } catch (error) {
        console.error(error);
        carouselInnerContainer.innerHTML = '<p class="text-danger">Erro ao carregar destaques.</p>';
    }
}

/**
 * (R)EAD: Carrega todos os álbuns na discografia da index.html
 */
document.getElementById('btn-pesquisar')?.addEventListener('click', () => {
    const termo = document.getElementById('input-pesquisa').value.toLowerCase();
    carregarDiscografia(termo);
});

document.getElementById('input-pesquisa')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const termo = e.target.value.toLowerCase();
        carregarDiscografia(termo);
    }
});

async function carregarDiscografia(termoBusca= "") {
    const cardsContainer = document.getElementById('discografia-cards-container');

    try {
        const response = await fetch(`${API_URL}/albuns`);
        if (!response.ok) throw new Error('Erro ao carregar discografia.');

        const albuns = await response.json();
        cardsContainer.innerHTML = ''; // Limpa antes de adicionar

        const albunsFiltrados = albuns.filter(album=> {
            return album.titulo.toLowerCase().includes(termoBusca) || 
                   album.descricao.toLowerCase().includes(termoBusca);
        })

        if (albunsFiltrados.length === 0) {
            cardsContainer.innerHTML = '<p class="text-center">Nenhum álbum encontrado.</p>';
            return;
        }

        albunsFiltrados.forEach(album => {
            const cardHtml = `
                <div class="col-lg-4 col-md-6 mb-4 d-flex" id="album-card-${album.id}">
                    <div class="card h-100">
                        <img src="${album.imagem}" class="card-img-top" alt="Capa do álbum ${album.titulo}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${album.titulo}</h5>
                            <p class="card-text">${album.descricao}</p>
                            
                            <div class="mt-auto">
                                <a href="detalhes.html?id=${album.id}" class="btn btn-dark">Ver Detalhes</a>
                                <a href="cadastro_album.html?id=${album.id}" class="btn btn-warning">Editar</a>
                                <button class="btn btn-danger btn-excluir" data-id="${album.id}">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.innerHTML += cardHtml;
        });

        // Após criar os cards, adiciona os listeners de exclusão
        adicionarListenersExcluir();

    } catch (error) {
        console.error(error);
        cardsContainer.innerHTML = '<p class="text-danger">Erro ao carregar discografia.</p>';
    }
}

/**
 * (R)EAD: Carrega as polêmicas na timeline da index.html
 */
async function carregarTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    try {
        const response = await fetch(`${API_URL}/polemicas`);
        if (!response.ok) throw new Error('Erro ao carregar timeline.');
        
        const polemicas = await response.json();
        timelineContainer.innerHTML = ''; // Limpa

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
    } catch (error) {
        console.error(error);
        timelineContainer.innerHTML = '<p class="text-danger">Erro ao carregar polêmicas.</p>';
    }
}

// ===================================================================
// == ETAPA 3: (D)ELETE - Lógica da index.html
// ===================================================================

/**
 * (D)ELETE: Adiciona listeners aos botões de excluir na index.html
 */
function adicionarListenersExcluir() {
    const botoesExcluir = document.querySelectorAll('.btn-excluir');
    botoesExcluir.forEach(botao => {
        botao.addEventListener('click', async (event) => {
            const id = event.target.dataset.id;

            if (!confirm(`Tem certeza que deseja excluir o álbum ID ${id}?`)) {
                return;
            }

            try {
                const response = await fetch(`${API_URL}/albuns/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) throw new Error('Falha ao excluir o álbum.');

                // Remove o card da tela (DOM)
                document.getElementById(`album-card-${id}`).remove();
                alert('Álbum excluído com sucesso!');

            } catch (error) {
                console.error(error);
                alert(error.message);
            }
        });
    });
}


// ===================================================================
// == ETAPA 3: (R)EAD (ONE) - Lógica da detalhes.html
// ===================================================================

/**
 * (R)EAD (One): Carrega os detalhes de um álbum específico na detalhes.html
 */
async function carregarDetalhesAlbum() {
    const detalhesContainer = document.getElementById('detalhes-album-container');
    const imagensEraContainer = document.getElementById('imagens-era-container');
    const faixasContainer = document.getElementById('faixas-container');

    // 1. Pega o ID da URL
    const params = new URLSearchParams(window.location.search);
    const albumID = params.get('id');

    if (!albumID) {
        detalhesContainer.innerHTML = "<p class='text-center'>ID do álbum não fornecido.</p>";
        return;
    }

    // 2. Busca o álbum específico na API
    try {
        const response = await fetch(`${API_URL}/albuns/${albumID}`);
        if (!response.ok) throw new Error('Álbum não encontrado.');

        const album = await response.json();

        // 3. Popula a seção principal
        const detalheHtml = `
        <div class="row">
                <div class="col-md-5">
                    <img src="${album.imagem}" class="img-fluid rounded" alt="Capa do álbum ${album.titulo}">
                </div>
                <div class="col-md-7">
                    <h2>${album.titulo}</h2>
                    <p><strong>Ano de Lançamento:</strong> ${album.ano}</p>
                    <p class="lead">${album.descricao}</p>
                    <p>${album.conteudo}</p>
                </div>
            </div>
        `;
        detalhesContainer.innerHTML = detalheHtml;

        // 4. Popula a galeria da era (se existir)
        imagensEraContainer.innerHTML = ''; // Limpa
        if (album.imagens_era && album.imagens_era.length > 0) {
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

        // 5. Popula as faixas em destaque (se existir)
        faixasContainer.innerHTML = ''; // Limpa
        if (album.faixas_destaques && album.faixas_destaques.length > 0) {
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
            });
        }

    } catch (error) {
        console.error(error);
        detalhesContainer.innerHTML = `<p class='text-center text-danger'>${error.message}</p>`;
    }
}

// ===================================================================
// == ETAPA 3: (C)REATE & (U)PDATE - Lógica da cadastro_album.html
// ===================================================================

/**
 * Prepara o formulário para (C)REATE ou (U)PDATE.
 * Se houver um ID na URL, entra em modo de edição e busca os dados.
 */
async function setupFormulario() {
    const params = new URLSearchParams(window.location.search);
    albumIdParaEditar = params.get('id');
    const formCadastro = document.getElementById('form-cadastro-album');
    const formTitle = document.getElementById('form-album-title'); // Você precisa dar este ID ao seu <h2> ou <h1>

    if (albumIdParaEditar) {
        // --- MODO UPDATE ---
        formTitle.innerText = 'Editar Álbum';
        try {
            // 1. Busca os dados do álbum
            const response = await fetch(`${API_URL}/albuns/${albumIdParaEditar}`);
            if (!response.ok) throw new Error('Não foi possível carregar o álbum para edição.');
            const album = await response.json();

            // 2. Popula o formulário com os dados existentes
            // (Assumindo que os IDs do form são os mesmos nomes das chaves)
            document.getElementById('titulo').value = album.titulo;
            document.getElementById('descricao').value = album.descricao;
            document.getElementById('ano').value = album.ano;
            document.getElementById('imagem').value = album.imagem;
            document.getElementById('conteudo').value = album.conteudo;
            document.getElementById('imagem_carousel').value = album.imagem_carousel;
            document.getElementById('destaque').checked = album.destaque;

        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    } else {
        // --- MODO CREATE ---
        formTitle.innerText = 'Cadastrar Novo Álbum';
    }

    // Adiciona o listener de SUBMIT ao formulário
    formCadastro.addEventListener('submit', handleSubmitFormulario);
}

/**
 * Manipula o SUBMIT do formulário, decidindo entre (C)REATE e (U)PDATE.
 */
async function handleSubmitFormulario(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // 1. Coleta os dados do formulário
    // (Simplificado. Não estamos pegando 'faixas' ou 'imagens_era' para manter simples)
    const albumData = {
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        ano: parseInt(document.getElementById('ano').value, 10),
        imagem: document.getElementById('imagem').value,
        conteudo: document.getElementById('conteudo').value,
        imagem_carousel: document.getElementById('imagem_carousel').value,
        destaque: document.getElementById('destaque').checked,
        // (Deixando faixas e imagens_era de fora por simplicidade no cadastro)
    };

    // 2. Define o método e a URL da API
    let method = 'POST';
    let url = `${API_URL}/albuns`;
    let successMessage = 'Álbum cadastrado com sucesso!';

    if (albumIdParaEditar) {
        method = 'PUT';
        url = `${API_URL}/albuns/${albumIdParaEditar}`;
        successMessage = 'Álbum atualizado com sucesso!';
    }

    // 3. Envia a requisição
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(albumData),
        });

        if (!response.ok) throw new Error(`Erro ao ${albumIdParaEditar ? 'atualizar' : 'cadastrar'} o álbum.`);

        alert(successMessage);
        window.location.href = 'index.html'; // Redireciona para a home

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

// ===================================================================
// == LÓGICA ORIGINAL (Sliders da detalhes.html)
// ===================================================================

/**
 * (Lógica original do seu app.js, necessária para a detalhes.html)
 * Inicializa um slider customizado.
 */
const initSlider = (containerId, prevBtnId, nextBtnId) => {
    const sliderContainer = document.getElementById(containerId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (!sliderContainer || !prevBtn || !nextBtn) return;

    // Esconde botões se não houver overflow
    if (sliderContainer.scrollWidth <= sliderContainer.clientWidth) {
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
        // Pega a largura do primeiro card + margem
        const scrollAmount = sliderContainer.querySelector(':first-child').offsetWidth + 16; // 1rem = 16px (assumindo)
        sliderContainer.scrollLeft += scrollAmount;
    });
    prevBtn.addEventListener('click', () => {
        const scrollAmount = sliderContainer.querySelector(':first-child').offsetWidth + 16;
        sliderContainer.scrollLeft -= scrollAmount;
    });

    sliderContainer.addEventListener('scroll', updateArrowVisibility);
    updateArrowVisibility(); // Define o estado inicial dos botões
};