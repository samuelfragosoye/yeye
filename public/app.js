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
                        <p><strong>Ano de Lançamento:</strong> ${album.ano}</p>
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