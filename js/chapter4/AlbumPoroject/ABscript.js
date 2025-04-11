let currentGroup = 'group1';
let currentPage = 1;
const perPage = 15;
let currentSlideIndex = 0;

const images = {
  group1: [
    "group1/KakaoTalk_20250410_155859214_01.jpg",
    "group1/KakaoTalk_20250410_155859214_02.jpg",
    "group1/KakaoTalk_20250410_155859214_01 copy.jpg",
    "group1/KakaoTalk_20250410_155859214_03.jpg",
    "group1/KakaoTalk_20250410_155859214_04.jpg",
    "group1/KakaoTalk_20250410_155859214_05.jpg",
    "group1/KakaoTalk_20250410_155859214_06.jpg",
    "group1/KakaoTalk_20250410_155859214_07.jpg",
    "group1/KakaoTalk_20250410_155859214_08.jpg",
    "group1/KakaoTalk_20250410_155859214_09.jpg",
    "group1/KakaoTalk_20250410_155859214_10.jpg",
    "group1/KakaoTalk_20250410_155859214_11.jpg",
    "group1/KakaoTalk_20250410_155859214_12.jpg",
    "group1/KakaoTalk_20250410_155859214_13.jpg",
    "group1/KakaoTalk_20250410_155859214_14.jpg",
    "group1/KakaoTalk_20250410_155859214.jpg",
    "group1/KakaoTalk_20250410_173605902_01.jpg",
    "group1/KakaoTalk_20250410_173605902_02.jpg",
    "group1/KakaoTalk_20250410_173605902_03.jpg",
    "group1/KakaoTalk_20250410_173605902_04.jpg",
    "group1/KakaoTalk_20250410_173605902_05.jpg",
    "group1/KakaoTalk_20250410_173605902_06.jpg",
    "group1/KakaoTalk_20250410_173605902_07.jpg",
    "group1/KakaoTalk_20250410_173605902_08.jpg",
    "group1/KakaoTalk_20250410_173605902_09.jpg",
    "group1/KakaoTalk_20250410_173605902_10.jpg",
    "group1/KakaoTalk_20250410_173605902_11.jpg",
    "group1/KakaoTalk_20250410_173605902_12.jpg",
    "group1/KakaoTalk_20250410_173605902_13.jpg",
    "group1/KakaoTalk_20250410_173605902_14.jpg",
    "group1/KakaoTalk_20250410_173605902.jpg"
  ],
  group2: [
    "group2/KakaoTalk_20250410_160524548_01.jpg",
    "group2/KakaoTalk_20250410_160524548_02.jpg",
    "group2/KakaoTalk_20250410_160524548_03.jpg",
    "group2/KakaoTalk_20250410_160524548_04.jpg",
    "group2/KakaoTalk_20250410_160524548_05.jpg",
    "group2/KakaoTalk_20250410_160524548_06.jpg",
    "group2/KakaoTalk_20250410_160524548_07.jpg",
    "group2/KakaoTalk_20250410_160524548_08.jpg",
    "group2/KakaoTalk_20250410_160524548_09.webp",
    "group2/KakaoTalk_20250410_160524548_10.jpg",
    "group2/KakaoTalk_20250410_160524548_11.jpg",
    "group2/KakaoTalk_20250410_160524548_12.jpg",
    "group2/KakaoTalk_20250410_160524548_13.jpg",
    "group2/KakaoTalk_20250410_160524548_14.jpg",
    "group2/KakaoTalk_20250410_160524548.jpg",
    "group2/KakaoTalk_20250410_173400645_01.jpg",
    "group2/KakaoTalk_20250410_173400645_02.jpg",
    "group2/KakaoTalk_20250410_173400645_03.jpg",
    "group2/KakaoTalk_20250410_173400645_04.jpg",
    "group2/KakaoTalk_20250410_173400645_05.jpg",
    "group2/KakaoTalk_20250410_173400645_06.jpg",
    "group2/KakaoTalk_20250410_173400645_07.jpg",
    "group2/KakaoTalk_20250410_173400645_08.jpg",
    "group2/KakaoTalk_20250410_173400645_09.jpg",
    "group2/KakaoTalk_20250410_173400645_10.jpg",
    "group2/KakaoTalk_20250410_173400645_11.jpg",
    "group2/KakaoTalk_20250410_173400645_12.jpg",
    "group2/KakaoTalk_20250410_173400645_13.jpg",
    "group2/KakaoTalk_20250410_173400645_14.jpg",
    "group2/KakaoTalk_20250410_173400645.jpg"
  ]
};

function renderGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const selected = images[currentGroup].slice(start, start + perPage);

  selected.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `썸네일 이미지 ${index + 1}`;
    img.onclick = () => openModal(start + index);
    gallery.appendChild(img);
  });

  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const total = Math.ceil(images[currentGroup].length / perPage);
  for (let i = 1; i <= total; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => {
      currentPage = i;
      renderGallery();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    pagination.appendChild(btn);
  }
}

function changeGroup(group) {
  currentGroup = group;
  currentPage = 1;
  document.body.className = group === 'group1' ? 'past' : 'present';
  renderGallery();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal(index) {
  currentSlideIndex = index;
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = images[currentGroup][index];
  modal.style.display = "flex";
}

function closeModal(e) {
  if (e.target.id === 'modal' || e.target.tagName === 'IMG') {
    document.getElementById("modal").style.display = "none";
  }
}

function prevSlide(e) {
  e.stopPropagation();
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    document.getElementById("modal-img").src = images[currentGroup][currentSlideIndex];
  }
}

function nextSlide(e) {
  e.stopPropagation();
  if (currentSlideIndex < images[currentGroup].length - 1) {
    currentSlideIndex++;
    document.getElementById("modal-img").src = images[currentGroup][currentSlideIndex];
  }
}

renderGallery();