// =========================
// CONFIGURACIÓN SUPABASE
// =========================
const SUPABASE_URL = "https://dyygzezjynylhqiglvry.supabase.co";
// ⚠️ PEGA AQUÍ TU ANON KEY NUEVA (NO LA COMPARTAS CON NADIE)
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5eWd6ZXpqeW55bGhxaWdsdnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNjc2NjcsImV4cCI6MjA4NDc0MzY2N30.jnIi6T9dgwsxttGOmcQyh8mbmm0ex3Z_zPFvOBWY7EY";
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// =========================
// ESTADO GLOBAL
// =========================
let currentLang = localStorage.getItem("gatoHubLang") || "es";
let isDarkMode = localStorage.getItem("gatoHubDarkMode") === "true";

// =========================
// TEXTOS POR IDIOMA
// =========================
const i18n = {
  es: {
    nav: {
      home: "Inicio",
      curiosities: "Curiosidades",
      tips: "Consejos",
      contact: "Contacto",
      login: "Iniciar sesión",
      register: "Registrarse"
    },
    heroTitle: "GatoHub: el rincón definitivo para amantes de los gatos",
    heroSubtitle: "Descubre curiosidades, consejos y comparte tu amor por los felinos.",
    catsTitle: "Gatos destacados",
    tipsTitle: "Consejos para cuidar a tu gato",
    formTitle: "Contacto",
    formName: "Nombre",
    formEmail: "Correo electrónico",
    formMessage: "Mensaje",
    formSubmit: "Enviar",
    languageLabel: "Idioma",
    darkModeLabel: "Modo oscuro",
    lightModeLabel: "Modo claro",
    logout: "Cerrar sesión",
    loginWelcome: nombre => `Bienvenido/a, ${nombre}.`,
    registerSuccess: "Cuenta creada correctamente. Revisa tu correo para confirmar.",
    genericServerError: "Error del servidor. Inténtalo de nuevo más tarde.",
    loginFillFields: "Por favor, completa todos los campos de inicio de sesión.",
    registerFillFields: "Por favor, completa todos los campos de registro.",
    loginError: "Credenciales incorrectas.",
    logoutDone: "Sesión cerrada.",
    cats: [
      {
        id: "cat1",
        name: "Gato siamés",
        curiosityTitle: "Curiosidad",
        curiosity:
          "Los gatos siameses son muy vocales y les encanta comunicarse con sus humanos.",
        tipTitle: "Consejo",
        tip: "Necesitan mucha atención y estimulación mental para estar felices."
      },
      {
        id: "cat2",
        name: "Gato persa",
        curiosityTitle: "Curiosidad",
        curiosity:
          "Los persas son conocidos por su carácter tranquilo y su pelaje largo y denso.",
        tipTitle: "Consejo",
        tip: "Cepilla su pelaje a diario para evitar nudos y problemas de piel."
      },
      {
        id: "cat3",
        name: "Gato común europeo",
        curiosityTitle: "Curiosidad",
        curiosity:
          "Es una de las razas más resistentes y adaptables del mundo.",
        tipTitle: "Consejo",
        tip: "Ofrece juego diario para mantenerlo activo y evitar el sobrepeso."
      }
    ],
    tipsList: [
      "Proporciona siempre agua fresca y limpia.",
      "Limpia el arenero a diario.",
      "Reserva tiempo de juego todos los días.",
      "Realiza revisiones veterinarias periódicas."
    ]
  },
  ca: {
    nav: {
      home: "Inici",
      curiosities: "Curiositats",
      tips: "Consells",
      contact: "Contacte",
      login: "Inicia sessió",
      register: "Registra't"
    },
    heroTitle: "GatoHub: el racó definitiu per als amants dels gats",
    heroSubtitle:
      "Descobreix curiositats, consells i comparteix el teu amor pels felins.",
    catsTitle: "Gats destacats",
    tipsTitle: "Consells per cuidar el teu gat",
    formTitle: "Contacte",
    formName: "Nom",
    formEmail: "Correu electrònic",
    formMessage: "Missatge",
    formSubmit: "Envia",
    languageLabel: "Idioma",
    darkModeLabel: "Mode fosc",
    lightModeLabel: "Mode clar",
    logout: "Tanca sessió",
    loginWelcome: nombre => `Benvingut/da, ${nombre}.`,
    registerSuccess:
      "Compte creada correctament. Revisa el teu correu per confirmar.",
    genericServerError:
      "Error del servidor. Torna-ho a provar més tard.",
    loginFillFields:
      "Si us plau, omple tots els camps d'inici de sessió.",
    registerFillFields:
      "Si us plau, omple tots els camps de registre.",
    loginError: "Credencials incorrectes.",
    logoutDone: "Sessió tancada.",
    cats: [
      {
        id: "cat1",
        name: "Gat siamès",
        curiosityTitle: "Curiositat",
        curiosity:
          "Els gats siamesos són molt vocals i els encanta comunicar-se amb els humans.",
        tipTitle: "Consell",
        tip: "Necessiten molta atenció i estimulació mental per ser feliços."
      },
      {
        id: "cat2",
        name: "Gat persa",
        curiosityTitle: "Curiositat",
        curiosity:
          "Els perses són coneguts pel seu caràcter tranquil i el seu pelatge llarg i dens.",
        tipTitle: "Consell",
        tip: "Raspalla el seu pelatge diàriament per evitar nusos i problemes de pell."
      },
      {
        id: "cat3",
        name: "Gat comú europeu",
        curiosityTitle: "Curiositat",
        curiosity:
          "És una de les races més resistents i adaptables del món.",
        tipTitle: "Consell",
        tip: "Ofereix joc diari per mantenir-lo actiu i evitar el sobrepès."
      }
    ],
    tipsList: [
      "Proporciona sempre aigua fresca i neta.",
      "Neteja l'arenal cada dia.",
      "Reserva temps de joc cada dia.",
      "Fes revisions veterinàries periòdiques."
    ]
  },
  en: {
    nav: {
      home: "Home",
      curiosities: "Curiosities",
      tips: "Tips",
      contact: "Contact",
      login: "Log in",
      register: "Sign up"
    },
    heroTitle: "GatoHub: the ultimate corner for cat lovers",
    heroSubtitle:
      "Discover curiosities, tips and share your love for felines.",
    catsTitle: "Featured cats",
    tipsTitle: "Tips to take care of your cat",
    formTitle: "Contact",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send",
    languageLabel: "Language",
    darkModeLabel: "Dark mode",
    lightModeLabel: "Light mode",
    logout: "Log out",
    loginWelcome: nombre => `Welcome, ${nombre}.`,
    registerSuccess:
      "Account created successfully. Check your email to confirm.",
    genericServerError:
      "Server error. Please try again later.",
    loginFillFields: "Please fill in all login fields.",
    registerFillFields: "Please fill in all registration fields.",
    loginError: "Incorrect credentials.",
    logoutDone: "Session closed.",
    cats: [
      {
        id: "cat1",
        name: "Siamese cat",
        curiosityTitle: "Curiosity",
        curiosity:
          "Siamese cats are very vocal and love to communicate with their humans.",
        tipTitle: "Tip",
        tip: "They need a lot of attention and mental stimulation to be happy."
      },
      {
        id: "cat2",
        name: "Persian cat",
        curiosityTitle: "Curiosity",
        curiosity:
          "Persians are known for their calm character and long, dense fur.",
        tipTitle: "Tip",
        tip: "Brush their fur daily to avoid knots and skin problems."
      },
      {
        id: "cat3",
        name: "European shorthair",
        curiosityTitle: "Curiosity",
        curiosity:
          "It is one of the most resistant and adaptable breeds in the world.",
        tipTitle: "Tip",
        tip: "Offer daily playtime to keep them active and avoid overweight."
      }
    ],
    tipsList: [
      "Always provide fresh and clean water.",
      "Clean the litter box daily.",
      "Reserve playtime every day.",
      "Schedule regular vet check-ups."
    ]
  }
};

// =========================
// APLICAR IDIOMA A LA PÁGINA
// =========================
function applyLanguage() {
  const t = i18n[currentLang];

  const navHome = document.getElementById("nav-home");
  const navCuriosities = document.getElementById("nav-curiosities");
  const navTips = document.getElementById("nav-tips");
  const navContact = document.getElementById("nav-contact");
  const navLogin = document.getElementById("nav-login");
  const navRegister = document.getElementById("nav-register");

  if (navHome) navHome.textContent = t.nav.home;
  if (navCuriosities) navCuriosities.textContent = t.nav.curiosities;
  if (navTips) navTips.textContent = t.nav.tips;
  if (navContact) navContact.textContent = t.nav.contact;
  if (navLogin) navLogin.textContent = t.nav.login;
  if (navRegister) navRegister.textContent = t.nav.register;

  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;

  const catsTitle = document.getElementById("cats-title");
  const tipsTitle = document.getElementById("tips-title");
  const formTitle = document.getElementById("form-title");
  if (catsTitle) catsTitle.textContent = t.catsTitle;
  if (tipsTitle) tipsTitle.textContent = t.tipsTitle;
  if (formTitle) formTitle.textContent = t.formTitle;

  const formNameLabel = document.getElementById("form-name-label");
  const formEmailLabel = document.getElementById("form-email-label");
  const formMessageLabel = document.getElementById("form-message-label");
  const formSubmit = document.getElementById("form-submit");

  if (formNameLabel) formNameLabel.textContent = t.formName;
  if (formEmailLabel) formEmailLabel.textContent = t.formEmail;
  if (formMessageLabel) formMessageLabel.textContent = t.formMessage;
  if (formSubmit) formSubmit.value = t.formSubmit;

  const tipsList = document.getElementById("tips-list");
  if (tipsList) {
    tipsList.innerHTML = "";
    t.tipsList.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      tipsList.appendChild(li);
    });
  }

  t.cats.forEach(cat => {
    const nameEl = document.querySelector(
      `[data-cat-name="${cat.id}"]`
    );
    const curiosityTitleEl = document.querySelector(
      `[data-cat-curiosity-title="${cat.id}"]`
    );
    const curiosityTextEl = document.querySelector(
      `[data-cat-curiosity-text="${cat.id}"]`
    );
    const tipTitleEl = document.querySelector(
      `[data-cat-tip-title="${cat.id}"]`
    );
    const tipTextEl = document.querySelector(
      `[data-cat-tip-text="${cat.id}"]`
    );

    if (nameEl) nameEl.textContent = cat.name;
    if (curiosityTitleEl) curiosityTitleEl.textContent = cat.curiosityTitle;
    if (curiosityTextEl) curiosityTextEl.textContent = cat.curiosity;
    if (tipTitleEl) tipTitleEl.textContent = cat.tipTitle;
    if (tipTextEl) tipTextEl.textContent = cat.tip;
  });

  const langLabel = document.getElementById("language-label");
  if (langLabel) langLabel.textContent = t.languageLabel;

  const darkModeLabel = document.getElementById("dark-mode-label");
  if (darkModeLabel) {
    darkModeLabel.textContent = isDarkMode
      ? t.lightModeLabel
      : t.darkModeLabel;
  }
}

// =========================
// MODO OSCURO
// =========================
function applyDarkMode() {
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  const darkModeLabel = document.getElementById("dark-mode-label");
  const t = i18n[currentLang];
  if (darkModeLabel) {
    darkModeLabel.textContent = isDarkMode
      ? t.lightModeLabel
      : t.darkModeLabel;
  }
}

// =========================
// GIFS CENTRADOS Y MISMOS TAMAÑOS
// =========================
function normalizeGifs() {
  const gifs = document.querySelectorAll(".cat-gif");
  gifs.forEach(gif => {
    gif.style.display = "block";
    gif.style.margin = "0 auto";
    gif.style.maxWidth = "250px";
    gif.style.height = "auto";
  });
}

// =========================
// AUTENTICACIÓN SUPABASE
// =========================
async function initSessionUI() {
  const { data } = await sb.auth.getSession();
  const user = data.session?.user || null;

  const logoutBtn = document.getElementById("logoutBtn");
  const loginSection = document.getElementById("login-section");
  const registerSection = document.getElementById("register-section");
  const userInfo = document.getElementById("user-info");

  if (user) {
    if (loginSection) loginSection.style.display = "none";
    if (registerSection) registerSection.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
    if (userInfo) {
      const nombre = user.user_metadata?.nombre || user.email;
      userInfo.textContent = i18n[currentLang].loginWelcome(nombre);
    }
  } else {
    if (loginSection) loginSection.style.display = "block";
    if (registerSection) registerSection.style.display = "block";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (userInfo) userInfo.textContent = "";
  }
}

function setupAuthForms() {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");

  if (registerForm) {
    registerForm.addEventListener("submit", async e => {
      e.preventDefault();
      const t = i18n[currentLang];

      const nombre = document.getElementById("regNombre").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;

      if (!nombre || !email || !password) {
        alert(t.registerFillFields);
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

        alert(t.registerSuccess);
        registerForm.reset();
        initSessionUI();
      } catch (err) {
        console.error(err);
        alert(t.genericServerError);
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async e => {
      e.preventDefault();
      const t = i18n[currentLang];

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      if (!email || !password) {
        alert(t.loginFillFields);
        return;
      }

      try {
        const { data, error } = await sb.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          alert(t.loginError);
          return;
        }

        const nombre = data.user.user_metadata?.nombre || data.user.email;
        alert(t.loginWelcome(nombre));
        loginForm.reset();
        initSessionUI();
      } catch (err) {
        console.error(err);
        alert(t.genericServerError);
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      const t = i18n[currentLang];
      await sb.auth.signOut();
      alert(t.logoutDone);
      initSessionUI();
    });
  }
}

// =========================
// IDIOMA Y EVENTOS
// =========================
function setupLanguageSelector() {
  const langSelect = document.getElementById("languageSelect");
  if (!langSelect) return;

  langSelect.value = currentLang;

  langSelect.addEventListener("change", () => {
    currentLang = langSelect.value;
    localStorage.setItem("gatoHubLang", currentLang);
    applyLanguage();
    initSessionUI();
  });
}

// =========================
// MODO OSCURO EVENTO
// =========================
function setupDarkModeToggle() {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (!darkModeToggle) return;

  darkModeToggle.checked = isDarkMode;

  darkModeToggle.addEventListener("change", () => {
    isDarkMode = darkModeToggle.checked;
    localStorage.setItem("gatoHubDarkMode", isDarkMode ? "true" : "false");
    applyDarkMode();
  });
}

// =========================
// DESPLEGABLES DE GATOS
// =========================
function setupCatAccordions() {
  const catHeaders = document.querySelectorAll(".cat-header");
  catHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (!content) return;
      const isOpen = content.classList.contains("open");
      document
        .querySelectorAll(".cat-content.open")
        .forEach(el => el.classList.remove("open"));
      if (!isOpen) {
        content.classList.add("open");
      }
    });
  });
}

// =========================
// RESPONSIVE
// =========================
function setupResponsive() {
  function adjustLayout() {
    const mainContainer = document.querySelector(".main-container");
    if (!mainContainer) return;

    if (window.innerWidth >= 1024) {
      mainContainer.style.maxWidth = "1200px";
      mainContainer.style.margin = "0 auto";
      mainContainer.style.padding = "20px";
    } else {
      mainContainer.style.maxWidth = "100%";
      mainContainer.style.margin = "0";
      mainContainer.style.padding = "10px";
    }
  }

  adjustLayout();
  window.addEventListener("resize", adjustLayout);
}

// =========================
// INICIO
// =========================
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
  applyDarkMode();
  normalizeGifs();
  setupLanguageSelector();
  setupDarkModeToggle();
  setupCatAccordions();
  setupResponsive();
  setupAuthForms();
  initSessionUI();
});
