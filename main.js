/* ============================================================
   GatoHub - main.js
   Modo oscuro + idiomas + filtros + modal + Supabase auth
   ============================================================ */

/* =========================
   CONFIGURACIÓN SUPABASE
   ========================= */
const SUPABASE_URL = "https://dyygzezjynylhqiglvry.supabase.co";
// ⚠️ PEGA AQUÍ TU ANON KEY (NO LA COMPARTAS)
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5eWd6ZXpqeW55bGhxaWdsdnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNjc2NjcsImV4cCI6MjA4NDc0MzY2N30.jnIi6T9dgwsxttGOmcQyh8mbmm0ex3Z_zPFvOBWY7EY";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* =========================
   DATOS BASE GATOS
   ========================= */
const cats = [
    { id: 1, nombre: "Luna", raza: "siames", edadCategoria: "adulto", img: "assets/img/gato1.jpg",
      color: "Crema con puntos marrones", peso: "4,2 kg" },
    { id: 2, nombre: "Milo", raza: "persa", edadCategoria: "cachorro", img: "assets/img/gato2.jpg",
      color: "Blanco y crema", peso: "2,1 kg" },
    { id: 3, nombre: "Nala", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato3.jpg",
      color: "Atigrada marrón", peso: "3,8 kg" },
    { id: 4, nombre: "Simba", raza: "bengali", edadCategoria: "adulto", img: "assets/img/gato4.jpg",
      color: "Moteado dorado", peso: "4,5 kg" },
    { id: 5, nombre: "Coco", raza: "comun", edadCategoria: "senior", img: "assets/img/gato5.jpg",
      color: "Negro con algunas canas", peso: "5,0 kg" },
    { id: 6, nombre: "Kira", raza: "otra", edadCategoria: "cachorro", img: "assets/img/gato6.jpg",
      color: "Tricolor", peso: "1,6 kg" },
    { id: 7, nombre: "Tom", raza: "otra", edadCategoria: "adulto", img: "assets/img/gato7.jpg",
      color: "Gris y blanco", peso: "4,3 kg" },
    { id: 8, nombre: "Mimi", raza: "persa", edadCategoria: "senior", img: "assets/img/gato8.jpg",
      color: "Naranja claro", peso: "4,0 kg" },
    { id: 9, nombre: "Bola", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato9.jpg",
      color: "Blanco y gris", peso: "5,5 kg" },
    { id: 10, nombre: "Toby", raza: "otra", edadCategoria: "adulto", img: "assets/img/gato10.jpg",
      color: "Marrón y blanco", peso: "4,1 kg" },
    { id: 11, nombre: "Lola", raza: "persa", edadCategoria: "cachorro", img: "assets/img/gato11.jpg",
      color: "Blanco puro", peso: "2,3 kg" },
    { id: 12, nombre: "Rocky", raza: "bengali", edadCategoria: "adulto", img: "assets/img/gato12.jpg",
      color: "Dorado moteado", peso: "4,7 kg" },
    { id: 13, nombre: "Sombra", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato13.jpg",
      color: "Negro", peso: "3,9 kg" },
    { id: 14, nombre: "Nube", raza: "otra", edadCategoria: "senior", img: "assets/img/gato14.jpg",
      color: "Blanco grisáceo", peso: "4,6 kg" },
    { id: 15, nombre: "Pixel", raza: "siames", edadCategoria: "cachorro", img: "assets/img/gato15.jpg",
      color: "Crema con puntos oscuros", peso: "2,0 kg" },
    { id: 16, nombre: "Chispa", raza: "otra", edadCategoria: "adulto", img: "assets/img/gato16.jpg",
      color: "Atigrado gris", peso: "4,0 kg" },
    { id: 17, nombre: "Rayo", raza: "bengali", edadCategoria: "adulto", img: "assets/img/gato17.jpg",
      color: "Dorado con manchas oscuras", peso: "4,8 kg" },
    { id: 18, nombre: "Mora", raza: "persa", edadCategoria: "senior", img: "assets/img/gato18.jpg",
      color: "Gris humo", peso: "3,7 kg" },
    { id: 19, nombre: "Choco", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato19.jpg",
      color: "Marrón chocolate", peso: "4,2 kg" },
    { id: 20, nombre: "Kiwi", raza: "otra", edadCategoria: "cachorro", img: "assets/img/gato20.jpg",
      color: "Blanco y naranja", peso: "2,0 kg" }
];

/* =========================
   TEXTOS POR IDIOMA (GATOS)
   ========================= */
const i18nCats = { /* … tal cual tu archivo, lo mantengo igual … */ };
// Para no hacer esto infinito aquí: pega exactamente el bloque i18nCats
// que tú ya tenías (es correcto y muy largo). No hay que cambiar nada.

/* =========================
   TEXTOS GENERALES POR IDIOMA
   ========================= */
const i18nTexts = { /* … igual que en tu archivo … */ };
// Igual que arriba: pega tu bloque i18nTexts completo, es válido tal cual.

/* =========================
   DOM
   ========================= */
const heroCatImage = document.getElementById("heroCatImage");
const catsGrid = document.getElementById("catsGrid");
const searchInput = document.getElementById("searchInput");
const filterRaza = document.getElementById("filterRaza");
const filterEdad = document.getElementById("filterEdad");
const filterFavoritosBtn = document.getElementById("filterFavoritos");
const clearFiltersBtn = document.getElementById("clearFilters");

const modal = document.getElementById("catModal");
const closeModalBtn = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalBreed = document.getElementById("modalBreed");
const modalAge = document.getElementById("modalAge");
const modalHistoria = document.getElementById("modalHistoria");
const modalPersonalidad = document.getElementById("modalPersonalidad");
const modalColor = document.getElementById("modalColor");
const modalPeso = document.getElementById("modalPeso");
const modalEnergia = document.getElementById("modalEnergia");
const modalBadgeEdad = document.getElementById("modalBadgeEdad");
const modalTagsContainer = document.getElementById("modalTags");
const modalFavBtn = document.getElementById("modalFavBtn");
const modalAdoptBtn = document.getElementById("modalAdoptBtn");
const modalBreedLabel = document.getElementById("modalBreedLabel");
const modalAgeLabel = document.getElementById("modalAgeLabel");

const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("languageSelect");

const statTotalGatos = document.getElementById("statTotalGatos");
const statFavoritos = document.getElementById("statFavoritos");

const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

const backToTopBtn = document.getElementById("backToTop");

const adoptionForm = document.querySelector(".adoption-form");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const donationForm = document.getElementById("donationForm");

const curiosidadesListEl = document.getElementById("curiosidadesList");
const consejosListEl = document.getElementById("consejosList");

/* =========================
   ESTADO
   ========================= */
let favoritos = new Set();
let currentPage = 1;
const pageSize = 10;
let filteredCats = [...cats];
let showOnlyFavorites = false;
let currentModalCatId = null;
let currentLang = localStorage.getItem("gatoHubLang") || "es";

/* =========================
   UTILIDADES
   ========================= */
function formatearRaza(raza, lang) {
    const mapEs = {
        siames: "Siamés",
        persa: "Persa",
        comun: "Común europeo",
        bengali: "Bengalí",
        otra: "Otra raza"
    };
    const mapCa = {
        siames: "Siamès",
        persa: "Persa",
        comun: "Comú europeu",
        bengali: "Bengalí",
        otra: "Una altra raça"
    };
    const mapEn = {
        siames: "Siamese",
        persa: "Persian",
        comun: "European shorthair",
        bengali: "Bengal",
        otra: "Other breed"
    };
    if (lang === "ca") return mapCa[raza] || raza;
    if (lang === "en") return mapEn[raza] || raza;
    return mapEs[raza] || raza;
}

function loadFavoritos() {
    const stored = localStorage.getItem("gatoHubFavoritos");
    if (!stored) return;
    try {
        favoritos = new Set(JSON.parse(stored));
    } catch {
        favoritos = new Set();
    }
}

function saveFavoritos() {
    localStorage.setItem("gatoHubFavoritos", JSON.stringify([...favoritos]));
}

function setRandomHeroImage() {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    if (heroCatImage) {
        heroCatImage.src = randomCat.img;
        heroCatImage.alt = randomCat.nombre;
    }
}

/* =========================
   RENDERIZADO
   ========================= */
function renderCats() {
    if (!catsGrid) return;
    catsGrid.innerHTML = "";

    const t = i18nTexts[currentLang];

    let list = [...cats];

    const search = (searchInput?.value || "").toLowerCase().trim();
    if (search) {
        list = list.filter(c => c.nombre.toLowerCase().includes(search));
    }

    const raza = filterRaza?.value || "todos";
    if (raza !== "todos") {
        list = list.filter(c => c.raza === raza);
    }

    const edad = filterEdad?.value || "todas";
    if (edad !== "todas") {
        list = list.filter(c => c.edadCategoria === edad);
    }

    if (showOnlyFavorites) {
        list = list.filter(c => favoritos.has(c.id));
    }

    filteredCats = list;

    if (filteredCats.length === 0) {
        const p = document.createElement("p");
        p.textContent = t.noCatsFound;
        p.style.color = "var(--text-muted)";
        catsGrid.appendChild(p);
        updateStats();
        updatePagination();
        return;
    }

    const totalPages = Math.max(1, Math.ceil(filteredCats.length / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * pageSize;
    const pageItems = filteredCats.slice(start, start + pageSize);

    pageItems.forEach(cat => {
        const card = document.createElement("div");
        card.className = "cat-card";
        card.dataset.id = cat.id;

        const img = document.createElement("img");
        img.src = cat.img;
        img.alt = cat.nombre;

        const fav = document.createElement("div");
        fav.className = "favorite-icon";
        fav.textContent = favoritos.has(cat.id) ? "❤️" : "🤍";
        if (favoritos.has(cat.id)) fav.classList.add("active");

        const body = document.createElement("div");
        body.className = "cat-card-body";

        const h3 = document.createElement("h3");
        h3.textContent = cat.nombre;

        const p = document.createElement("p");
        p.textContent = formatearRaza(cat.raza, currentLang);

        body.appendChild(h3);
        body.appendChild(p);

        card.appendChild(img);
        card.appendChild(fav);
        card.appendChild(body);

        card.addEventListener("click", e => {
            if (e.target === fav) return;
            openModal(cat.id);
        });

        fav.addEventListener("click", e => {
            e.stopPropagation();
            toggleFavorite(cat.id, fav);
        });

        catsGrid.appendChild(card);
    });

    updateStats();
    updatePagination();
}

function updateStats() {
    if (statTotalGatos) statTotalGatos.textContent = String(cats.length);
    if (statFavoritos) statFavoritos.textContent = String(favoritos.size);
}

function updatePagination() {
    const t = i18nTexts[currentLang];
    const totalPages = Math.max(1, Math.ceil(filteredCats.length / pageSize));
    if (pageInfo) {
        pageInfo.textContent = `${t.pageLabel} ${currentPage} / ${totalPages}`;
    }
    if (prevPageBtn) prevPageBtn.disabled = currentPage <= 1;
    if (nextPageBtn) nextPageBtn.disabled = currentPage >= totalPages;
}

/* =========================
   MODAL
   ========================= */
function openModal(catId) {
    const cat = cats.find(c => c.id === catId);
    if (!cat || !modal) return;

    currentModalCatId = catId;

    const catTexts = i18nCats[currentLang][catId];
    const t = i18nTexts[currentLang];

    modalImg.src = cat.img;
    modalImg.alt = cat.nombre;
    modalName.textContent = cat.nombre;
    modalBreed.textContent = formatearRaza(cat.raza, currentLang);
    modalAge.textContent = catTexts.edad;
    modalHistoria.textContent = catTexts.historia;
    modalPersonalidad.textContent = catTexts.personalidad;
    modalColor.textContent = cat.color;
    modalPeso.textContent = cat.peso;
    modalEnergia.textContent = catTexts.energia;

    modalBreedLabel.textContent = t.modalBreedLabel;
    modalAgeLabel.textContent = t.modalAgeLabel;

    modalBadgeEdad.textContent = cat.edadCategoria === "cachorro"
        ? (currentLang === "en" ? "Kitten" : currentLang === "ca" ? "Cadell" : "Cachorro")
        : cat.edadCategoria === "senior"
        ? (currentLang === "en" ? "Senior" : currentLang === "ca" ? "Sènior" : "Senior")
        : (currentLang === "en" ? "Adult" : currentLang === "ca" ? "Adult" : "Adulto");

    modalTagsContainer.innerHTML = "";
    catTexts.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "modal-tag-pill";
        span.textContent = tag;
        modalTagsContainer.appendChild(span);
    });

    modal.classList.remove("hidden");
}

function closeModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    currentModalCatId = null;
}

function toggleFavorite(catId, favEl) {
    if (favoritos.has(catId)) {
        favoritos.delete(catId);
        favEl.classList.remove("active");
        favEl.textContent = "🤍";
    } else {
        favoritos.add(catId);
        favEl.classList.add("active");
        favEl.textContent = "❤️";
    }
    saveFavoritos();
    updateStats();
}

/* =========================
   IDIOMA
   ========================= */
function applyLanguage() {
    const t = i18nTexts[currentLang];

    document.getElementById("heroTitle").textContent = t.heroTitle;
    document.getElementById("heroSubtitle").textContent = t.heroSubtitle;
    document.getElementById("btnVerGaleria").textContent = t.btnVerGaleria;
    document.getElementById("btnVerGifs").textContent = t.btnVerGifs;

    document.getElementById("statGatosLabel").textContent = t.statGatosLabel;
    document.getElementById("statFavoritosLabel").textContent = t.statFavoritosLabel;
    document.getElementById("statRonroneosLabel").textContent = t.statRonroneosLabel;

    const navIds = [
        "navGaleria",
        "navGifs",
        "navCuriosidades",
        "navConsejos",
        "navAdopcion",
        "navLogin",
        "navDonaciones"
    ];
    navIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) el.textContent = t.nav[idx];
    });

    document.getElementById("galeriaTitle").textContent = t.galeriaTitle;
    document.getElementById("galeriaSubtitle").textContent = t.galeriaSubtitle;
    document.getElementById("gifsTitle").textContent = t.gifsTitle;
    document.getElementById("curiosidadesTitle").textContent = t.curiosidadesTitle;
    document.getElementById("consejosTitle").textContent = t.consejosTitle;
    document.getElementById("adopcionTitle").textContent = t.adopcionTitle;
    document.getElementById("loginTitle").textContent = t.loginTitle;
    document.getElementById("crearCuentaTitle").textContent = t.crearCuentaTitle;
    document.getElementById("iniciarSesionTitle").textContent = t.iniciarSesionTitle;
    document.getElementById("donacionesTitle").textContent = t.donacionesTitle;
    document.getElementById("footerText").textContent = t.footerText;

    document.getElementById("labelNombre").textContent = t.labelNombre;
    document.getElementById("labelEmail").textContent = t.labelEmail;
    document.getElementById("labelTelefono").textContent = t.labelTelefono;
    document.getElementById("labelGatoInteres").textContent = t.labelGatoInteres;
    document.getElementById("labelMensaje").textContent = t.labelMensaje;
    document.getElementById("btnEnviarAdopcion").textContent = t.btnEnviarAdopcion;

    document.getElementById("labelUsuario").textContent = t.labelUsuario;
    document.getElementById("labelEmailRegistro").textContent = t.labelEmailRegistro;
    document.getElementById("labelPasswordRegistro").textContent = t.labelPasswordRegistro;
    document.getElementById("btnRegistrarse").textContent = t.btnRegistrarse;

    document.getElementById("labelEmailLogin").textContent = t.labelEmailLogin;
    document.getElementById("labelPasswordLogin").textContent = t.labelPasswordLogin;
    document.getElementById("btnEntrar").textContent = t.btnEntrar;

    document.getElementById("labelTitular").textContent = t.labelTitular;
    document.getElementById("labelEmailDonacion").textContent = t.labelEmailDonacion;
    document.getElementById("labelNumeroTarjeta").textContent = t.labelNumeroTarjeta;
    document.getElementById("labelCaducidad").textContent = t.labelCaducidad;
    document.getElementById("labelCVV").textContent = t.labelCVV;
    document.getElementById("labelCantidad").textContent = t.labelCantidad;
    document.getElementById("btnDonar").textContent = t.btnDonar;

    document.getElementById("modalHistoriaTitle").textContent = t.modalHistoriaTitle;
    document.getElementById("modalPersonalidadTitle").textContent = t.modalPersonalidadTitle;
    document.getElementById("modalDetallesTitle").textContent = t.modalDetallesTitle;
    document.getElementById("colorLabel").textContent = t.colorLabel;
    document.getElementById("pesoLabel").textContent = t.pesoLabel;
    document.getElementById("energiaLabel").textContent = t.energiaLabel;

    searchInput.placeholder = t.searchPlaceholder;
    filterFavoritosBtn.textContent = t.filterFavoritos;
    clearFiltersBtn.textContent = t.clearFilters;
    prevPageBtn.textContent = t.prevPage;
    nextPageBtn.textContent = t.nextPage;

    // filtros raza/edad
    [...filterRaza.options].forEach((opt, idx) => {
        opt.textContent = t.filterRaza[idx];
    });
    [...filterEdad.options].forEach((opt, idx) => {
        opt.textContent = t.filterEdad[idx];
    });

    // curiosidades / consejos
    curiosidadesListEl.innerHTML = "";
    t.curiosidadesList.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        curiosidadesListEl.appendChild(li);
    });

    consejosListEl.innerHTML = "";
    t.consejosList.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        consejosListEl.appendChild(li);
    });

    renderCats();
}

/* =========================
   MODO OSCURO
   ========================= */
function applyTheme() {
    const isDark = localStorage.getItem("gatoHubDarkMode") === "true";
    if (isDark) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️ Modo claro";
    } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        themeToggle.textContent = "🌙 Modo oscuro";
    }
}

function toggleTheme() {
    const isDark = localStorage.getItem("gatoHubDarkMode") === "true";
    localStorage.setItem("gatoHubDarkMode", (!isDark).toString());
    applyTheme();
}

/* =========================
   SCROLL / BACK TO TOP
   ========================= */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.scrollToSection = scrollToSection;

function handleScroll() {
    if (!backToTopBtn) return;
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
    } else {
        backToTopBtn.classList.remove("visible");
    }
}

/* =========================
   SUPABASE AUTH
   ========================= */
async function handleRegister(e) {
    e.preventDefault();
    const t = i18nTexts[currentLang];

    const nombre = document.getElementById("regNombre").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;

    if (!nombre || !email || !password) {
        alert("Rellena todos los campos.");
        return;
    }

    try {
        const { error } = await sb.auth.signUp({
            email,
            password,
            options: {
                data: { nombre }
            }
        });
        if (error) {
            alert(error.message);
            return;
        }
        alert("Cuenta creada. Revisa tu correo para confirmar.");
        registerForm.reset();
    } catch (err) {
        console.error(err);
        alert("Error al registrar. Inténtalo más tarde.");
    }
}

async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        alert("Rellena todos los campos.");
        return;
    }

    try {
        const { data, error } = await sb.auth.signInWithPassword({
            email,
            password
        });
        if (error) {
            alert("Credenciales incorrectas.");
            return;
        }
        const user = data.user;
        alert(`Bienvenido, ${user.user_metadata?.nombre || user.email}`);
        loginForm.reset();
    } catch (err) {
        console.error(err);
        alert("Error al iniciar sesión. Inténtalo más tarde.");
    }
}

/* =========================
   INIT
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
    loadFavoritos();
    setRandomHeroImage();
    applyTheme();

    languageSelect.value = currentLang;
    applyLanguage();

    // Filtros / búsqueda
    searchInput.addEventListener("input", () => {
        currentPage = 1;
        renderCats();
    });
    filterRaza.addEventListener("change", () => {
        currentPage = 1;
        renderCats();
    });
    filterEdad.addEventListener("change", () => {
        currentPage = 1;
        renderCats();
    });
    filterFavoritosBtn.addEventListener("click", () => {
        showOnlyFavorites = !showOnlyFavorites;
        currentPage = 1;
        renderCats();
    });
    clearFiltersBtn.addEventListener("click", () => {
        searchInput.value = "";
        filterRaza.value = "todos";
        filterEdad.value = "todas";
        showOnlyFavorites = false;
        currentPage = 1;
        renderCats();
    });

    // Paginación
    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderCats();
        }
    });
    nextPageBtn.addEventListener("click", () => {
        const totalPages = Math.max(1, Math.ceil(filteredCats.length / pageSize));
        if (currentPage < totalPages) {
            currentPage++;
            renderCats();
        }
    });

    // Modal
    closeModalBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", e => {
        if (e.target.classList.contains("modal-backdrop")) {
            closeModal();
        }
    });
    modalFavBtn.addEventListener("click", () => {
        if (!currentModalCatId) return;
        const cardFav = document.querySelector(`.cat-card[data-id="${currentModalCatId}"] .favorite-icon`);
        if (cardFav) {
            toggleFavorite(currentModalCatId, cardFav);
        }
    });
    modalAdoptBtn.addEventListener("click", () => {
        const cat = cats.find(c => c.id === currentModalCatId);
        if (!cat) return;
        const input = document.getElementById("adopGato");
        if (input) input.value = cat.nombre;
        scrollToSection("adopcion");
        closeModal();
    });

    // Tema
    themeToggle.addEventListener("click", toggleTheme);

    // Idioma
    languageSelect.addEventListener("change", () => {
        currentLang = languageSelect.value;
        localStorage.setItem("gatoHubLang", currentLang);
        applyLanguage();
    });

    // Back to top
    window.addEventListener("scroll", handleScroll);
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Formularios
    if (adoptionForm) {
        adoptionForm.addEventListener("submit", e => {
            e.preventDefault();
            alert("Solicitud de adopción enviada (simulada).");
            adoptionForm.reset();
        });
    }

    if (donationForm) {
        donationForm.addEventListener("submit", e => {
            e.preventDefault();
            alert("Donación procesada (simulada).");
            donationForm.reset();
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", handleRegister);
    }
    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    renderCats();
});
