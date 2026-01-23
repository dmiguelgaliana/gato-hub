// === DATOS DE GATOS ===
const cats = [
    { id: 1, nombre: "Luna", raza: "siames", edadCategoria: "adulto", edadTexto: "3 años", img: "assets/img/gato1.jpg",
      historia: "Luna fue rescatada de una colonia felina en un barrio tranquilo. Al principio desconfiaba de todo, pero poco a poco empezó a confiar en las personas que la cuidaban. Ahora le encanta dormir cerca de la ventana y observar el mundo desde un lugar seguro.",
      personalidad: "Muy observadora, cariñosa cuando coge confianza, algo tímida con desconocidos.",
      color: "Crema con puntos marrones", peso: "4,2 kg", energia: "Media",
      tags: ["Tranquila", "Cariñosa", "Ideal piso"] },
    { id: 2, nombre: "Milo", raza: "persa", edadCategoria: "cachorro", edadTexto: "6 meses", img: "assets/img/gato2.jpg",
      historia: "Milo nació en una camada no deseada y fue entregado a una protectora. Desde pequeño ha sido el alma de la habitación.",
      personalidad: "Extremadamente juguetón, curioso, algo torpe pero encantador.",
      color: "Blanco y crema", peso: "2,1 kg", energia: "Alta",
      tags: ["Juguetón", "Cachorro", "Necesita juego diario"] },
    { id: 3, nombre: "Nala", raza: "comun", edadCategoria: "adulto", edadTexto: "2 años", img: "assets/img/gato3.jpg",
      historia: "Nala vivía con una familia que no podía seguir cuidándola. Siempre busca una mano amiga para recibir caricias.",
      personalidad: "Muy dulce, tranquila, le gusta la rutina.",
      color: "Atigrada marrón", peso: "3,8 kg", energia: "Media-baja",
      tags: ["Tranquila", "Apta para niños", "Muy mimosa"] },
    { id: 4, nombre: "Simba", raza: "bengali", edadCategoria: "adulto", edadTexto: "4 años", img: "assets/img/gato4.jpg",
      historia: "Simba fue encontrado explorando un parque. Es muy listo y aprende rápido.",
      personalidad: "Curioso, activo, muy inteligente.",
      color: "Moteado dorado", peso: "4,5 kg", energia: "Alta",
      tags: ["Activo", "Inteligente", "Necesita estímulos"] },
    { id: 5, nombre: "Coco", raza: "comun", edadCategoria: "senior", edadTexto: "9 años", img: "assets/img/gato5.jpg",
      historia: "Coco vivió muchos años con una persona mayor. Solo pide un sofá cómodo y compañía tranquila.",
      personalidad: "Muy calmado, extremadamente cariñoso.",
      color: "Negro con algunas canas", peso: "5,0 kg", energia: "Baja",
      tags: ["Senior", "Muy cariñoso", "Ideal hogar tranquilo"] },
    { id: 6, nombre: "Kira", raza: "otra", edadCategoria: "cachorro", edadTexto: "4 meses", img: "assets/img/gato6.jpg",
      historia: "Kira fue encontrada en una caja de cartón. Es la más valiente de la camada.",
      personalidad: "Valiente, curiosa, muy activa.",
      color: "Tricolor", peso: "1,6 kg", energia: "Muy alta",
      tags: ["Cachorra", "Exploradora", "Necesita compañía"] },
    { id: 7, nombre: "Tom", raza: "otra", edadCategoria: "adulto", edadTexto: "5 años", img: "assets/img/gato7.jpg",
      historia: "Tom vivía en la calle pero siempre buscaba mimos.",
      personalidad: "Muy sociable, confiado, le encanta estar acompañado.",
      color: "Gris y blanco", peso: "4,3 kg", energia: "Media",
      tags: ["Sociable", "Apto con otros gatos", "Cariñoso"] },
    { id: 8, nombre: "Mimi", raza: "persa", edadCategoria: "senior", edadTexto: "10 años", img: "assets/img/gato8.jpg",
      historia: "Mimi fue entregada por una familia que se mudaba.",
      personalidad: "Serena, algo independiente, muy elegante.",
      color: "Naranja claro", peso: "4,0 kg", energia: "Baja",
      tags: ["Senior", "Tranquila", "Ideal hogar calmado"] },
    { id: 9, nombre: "Bola", raza: "comun", edadCategoria: "adulto", edadTexto: "3 años", img: "assets/img/gato9.jpg",
      historia: "Bola llegó con sobrepeso, pero ha mejorado mucho.",
      personalidad: "Bonachón, tranquilo, algo glotón.",
      color: "Blanco y gris", peso: "5,5 kg", energia: "Media-baja",
      tags: ["Tranquilo", "Glotón", "Muy abrazable"] },
    { id: 10, nombre: "Toby", raza: "otra", edadCategoria: "adulto", edadTexto: "4 años", img: "assets/img/gato10.jpg",
      historia: "Toby fue encontrado en un garaje.",
      personalidad: "Cariñoso, le encanta frotarse contra las piernas.",
      color: "Marrón y blanco", peso: "4,1 kg", energia: "Media",
      tags: ["Cariñoso", "Agradecido", "Ideal primer gato"] },
    { id: 11, nombre: "Lola", raza: "persa", edadCategoria: "cachorro", edadTexto: "7 meses", img: "assets/img/gato11.jpg",
      historia: "Lola fue la más pequeña de su camada.",
      personalidad: "Juguetona, dulce, algo dependiente.",
      color: "Blanco puro", peso: "2,3 kg", energia: "Alta",
      tags: ["Cachorra", "Juguetona", "Necesita atención"] },
    { id: 12, nombre: "Rocky", raza: "bengali", edadCategoria: "adulto", edadTexto: "3 años", img: "assets/img/gato12.jpg",
      historia: "Rocky vivía en una casa con jardín.",
      personalidad: "Muy activo, curioso, algo travieso.",
      color: "Dorado moteado", peso: "4,7 kg", energia: "Muy alta",
      tags: ["Activo", "Necesita espacio", "Juguetón"] },
    { id: 13, nombre: "Sombra", raza: "comun", edadCategoria: "adulto", edadTexto: "2 años", img: "assets/img/gato13.jpg",
      historia: "Sombra se movía entre tejados como un ninja.",
      personalidad: "Independiente, observador, algo tímido.",
      color: "Negro", peso: "3,9 kg", energia: "Media",
      tags: ["Independiente", "Elegante", "Ideal personas tranquilas"] },
    { id: 14, nombre: "Nube", raza: "otra", edadCategoria: "senior", edadTexto: "11 años", img: "assets/img/gato14.jpg",
      historia: "Nube busca su retiro definitivo.",
      personalidad: "Muy calmado, le encantan las siestas largas.",
      color: "Blanco grisáceo", peso: "4,6 kg", energia: "Baja",
      tags: ["Senior", "Muy tranquilo", "Ideal compañía"] },
    { id: 15, nombre: "Pixel", raza: "siames", edadCategoria: "cachorro", edadTexto: "5 meses", img: "assets/img/gato15.jpg",
      historia: "Pixel no para quieto.",
      personalidad: "Hiperactivo, curioso, muy vocal.",
      color: "Crema con puntos oscuros", peso: "2,0 kg", energia: "Muy alta",
      tags: ["Cachorro", "Muy activo", "Necesita juego"] },
    { id: 16, nombre: "Chispa", raza: "otra", edadCategoria: "adulto", edadTexto: "3 años", img: "assets/img/gato16.jpg",
      historia: "Chispa apareció en un taller mecánico.",
      personalidad: "Curioso, juguetón, algo travieso.",
      color: "Atigrado gris", peso: "4,0 kg", energia: "Alta",
      tags: ["Curioso", "Explorador", "Juguetón"] },
    { id: 17, nombre: "Rayo", raza: "bengali", edadCategoria: "adulto", edadTexto: "4 años", img: "assets/img/gato17.jpg",
      historia: "Rayo corre como si siempre tuviera prisa.",
      personalidad: "Muy activo, juguetón, algo intenso.",
      color: "Dorado con manchas oscuras", peso: "4,8 kg", energia: "Muy alta",
      tags: ["Muy activo", "Juguetón", "Necesita ejercicio"] },
    { id: 18, nombre: "Mora", raza: "persa", edadCategoria: "senior", edadTexto: "12 años", img: "assets/img/gato18.jpg",
      historia: "Mora ha vivido siempre en interior.",
      personalidad: "Serena, algo independiente, muy limpia.",
      color: "Gris humo", peso: "3,7 kg", energia: "Baja",
      tags: ["Senior", "Elegante", "Ideal hogar silencioso"] },
    { id: 19, nombre: "Choco", raza: "comun", edadCategoria: "adulto", edadTexto: "3 años", img: "assets/img/gato19.jpg",
      historia: "Choco fue encontrado cerca de una cafetería.",
      personalidad: "Dulce, sociable, le gusta estar acompañado.",
      color: "Marrón chocolate", peso: "4,2 kg", energia: "Media",
      tags: ["Dulce", "Sociable", "Ideal familias"] },
    { id: 20, nombre: "Kiwi", raza: "otra", edadCategoria: "cachorro", edadTexto: "6 meses", img: "assets/img/gato20.jpg",
      historia: "Kiwi fue el único superviviente de su camada.",
      personalidad: "Cariñoso, algo tímido al principio, muy juguetón.",
      color: "Blanco y naranja", peso: "2,0 kg", energia: "Alta",
      tags: ["Cachorro", "Cariñoso", "Necesita paciencia"] }
];

// === ELEMENTOS DOM ===
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

const themeToggle = document.getElementById("themeToggle");

const statTotalGatos = document.getElementById("statTotalGatos");
const statFavoritos = document.getElementById("statFavoritos");

const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");

const backToTopBtn = document.getElementById("backToTop");

// Formularios
const adoptionForm = document.querySelector(".adoption-form");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const donationForm = document.getElementById("donationForm");

// === ESTADO ===
let favoritos = new Set();
let currentPage = 1;
const pageSize = 10;
let filteredCats = [...cats];
let showOnlyFavorites = false;
let currentModalCatId = null;

// Usuarios (pseudo base de datos en localStorage)
let users = [];

// === UTILIDADES ===
function formatearRaza(raza) {
    const map = {
        siames: "Siamés",
        persa: "Persa",
        comun: "Común europeo",
        bengali: "Bengalí",
        otra: "Otra raza"
    };
    return map[raza] || raza;
}

// FAVORITOS LOCALSTORAGE
function loadFavoritos() {
    const stored = localStorage.getItem("gatoHubFavoritos");
    if (stored) favoritos = new Set(JSON.parse(stored));
}

function saveFavoritos() {
    localStorage.setItem("gatoHubFavoritos", JSON.stringify([...favoritos]));
}

// USUARIOS LOCALSTORAGE
function loadUsers() {
    const stored = localStorage.getItem("gatoHubUsers");
    if (stored) {
        try {
            users = JSON.parse(stored);
        } catch {
            users = [];
        }
    }
}

function saveUsers() {
    localStorage.setItem("gatoHubUsers", JSON.stringify(users));
}

// IMAGEN ALEATORIA HERO
function setRandomHeroImage() {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    heroCatImage.src = randomCat.img;
}

// RENDERIZADO
function renderCats(list) {
    catsGrid.innerHTML = "";

    if (list.length === 0) {
        catsGrid.innerHTML = "<p>No se han encontrado gatos.</p>";
        updatePagination(0);
        return;
    }

    const totalPages = Math.ceil(list.length / pageSize);
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * pageSize;
    const pageItems = list.slice(start, start + pageSize);

    pageItems.forEach(cat => {
        const card = document.createElement("article");
        card.className = "cat-card";
        card.innerHTML = `
            <img src="${cat.img}" alt="${cat.nombre}">
            <div class="cat-card-body">
                <h3>${cat.nombre}</h3>
                <p><strong>Raza:</strong> ${formatearRaza(cat.raza)}</p>
                <p><strong>Edad:</strong> ${cat.edadTexto}</p>
            </div>
            <span class="favorite-icon ${favoritos.has(cat.id) ? "active" : ""}" data-id="${cat.id}">
                ${favoritos.has(cat.id) ? "❤️" : "🤍"}
            </span>
        `;

        card.addEventListener("click", e => {
            if (e.target.classList.contains("favorite-icon")) return;
            openCatModal(cat);
        });

        card.querySelector(".favorite-icon").addEventListener("click", e => {
            e.stopPropagation();
            toggleFavorite(cat.id);
        });

        catsGrid.appendChild(card);
    });

    updatePagination(totalPages);
}

// FILTROS
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const raza = filterRaza.value;
    const edad = filterEdad.value;

    filteredCats = cats.filter(cat => {
        const matchName = cat.nombre.toLowerCase().includes(searchTerm);
        const matchRaza = raza === "todos" || cat.raza === raza;
        const matchEdad = edad === "todas" || cat.edadCategoria === edad;
        const matchFav = !showOnlyFavorites || favoritos.has(cat.id);
        return matchName && matchRaza && matchEdad && matchFav;
    });

    currentPage = 1;
    renderCats(filteredCats);
    updateStats();
}

function clearFilters() {
    searchInput.value = "";
    filterRaza.value = "todos";
    filterEdad.value = "todas";
    showOnlyFavorites = false;
    filterFavoritosBtn.classList.remove("active");
    filteredCats = [...cats];
    currentPage = 1;
    renderCats(filteredCats);
    updateStats();
}

// MODAL
function openCatModal(cat) {
    currentModalCatId = cat.id;
    modalImg.src = cat.img;
    modalName.textContent = cat.nombre;
    modalBreed.textContent = formatearRaza(cat.raza);
    modalAge.textContent = cat.edadTexto;
    modalHistoria.textContent = cat.historia;
    modalPersonalidad.textContent = cat.personalidad;
    modalColor.textContent = cat.color;
    modalPeso.textContent = cat.peso;
    modalEnergia.textContent = cat.energia;
    modalBadgeEdad.textContent = cat.edadCategoria === "cachorro" ? "Cachorro" :
                                 cat.edadCategoria === "adulto" ? "Adulto" : "Senior";

    modalTagsContainer.innerHTML = "";
    cat.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "modal-tag-pill";
        span.textContent = tag;
        modalTagsContainer.appendChild(span);
    });

    modalFavBtn.textContent = favoritos.has(cat.id) ? "❤️ En favoritos" : "❤️ Añadir a favoritos";

    modal.classList.remove("hidden");
}

function closeCatModal() {
    modal.classList.add("hidden");
    currentModalCatId = null;
}

// FAVORITOS
function toggleFavorite(catId) {
    if (favoritos.has(catId)) {
        favoritos.delete(catId);
    } else {
        favoritos.add(catId);
    }
    saveFavoritos();
    renderCats(filteredCats);
    updateStats();
}

// PAGINACIÓN
function updatePagination(totalPages) {
    if (totalPages === 0) {
        pageInfo.textContent = "Página 0 / 0";
        prevPageBtn.disabled = true;
        nextPageBtn.disabled = true;
        return;
    }
    pageInfo.textContent = `Página ${currentPage} / ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// ESTADÍSTICAS
function updateStats() {
    statTotalGatos.textContent = cats.length;
    statFavoritos.textContent = favoritos.size;
}

// SCROLL A SECCIÓN
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
}

// TEMA OSCURO
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    themeToggle.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";
    localStorage.setItem("gatoHubTheme", isDark ? "dark" : "light");
}

function loadTheme() {
    const stored = localStorage.getItem("gatoHubTheme");
    if (stored === "dark") {
        document.body.classList.add("dark-theme");
        themeToggle.textContent = "☀️ Modo claro";
    }
}

// BOTÓN VOLVER ARRIBA
function handleScrollTopButton() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
}

// FORMULARIOS
function setupAdoptionForm() {
    if (!adoptionForm) return;
    adoptionForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(adoptionForm);
        try {
            await fetch(adoptionForm.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            });
            adoptionForm.reset();
            alert("Solicitud de adopción enviada correctamente.");
        } catch (err) {
            alert("Ha ocurrido un error al enviar el formulario de adopción.");
        }
    });
}

// REGISTRO / LOGIN
function setupRegisterForm() {
    if (!registerForm) return;
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("regNombre").value.trim();
        const email = document.getElementById("regEmail").value.trim().toLowerCase();
        const password = document.getElementById("regPassword").value;

        if (!nombre || !email || !password) {
            alert("Rellena todos los campos para registrarte.");
            return;
        }

        const exists = users.some(u => u.email === email);
        if (exists) {
            alert("Ya existe una cuenta registrada con ese correo.");
            return;
        }

        users.push({ nombre, email, password });
        saveUsers();
        registerForm.reset();
        alert("Cuenta creada correctamente. Ahora puedes iniciar sesión.");
    });
}

function setupLoginForm() {
    if (!loginForm) return;
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;

        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            alert("Correo o contraseña incorrectos, o la cuenta no existe.");
            return;
        }

        loginForm.reset();
        alert(`Bienvenido, ${user.nombre}. Has iniciado sesión correctamente.`);
    });
}

// DONACIONES
function setupDonationForm() {
    if (!donationForm) return;
    donationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const numero = document.getElementById("donNumero").value.replace(/\s+/g, "");
        const fecha = document.getElementById("donFecha").value.trim();
        const cvv = document.getElementById("donCvv").value.trim();
        const cantidad = document.getElementById("donCantidad").value;

        if (!/^[0-9]{13,16}$/.test(numero)) {
            alert("Introduce un número de tarjeta válido (13 a 16 dígitos).");
            return;
        }

        const fechaRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (!fechaRegex.test(fecha)) {
            alert("Introduce una fecha de caducidad válida en formato MM/YY (ej: 01/30).");
            return;
        }

        if (!/^[0-9]{3}$/.test(cvv)) {
            alert("Introduce un CVV válido de 3 dígitos.");
            return;
        }

        if (!cantidad || Number(cantidad) <= 0) {
            alert("Introduce una cantidad válida en euros.");
            return;
        }

        donationForm.reset();
        alert("Donación procesada correctamente.");
    });

    const donNumero = document.getElementById("donNumero");
    donNumero.addEventListener("input", () => {
        donNumero.value = donNumero.value.replace(/\D/g, "").slice(0, 16);
    });

    const donCvv = document.getElementById("donCvv");
    donCvv.addEventListener("input", () => {
        donCvv.value = donCvv.value.replace(/\D/g, "").slice(0, 3);
    });
}

// EVENTOS
document.addEventListener("DOMContentLoaded", () => {
    loadFavoritos();
    loadUsers();
    loadTheme();
    setRandomHeroImage();
    filteredCats = [...cats];
    renderCats(filteredCats);
    updateStats();

    // Filtros
    searchInput.addEventListener("input", applyFilters);
    filterRaza.addEventListener("change", applyFilters);
    filterEdad.addEventListener("change", applyFilters);

    filterFavoritosBtn.addEventListener("click", () => {
        showOnlyFavorites = !showOnlyFavorites;
        filterFavoritosBtn.classList.toggle("active", showOnlyFavorites);
        applyFilters();
    });

    clearFiltersBtn.addEventListener("click", clearFilters);

    // Paginación
    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderCats(filteredCats);
        }
    });

    nextPageBtn.addEventListener("click", () => {
        const totalPages = Math.ceil(filteredCats.length / pageSize);
        if (currentPage < totalPages) {
            currentPage++;
            renderCats(filteredCats);
        }
    });

    // Modal
    closeModalBtn.addEventListener("click", closeCatModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeCatModal();
    });

    modalFavBtn.addEventListener("click", () => {
        if (!currentModalCatId) return;
        toggleFavorite(currentModalCatId);
        modalFavBtn.textContent = favoritos.has(currentModalCatId)
            ? "❤️ En favoritos"
            : "❤️ Añadir a favoritos";
    });

    modalAdoptBtn.addEventListener("click", () => {
        closeCatModal();
        scrollToSection("adopcion");
    });

    // Tema
    themeToggle.addEventListener("click", toggleTheme);

    // Volver arriba
    window.addEventListener("scroll", handleScrollTopButton);
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Formularios
    setupAdoptionForm();
    setupRegisterForm();
    setupLoginForm();
    setupDonationForm();
});
