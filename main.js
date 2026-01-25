/* ============================================================
   GatoHub - main.js
   Modo oscuro + idiomas + filtros + modal login + Supabase auth
   ============================================================ */

/* =========================
   CONFIGURACIÓN SUPABASE
   ========================= */
const SUPABASE_URL = "https://dyygzezjynylhqiglvry.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5eWd6ZXpqeW55bGhxaWdsdnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNjc2NjcsImV4cCI6MjA4NDc0MzY2N30.jnIi6T9dgwsxttGOmcQyh8mbmm0ex3Z_zPFvOBWY7EY"; 
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* =========================
   DATOS BASE GATOS
   ========================= */
const cats = [
    { id: 1, nombre: "Luna", raza: "siames", edadCategoria: "adulto", img: "assets/img/gato1.jpg", color: "Crema con puntos marrones", peso: "4,2 kg" },
    { id: 2, nombre: "Milo", raza: "persa", edadCategoria: "cachorro", img: "assets/img/gato2.jpg", color: "Blanco y crema", peso: "2,1 kg" },
    { id: 3, nombre: "Nala", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato3.jpg", color: "Atigrada marrón", peso: "3,8 kg" },
    { id: 4, nombre: "Simba", raza: "bengali", edadCategoria: "adulto", img: "assets/img/gato4.jpg", color: "Moteado dorado", peso: "4,5 kg" },
    { id: 5, nombre: "Coco", raza: "comun", edadCategoria: "senior", img: "assets/img/gato5.jpg", color: "Negro con algunas canas", peso: "5,0 kg" },
    { id: 6, nombre: "Kira", raza: "otra", edadCategoria: "cachorro", img: "assets/img/gato6.jpg", color: "Tricolor", peso: "1,6 kg" },
    { id: 7, nombre: "Tom", raza: "otra", edadCategoria: "adulto", img: "assets/img/gato7.jpg", color: "Gris y blanco", peso: "4,3 kg" },
    { id: 8, nombre: "Mimi", raza: "persa", edadCategoria: "senior", img: "assets/img/gato8.jpg", color: "Naranja claro", peso: "4,0 kg" },
    { id: 9, nombre: "Bola", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato9.jpg", color: "Blanco y gris", peso: "5,5 kg" },
    { id: 10, nombre: "Toby", raza: "otra", edadCategoria: "adulto", img: "assets/img/gato10.jpg", color: "Marrón y blanco", peso: "4,1 kg" },
    { id: 11, nombre: "Lola", raza: "persa", edadCategoria: "cachorro", img: "assets/img/gato11.jpg", color: "Blanco puro", peso: "2,3 kg" },
    { id: 12, nombre: "Rocky", raza: "bengali", edadCategoria: "adulto", img: "assets/img/gato12.jpg", color: "Dorado moteado", peso: "4,7 kg" },
    { id: 13, nombre: "Sombra", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato13.jpg", color: "Negro", peso: "3,9 kg" },
    { id: 14, nombre: "Nube", raza: "otra", edadCategoria: "senior", img: "assets/img/gato14.jpg", color: "Blanco grisáceo", peso: "4,6 kg" },
    { id: 15, nombre: "Pixel", raza: "siames", edadCategoria: "cachorro", img: "assets/img/gato15.jpg", color: "Crema con puntos oscuros", peso: "2,0 kg" },
    { id: 16, nombre: "Chispa", raza: "otra", edadCategoria: "adulto", img: "assets/img/gato16.jpg", color: "Atigrado gris", peso: "4,0 kg" },
    { id: 17, nombre: "Rayo", raza: "bengali", edadCategoria: "adulto", img: "assets/img/gato17.jpg", color: "Dorado con manchas oscuras", peso: "4,8 kg" },
    { id: 18, nombre: "Mora", raza: "persa", edadCategoria: "senior", img: "assets/img/gato18.jpg", color: "Gris humo", peso: "3,7 kg" },
    { id: 19, nombre: "Choco", raza: "comun", edadCategoria: "adulto", img: "assets/img/gato19.jpg", color: "Marrón chocolate", peso: "4,2 kg" },
    { id: 20, nombre: "Kiwi", raza: "otra", edadCategoria: "cachorro", img: "assets/img/gato20.jpg", color: "Blanco y naranja", peso: "2,0 kg" }
];

/* =========================
   IDIOMAS (resumido para espacio)
   ========================= */
const i18nCats = { /* ... (igual que antes, no modificado) ... */ };
const i18nTexts = { /* ... (igual que antes, no modificado) ... */ };

/* =========================
   DOM ELEMENTS
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

const themeToggle = document.getElementById("themeToggle");
const languageSelect = document.getElementById("languageSelect");

const statTotalGatos = document.getElementById("statTotalGatos");
const statFavoritos = document.getElementById("statFavoritos");

const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

const backToTopBtn = document.getElementById("backToTop");

const adoptionForm = document.querySelector(".adoption-form");
const donationForm = document.getElementById("donationForm");

const curiosidadesListEl = document.getElementById("curiosidadesList");
const consejosListEl = document.getElementById("consejosList");

const btnVerGaleria = document.getElementById("btnVerGaleria");
const btnVerGifs = document.getElementById("btnVerGifs");

const btnLoginTop = document.getElementById("btnLoginTop");
const btnRegisterTop = document.getElementById("btnRegisterTop");
const btnGoogleTop = document.getElementById("btnGoogleTop");
const logoutBtn = document.getElementById("logoutBtn");
const userInfo = document.getElementById("userInfo");

/* =========================
   MODAL LOGIN ELEMENTS
   ========================= */
const authModal = document.getElementById("authModal");
const authClose = document.getElementById("authClose");
const tabLogin = document.getElementById("tabLogin");
const tabRegister = document.getElementById("tabRegister");
const authLoginForm = document.getElementById("authLoginForm");
const authRegisterForm = document.getElementById("authRegisterForm");
const authGoogleBtn = document.getElementById("authGoogleBtn");

/* =========================
   ESTADO
   ========================= */
let favoritos = new Set();
let currentPage = 1;
const pageSize = 10;
let filteredCats = [...cats];
let showOnlyFavorites = false;
let currentLang = localStorage.getItem("gatoHubLang") || "es";
let isDarkMode = localStorage.getItem("gatoHubDarkMode") === "true";

/* =========================
   UTILIDADES
   ========================= */
function loadFavoritos() {
    const stored = localStorage.getItem("gatoHubFavoritos");
    if (stored) favoritos = new Set(JSON.parse(stored));
}

function saveFavoritos() {
    localStorage.setItem("gatoHubFavoritos", JSON.stringify([...favoritos]));
}

function setRandomHeroImage() {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    heroCatImage.src = randomCat.img;
}

/* =========================
   RENDER GALERÍA
   ========================= */
function renderCats() {
    catsGrid.innerHTML = "";

    let list = [...cats];

    const search = searchInput.value.toLowerCase().trim();
    if (search) list = list.filter(c => c.nombre.toLowerCase().includes(search));

    if (filterRaza.value !== "todos") list = list.filter(c => c.raza === filterRaza.value);
    if (filterEdad.value !== "todas") list = list.filter(c => c.edadCategoria === filterEdad.value);
    if (showOnlyFavorites) list = list.filter(c => favoritos.has(c.id));

    filteredCats = list;

    const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * pageSize;
    const pageItems = list.slice(start, start + pageSize);

    pageItems.forEach(cat => {
        const card = document.createElement("div");
        card.className = "cat-card";
        card.dataset.id = cat.id;

        const img = document.createElement("img");
        img.src = cat.img;

        const fav = document.createElement("div");
        fav.className = "favorite-icon";
        fav.textContent = favoritos.has(cat.id) ? "❤️" : "🤍";

        fav.addEventListener("click", e => {
            e.stopPropagation();
            toggleFavorite(cat.id, fav);
        });

        card.appendChild(img);
        card.appendChild(fav);
        catsGrid.appendChild(card);
    });

    updatePagination();
    updateStats();
}

/* =========================
   FAVORITOS
   ========================= */
function toggleFavorite(id, el) {
    if (favoritos.has(id)) {
        favoritos.delete(id);
        el.textContent = "🤍";
    } else {
        favoritos.add(id);
        el.textContent = "❤️";
    }
    saveFavoritos();
    updateStats();
}

/* =========================
   PAGINACIÓN
   ========================= */
function updatePagination() {
    const totalPages = Math.max(1, Math.ceil(filteredCats.length / pageSize));
    pageInfo.textContent = `Página ${currentPage} / ${totalPages}`;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
}

function updateStats() {
    statTotalGatos.textContent = cats.length;
    statFavoritos.textContent = favoritos.size;
}

/* =========================
   MODO OSCURO
   ========================= */
function applyDarkMode() {
    if (isDarkMode) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        themeToggle.textContent = "☀️ Modo claro";
    } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        themeToggle.textContent = "🌙 Modo oscuro";
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem("gatoHubDarkMode", isDarkMode);
    applyDarkMode();
}

/* =========================
   IDIOMA
   ========================= */
function applyLanguage() {
    const t = i18nTexts[currentLang];

    document.getElementById("heroTitle").textContent = t.heroTitle;
    document.getElementById("heroSubtitle").textContent = t.heroSubtitle;

    btnVerGaleria.textContent = t.btnVerGaleria;
    btnVerGifs.textContent = t.btnVerGifs;

    document.getElementById("statGatosLabel").textContent = t.statGatosLabel;
    document.getElementById("statFavoritosLabel").textContent = t.statFavoritosLabel;
    document.getElementById("statRonroneosLabel").textContent = t.statRonroneosLabel;

    const navIds = ["navGaleria", "navGifs", "navCuriosidades", "navConsejos", "navAdopcion", "navDonaciones"];
    navIds.forEach((id, i) => {
        document.getElementById(id).textContent = t.nav[i];
    });

    document.getElementById("galeriaTitle").textContent = t.galeriaTitle;
    document.getElementById("galeriaSubtitle").textContent = t.galeriaSubtitle;
    document.getElementById("gifsTitle").textContent = t.gifsTitle;
    document.getElementById("curiosidadesTitle").textContent = t.curiosidadesTitle;
    document.getElementById("consejosTitle").textContent = t.consejosTitle;
    document.getElementById("adopcionTitle").textContent = t.adopcionTitle;
    document.getElementById("donacionesTitle").textContent = t.donacionesTitle;
    document.getElementById("footerText").textContent = t.footerText;

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
   MODAL LOGIN / REGISTRO
   ========================= */
function openAuthModal() {
    authModal.classList.add("show");
}

function closeAuthModal() {
    authModal.classList.remove("show");
}

tabLogin.addEventListener("click", () => {
    tabLogin.classList.add("active");
    tabRegister.classList.remove("active");
    authLoginForm.classList.remove("hidden");
    authRegisterForm.classList.add("hidden");
});

tabRegister.addEventListener("click", () => {
    tabRegister.classList.add("active");
    tabLogin.classList.remove("active");
    authRegisterForm.classList.remove("hidden");
    authLoginForm.classList.add("hidden");
});

authClose.addEventListener("click", closeAuthModal);

/* =========================
   SUPABASE AUTH
   ========================= */
async function initSessionUI() {
    const { data } = await sb.auth.getSession();
    const user = data.session?.user || null;

    if (user) {
        const nombre = user.user_metadata?.nombre || user.email;
        userInfo.textContent = `Hola, ${nombre}`;
        logoutBtn.style.display = "inline-flex";
        btnLoginTop.style.display = "none";
        btnRegisterTop.style.display = "none";
        btnGoogleTop.style.display = "none";
    } else {
        userInfo.textContent = "";
        logoutBtn.style.display = "none";
        btnLoginTop.style.display = "inline-flex";
        btnRegisterTop.style.display = "inline-flex";
        btnGoogleTop.style.display = "inline-flex";
    }
}

/* LOGIN */
document.getElementById("loginFormPanel").addEventListener("submit", async e => {
    e.preventDefault();
    const email = loginEmailPanel.value;
    const password = loginPasswordPanel.value;

    const { data, error } = await sb.auth.signInWithPassword({ email, password });

    if (error) return alert("Credenciales incorrectas o email no verificado.");

    alert("Sesión iniciada.");
    closeAuthModal();
    initSessionUI();
});

/* REGISTRO */
document.getElementById("registerFormPanel").addEventListener("submit", async e => {
    e.preventDefault();
    const nombre = regNombrePanel.value;
    const email = regEmailPanel.value;
    const password = regPasswordPanel.value;

    const { error } = await sb.auth.signUp({
        email,
        password,
        options: { data: { nombre }, emailRedirectTo: window.location.origin }
    });

    if (error) return alert(error.message);

    alert("Cuenta creada. Revisa tu correo.");
    closeAuthModal();
});

/* GOOGLE LOGIN */
async function handleGoogleLogin() {
    const { error } = await sb.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin }
    });

    if (error) alert("Error con Google");
}

authGoogleBtn.addEventListener("click", handleGoogleLogin);

/* LOGOUT */
logoutBtn.addEventListener("click", async () => {
    await sb.auth.signOut();
    alert("Sesión cerrada.");
    initSessionUI();
});

/* =========================
   EVENTOS VARIOS
   ========================= */
btnLoginTop.addEventListener("click", () => {
    openAuthModal();
    tabLogin.click();
});

btnRegisterTop.addEventListener("click", () => {
    openAuthModal();
    tabRegister.click();
});

btnGoogleTop.addEventListener("click", () => {
    openAuthModal();
    tabLogin.click();
});

/* =========================
   INICIO
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
    loadFavoritos();
    setRandomHeroImage();
    applyDarkMode();
    applyLanguage();
    initSessionUI();

    themeToggle.addEventListener("click", toggleDarkMode);
    languageSelect.addEventListener("change", () => {
        currentLang = languageSelect.value;
        localStorage.setItem("gatoHubLang", currentLang);
        applyLanguage();
    });

    searchInput
