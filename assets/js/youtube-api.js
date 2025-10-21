
const VIDEO_IDS = [
  '6qBWk0dP6VU',
  'XOPURyQdA-E',
  'qzTs0RYBO58',
  'R5_-C7hH6mM',
  'unICIFHss3w',
  'ASLybshGzxk',
];

function loadYoutubeVideos() {
  const videos = VIDEO_IDS.map(id => ({
    id,
    thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    title: '' 
  }));
  renderCarousel(videos);
}

function renderCarousel(videos) {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  track.innerHTML = '';

  if (!videos.length) {
    track.innerHTML = '<div class="carousel-item placeholder">No hay videos configurados. Edita VIDEO_IDS en assets/js/youtube-api.js</div>';
    initCarousel();
    return;
  }

  videos.forEach(v => {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `
      <div class="video-card" data-video-id="${v.id}">
        <div class="thumb">
          <img src="${v.thumb}" alt="${escapeHtml(v.title || v.id)}">
        </div>
        <div class="video-info">
          <div class="video-title">${escapeHtml(v.title || 'Ver en YouTube')}</div>
          <button class="play-btn" type="button" aria-label="Reproducir">▶</button>
        </div>
      </div>
    `;
    // abrir modal al click
    item.querySelector('.video-card').addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-video-id');
      openVideoModal(id);
    });
    track.appendChild(item);
  });

  initCarousel();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* Carrusel simple */
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const prev = document.querySelector('.carousel-nav.prev');
  const next = document.querySelector('.carousel-nav.next');
  const viewport = document.querySelector('.carousel-viewport');
  if (!track || !prev || !next || !viewport) return;

  let index = 0;
  const items = Array.from(track.children);
  if (!items.length) return;
  updateLayout();

  prev.onclick = () => { index = Math.max(0, index - 1); update(); };
  next.onclick = () => { index = Math.min(maxIndex(), index + 1); update(); };

  window.addEventListener('resize', () => { 
    index = Math.min(index, Math.max(0, items.length - visibleCount()));
    updateLayout();
  });

  function visibleCount() {
    const vw = viewport.clientWidth;
    if (vw >= 900) return 3;
    if (vw >= 600) return 2;
    return 1;
  }

  function maxIndex() {
    return Math.max(0, items.length - visibleCount());
  }

  function updateLayout() {
    // fuerza recalculo de anchos
    items.forEach(i => i.style.minWidth = `${Math.max(240, Math.floor(viewport.clientWidth / visibleCount()) - 12)}px`);
    update();
  }

  function update() {
    const itemWidth = items[0] ? items[0].getBoundingClientRect().width + getGap() : 0;
    const offset = index * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
    prev.disabled = index === 0;
    next.disabled = index === maxIndex();
  }

  function getGap() {
    // gap en px definido en CSS (ajustar si cambias el gap)
    return 12;
  }
}

/* Modal para reproducir inline */
function openVideoModal(videoId) {
  let modal = document.querySelector('.video-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
      <div class="video-modal-backdrop" tabindex="0"></div>
      <div class="video-modal-inner">
        <button class="video-modal-close" aria-label="Cerrar">✕</button>
        <div class="video-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.video-modal-close').addEventListener('click', closeVideoModal);
    modal.querySelector('.video-modal-backdrop').addEventListener('click', closeVideoModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeVideoModal();
    });
  }

  const content = modal.querySelector('.video-modal-content');
  content.innerHTML = `<iframe src="https://www.youtube.com/embed/${escapeHtml(videoId)}?autoplay=1&rel=0" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  modal.classList.add('open');
}

function closeVideoModal() {
  const modal = document.querySelector('.video-modal');
  if (!modal) return;
  const content = modal.querySelector('.video-modal-content');
  content.innerHTML = '';
  modal.classList.remove('open');
}

// export global (index.html llama a loadYoutubeVideos)
window.loadYoutubeVideos = loadYoutubeVideos;

