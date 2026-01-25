/* ============================================================
   GatoHub - main.js
   Modo oscuro + idiomas + filtros + modal + Supabase auth + Google
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
   TEXTOS POR IDIOMA PARA CADA GATO
   ========================= */
const i18nCats = {
  es: {
    1: { edad: "3 años", historia: "Luna fue rescatada de una colonia felina. Al principio desconfiaba de todo, pero ahora disfruta de la calma del hogar.", personalidad: "Observadora, cariñosa cuando coge confianza, algo tímida con desconocidos.", energia: "Media", tags: ["Tranquila", "Cariñosa", "Ideal piso"] },
    2: { edad: "6 meses", historia: "Milo nació en una camada no deseada y fue entregado a una protectora.", personalidad: "Extremadamente juguetón, curioso, algo torpe pero encantador.", energia: "Alta", tags: ["Juguetón", "Cachorro", "Necesita juego diario"] },
    3: { edad: "2 años", historia: "Nala vivía con una familia que no podía seguir cuidándola.", personalidad: "Muy dulce, tranquila, le gusta la rutina.", energia: "Media-baja", tags: ["Tranquila", "Apta para niños", "Muy mimosa"] },
    4: { edad: "4 años", historia: "Simba fue encontrado explorando un parque.", personalidad: "Curioso, activo, muy inteligente.", energia: "Alta", tags: ["Activo", "Inteligente", "Necesita estímulos"] },
    5: { edad: "9 años", historia: "Coco vivió muchos años con una persona mayor.", personalidad: "Muy calmado, extremadamente cariñoso.", energia: "Baja", tags: ["Senior", "Muy cariñoso", "Ideal hogar tranquilo"] },
    6: { edad: "4 meses", historia: "Kira fue encontrada en una caja de cartón junto a sus hermanos.", personalidad: "Valiente, curiosa, muy activa.", energia: "Muy alta", tags: ["Cachorra", "Exploradora", "Necesita compañía"] },
    7: { edad: "5 años", historia: "Tom vivía en la calle pero siempre buscaba mimos.", personalidad: "Muy sociable, confiado, le encanta estar acompañado.", energia: "Media", tags: ["Sociable", "Apto con otros gatos", "Cariñoso"] },
    8: { edad: "10 años", historia: "Mimi fue entregada por una familia que se mudaba.", personalidad: "Serena, algo independiente, muy elegante.", energia: "Baja", tags: ["Senior", "Tranquila", "Ideal hogar calmado"] },
    9: { edad: "3 años", historia: "Bola llegó con sobrepeso, pero ha mejorado mucho.", personalidad: "Bonachón, tranquilo, algo glotón.", energia: "Media-baja", tags: ["Tranquilo", "Glotón", "Muy abrazable"] },
    10: { edad: "4 años", historia: "Toby fue encontrado en un garaje.", personalidad: "Cariñoso, le encanta frotarse contra las piernas.", energia: "Media", tags: ["Cariñoso", "Agradecido", "Ideal primer gato"] },
    11: { edad: "7 meses", historia: "Lola fue la más pequeña de su camada.", personalidad: "Juguetona, dulce, algo dependiente.", energia: "Alta", tags: ["Cachorra", "Juguetona", "Necesita atención"] },
    12: { edad: "3 años", historia: "Rocky vivía en una casa con jardín.", personalidad: "Muy activo, curioso, algo travieso.", energia: "Muy alta", tags: ["Activo", "Necesita espacio", "Juguetón"] },
    13: { edad: "2 años", historia: "Sombra se movía entre tejados como un ninja.", personalidad: "Independiente, observador, algo tímido.", energia: "Media", tags: ["Independent", "Elegante", "Ideal personas tranquilas"] },
    14: { edad: "11 años", historia: "Nube busca su retiro definitivo.", personalidad: "Muy calmado, le encantan las siestas largas.", energia: "Baja", tags: ["Senior", "Muy tranquilo", "Ideal compañía"] },
    15: { edad: "5 meses", historia: "Pixel no para quieto.", personalidad: "Hiperactivo, curioso, muy vocal.", energia: "Muy alta", tags: ["Cachorro", "Muy activo", "Necesita juego"] },
    16: { edad: "3 años", historia: "Chispa apareció en un taller mecánico.", personalidad: "Curioso, juguetón, algo travieso.", energia: "Alta", tags: ["Curioso", "Explorador", "Juguetón"] },
    17: { edad: "4 años", historia: "Rayo corre como si siempre tuviera prisa.", personalidad: "Muy activo, juguetón, algo intenso.", energia: "Muy alta", tags: ["Muy activo", "Juguetón", "Necesita ejercicio"] },
    18: { edad: "12 años", historia: "Mora ha vivido siempre en interior.", personalidad: "Serena, algo independiente, muy limpia.", energia: "Baja", tags: ["Senior", "Elegante", "Ideal hogar silencioso"] },
    19: { edad: "3 años", historia: "Choco fue encontrado cerca de una cafetería.", personalidad: "Dulce, sociable, le gusta estar acompañado.", energia: "Media", tags: ["Dulce", "Sociable", "Ideal familias"] },
    20: { edad: "6 meses", historia: "Kiwi fue el único superviviente de su camada.", personalidad: "Cariñoso, algo tímido al principio, muy juguetón.", energia: "Alta", tags: ["Cachorro", "Cariñoso", "Necesita paciencia"] }
  },
  ca: {
    1: { edad: "3 anys", historia: "La Luna va ser rescatada d'una colònia felina. Al principi desconfiava de tot, però ara gaudeix de la calma de la llar.", personalidad: "Observadora, afectuosa quan agafa confiança, una mica tímida amb desconeguts.", energia: "Mitjana", tags: ["Tranquil·la", "Afectuosa", "Ideal pis"] },
    2: { edad: "6 mesos", historia: "En Milo va néixer en una ventrada no desitjada i va ser entregat a una protectora.", personalidad: "Molt juganer, curiós, una mica maldestre però encantador.", energia: "Alta", tags: ["Juganer", "Cadell", "Necessita joc diari"] },
    3: { edad: "2 anys", historia: "La Nala vivia amb una família que no podia continuar cuidant-la.", personalidad: "Molt dolça, tranquil·la, li agrada la rutina.", energia: "Mitjana-baixa", tags: ["Tranquil·la", "Apte per a nens", "Molt mimos"] },
    4: { edad: "4 anys", historia: "En Simba va ser trobat explorant un parc.", personalidad: "Curiós, actiu, molt intel·ligent.", energia: "Alta", tags: ["Actiu", "Intel·ligent", "Necessita estímuls"] },
    5: { edad: "9 anys", historia: "En Coco va viure molts anys amb una persona gran.", personalidad: "Molt calmat, extremadament afectuós.", energia: "Baixa", tags: ["Sènior", "Molt afectuós", "Ideal llar tranquil·la"] },
    6: { edad: "4 mesos", historia: "La Kira va ser trobada en una capsa de cartró amb els seus germans.", personalidad: "Valenta, curiosa, molt activa.", energia: "Molt alta", tags: ["Cadell", "Exploradora", "Necessita companyia"] },
    7: { edad: "5 anys", historia: "En Tom vivia al carrer però sempre buscava mimos.", personalidad: "Molt sociable, confiat, li encanta estar acompanyat.", energia: "Mitjana", tags: ["Sociable", "Apte amb altres gats", "Afectuós"] },
    8: { edad: "10 anys", historia: "La Mimi va ser entregada per una família que es mudava.", personalidad: "Serena, una mica independent, molt elegant.", energia: "Baixa", tags: ["Sènior", "Tranquil·la", "Ideal llar calmada"] },
    9: { edad: "3 anys", historia: "En Bola va arribar amb sobrepès, però ha millorat molt.", personalidad: "Bonàs, tranquil, una mica golafre.", energia: "Mitjana-baixa", tags: ["Tranquil", "Golafre", "Molt abraçable"] },
    10: { edad: "4 anys", historia: "En Toby va ser trobat en un garatge.", personalidad: "Afectuós, li encanta fregar-se contra les cames.", energia: "Mitjana", tags: ["Afectuós", "Agraït", "Ideal primer gat"] },
    11: { edad: "7 mesos", historia: "La Lola va ser la més petita de la ventrada.", personalidad: "Juganera, dolça, una mica dependent.", energia: "Alta", tags: ["Cadell", "Juganera", "Necessita atenció"] },
    12: { edad: "3 anys", historia: "En Rocky vivia en una casa amb jardí.", personalidad: "Molt actiu, curiós, una mica entremaliat.", energia: "Molt alta", tags: ["Actiu", "Necessita espai", "Juganer"] },
    13: { edad: "2 anys", historia: "En Sombra es movia entre teulades com un ninja.", personalidad: "Independent, observador, una mica tímid.", energia: "Mitjana", tags: ["Independent", "Elegant", "Ideal persones tranquil·les"] },
    14: { edad: "11 anys", historia: "En Nube busca la seva jubilació definitiva.", personalidad: "Molt calmat, li encanten les migdiades llargues.", energia: "Baixa", tags: ["Sènior", "Molt tranquil", "Ideal companyia"] },
    15: { edad: "5 mesos", historia: "En Pixel no para quiet.", personalidad: "Hiperactiu, curiós, molt vocal.", energia: "Molt alta", tags: ["Cadell", "Molt actiu", "Necessita joc"] },
    16: { edad: "3 anys", historia: "La Chispa va aparèixer en un taller mecànic.", personalidad: "Curiosa, juganera, una mica entremaliada.", energia: "Alta", tags: ["Curiosa", "Exploradora", "Juganera"] },
    17: { edad: "4 anys", historia: "En Rayo corre com si sempre tingués pressa.", personalidad: "Molt actiu, juganer, una mica intens.", energia: "Molt alta", tags: ["Molt actiu", "Juganer", "Necessita exercici"] },
    18: { edad: "12 anys", historia: "La Mora ha viscut sempre a l'interior.", personalidad: "Serena, una mica independent, molt neta.", energia: "Baixa", tags: ["Sènior", "Elegant", "Ideal llar silenciosa"] },
    19: { edad: "3 anys", historia: "En Choco va ser trobat a prop d'una cafeteria.", personalidad: "Dolç, sociable, li agrada estar acompanyat.", energia: "Mitjana", tags: ["Dolç", "Sociable", "Ideal famílies"] },
    20: { edad: "6 mesos", historia: "En Kiwi va ser l'únic supervivent de la ventrada.", personalidad: "Afectuós, una mica tímid al principi, molt juganer.", energia: "Alta", tags: ["Cadell", "Afectuós", "Necessita paciència"] }
  },
  en: {
    1: { edad: "3 years", historia: "Luna was rescued from a feral colony. At first she distrusted everything, but now she enjoys a calm home.", personalidad: "Observant, affectionate once she trusts you, a bit shy with strangers.", energia: "Medium", tags: ["Calm", "Affectionate", "Ideal for flats"] },
    2: { edad: "6 months", historia: "Milo was born in an unwanted litter and taken to a shelter.", personalidad: "Extremely playful, curious, a bit clumsy but charming.", energia: "High", tags: ["Playful", "Kitten", "Needs daily play"] },
    3: { edad: "2 years", historia: "Nala lived with a family that could no longer care for her.", personalidad: "Very sweet, calm, likes routine.", energia: "Medium-low", tags: ["Calm", "Good with children", "Very cuddly"] },
    4: { edad: "4 years", historia: "Simba was found exploring a park.", personalidad: "Curious, active, very intelligent.", energia: "High", tags: ["Active", "Intelligent", "Needs stimulation"] },
    5: { edad: "9 years", historia: "Coco lived many years with an elderly person.", personalidad: "Very calm, extremely affectionate.", energia: "Low", tags: ["Senior", "Very affectionate", "Ideal quiet home"] },
    6: { edad: "4 months", historia: "Kira was found in a cardboard box with her siblings.", personalidad: "Brave, curious, very active.", energia: "Very high", tags: ["Kitten", "Explorer", "Needs company"] },
    7: { edad: "5 years", historia: "Tom lived on the street but always looked for cuddles.", personalidad: "Very social, confident, loves being with people.", energia: "Medium", tags: ["Social", "Good with other cats", "Affectionate"] },
    8: { edad: "10 years", historia: "Mimi was surrendered by a family that moved away.", personalidad: "Serene, a bit independent, very elegant.", energia: "Low", tags: ["Senior", "Calm", "Ideal quiet home"] },
    9: { edad: "3 years", historia: "Bola arrived overweight but has improved a lot.", personalidad: "Good-natured, calm, a bit gluttonous.", energia: "Medium-low", tags: ["Calm", "Food lover", "Very huggable"] },
    10: { edad: "4 years", historia: "Toby was found in a garage.", personalidad: "Affectionate, loves rubbing against legs.", energia: "Medium", tags: ["Affectionate", "Grateful", "Great first cat"] },
    11: { edad: "7 months", historia: "Lola was the smallest of her litter.", personalidad: "Playful, sweet, a bit dependent.", energia: "High", tags: ["Kitten", "Playful", "Needs attention"] },
    12: { edad: "3 years", historia: "Rocky lived in a house with a garden.", personalidad: "Very active, curious, a bit naughty.", energia: "Very high", tags: ["Active", "Needs space", "Playful"] },
    13: { edad: "2 years", historia: "Sombra moved across rooftops like a ninja.", personalidad: "Independent, observant, a bit shy.", energia: "Medium", tags: ["Independent", "Elegant", "Ideal for calm people"] },
    14: { edad: "11 years", historia: "Nube is looking for his final retirement home.", personalidad: "Very calm, loves long naps.", energia: "Low", tags: ["Senior", "Very calm", "Great companion"] },
    15: { edad: "5 months", historia: "Pixel never stays still.", personalidad: "Hyperactive, curious, very vocal.", energia: "Very high", tags: ["Kitten", "Very active", "Needs play"] },
    16: { edad: "3 years", historia: "Chispa appeared in a mechanic's workshop.", personalidad: "Curious, playful, a bit naughty.", energia: "High", tags: ["Curious", "Explorer", "Playful"] },
    17: { edad: "4 years", historia: "Rayo runs as if always in a hurry.", personalidad: "Very active, playful, a bit intense.", energia: "Very high", tags: ["Very active", "Playful", "Needs exercise"] },
    18: { edad: "12 years", historia: "Mora has always lived indoors.", personalidad: "Serene, a bit independent, very clean.", energia: "Low", tags: ["Senior", "Elegant", "Ideal quiet home"] },
    19: { edad: "3 years", historia: "Choco was found near a coffee shop.", personalidad: "Sweet, social, likes being with people.", energia: "Medium", tags: ["Sweet", "Social", "Great for families"] },
    20: { edad: "6 months", historia: "Kiwi was the only survivor of his litter.", personalidad: "Affectionate, a bit shy at first, very playful.", energia: "High", tags: ["Kitten", "Affectionate", "Needs patience"] }
  }
};

/* =========================
   TEXTOS GENERALES POR IDIOMA
   ========================= */
const i18nTexts = {
  es: {
    heroTitle: "Bienvenido a GatoHub",
    heroSubtitle: "Explora la galería, guarda favoritos y descubre historias únicas.",
    btnVerGaleria: "Ver galería",
    btnVerGifs: "Ver gifs",
    statGatosLabel: "Gatos",
    statFavoritosLabel: "Favoritos",
    statRonroneosLabel: "Ronroneos",
    nav: ["Galería", "Gifs", "Curiosidades", "Consejos", "Adopción", "Login", "Donaciones"],
    galeriaTitle: "Galería de gatos",
    galeriaSubtitle: "Filtra, busca y descubre a cada uno.",
    gifsTitle: "Gifs de gatos",
    curiosidadesTitle: "Curiosidades",
    consejosTitle: "Consejos",
    adopcionTitle: "Formulario de adopción",
    loginTitle: "Acceso",
    crearCuentaTitle: "Crear cuenta",
    iniciarSesionTitle: "Iniciar sesión",
    donacionesTitle: "Donaciones",
    footerText: "GatoHub · 2026",
    labelNombre: "Nombre completo",
    labelEmail: "Correo electrónico",
    labelTelefono: "Teléfono",
    labelGatoInteres: "Gato de interés",
    labelMensaje: "Cuéntanos sobre tu hogar",
    btnEnviarAdopcion: "Enviar solicitud",
    labelUsuario: "Usuario",
    labelEmailRegistro: "Email",
    labelPasswordRegistro: "Contraseña",
    btnRegistrarse: "Registrarse",
    labelEmailLogin: "Email",
    labelPasswordLogin: "Contraseña",
    btnEntrar: "Entrar",
    labelTitular: "Titular",
    labelEmailDonacion: "Email",
    labelNumeroTarjeta: "Número de tarjeta",
    labelCaducidad: "Caducidad (MM/YY)",
    labelCVV: "CVV",
    labelCantidad: "Cantidad (€)",
    btnDonar: "Donar",
    modalHistoriaTitle: "Historia",
    modalPersonalidadTitle: "Personalidad",
    modalDetallesTitle: "Detalles",
    colorLabel: "Color:",
    pesoLabel: "Peso:",
    energiaLabel: "Energía:",
    modalBreedLabel: "Raza:",
    modalAgeLabel: "Edad:",
    searchPlaceholder: "Buscar por nombre...",
    filterFavoritos: "Solo favoritos",
    clearFilters: "Limpiar",
    prevPage: "Anterior",
    nextPage: "Siguiente",
    filterRaza: ["Todas las razas", "Siamés", "Persa", "Común europeo", "Bengalí", "Otras"],
    filterEdad: ["Todas las edades", "Cachorros", "Adultos", "Senior"],
    curiosidadesList: [
      "Los gatos pueden dormir hasta 16 horas al día.",
      "Su ronroneo puede tener un efecto calmante en las personas.",
      "Cada gato tiene un maullido único."
    ],
    consejosList: [
      "Ofrece siempre agua fresca y comida de calidad.",
      "Reserva tiempo diario para jugar con tu gato.",
      "Visita al veterinario al menos una vez al año."
    ],
    langAlert: "Idioma cambiado a español.",
    noCatsFound: "No se han encontrado gatos.",
    pageLabel: "Página",
    weeklyCatTitle: "🐱 Gato de la semana",
    weeklyBadge: "Gato de la semana",
    weeklySeeMore: "Ver más",
    weeklyAdopt: "Quiero adoptarlo",
    weeklyFavorite: "Añadir a favoritos"
  },
  ca: {
    heroTitle: "Benvingut a GatoHub",
    heroSubtitle: "Explora la galeria, desa favorits i descobreix històries úniques.",
    btnVerGaleria: "Veure galeria",
    btnVerGifs: "Veure gifs",
    statGatosLabel: "Gats",
    statFavoritosLabel: "Favorits",
    statRonroneosLabel: "Roncs",
    nav: ["Galeria", "Gifs", "Curiositats", "Consells", "Adopció", "Login", "Donacions"],
    galeriaTitle: "Galeria de gats",
    galeriaSubtitle: "Filtra, cerca i descobreix cadascun.",
    gifsTitle: "Gifs de gats",
    curiosidadesTitle: "Curiositats",
    consejosTitle: "Consells",
    adopcionTitle: "Formulari d'adopció",
    loginTitle: "Accés",
    crearCuentaTitle: "Crear compte",
    iniciarSesionTitle: "Iniciar sessió",
    donacionesTitle: "Donacions",
    footerText: "GatoHub · 2026",
    labelNombre: "Nom complet",
    labelEmail: "Correu electrònic",
    labelTelefono: "Telèfon",
    labelGatoInteres: "Gat d'interès",
    labelMensaje: "Explica'ns casa teva",
    btnEnviarAdopcion: "Enviar sol·licitud",
    labelUsuario: "Usuari",
    labelEmailRegistro: "Email",
    labelPasswordRegistro: "Contrasenya",
    btnRegistrarse: "Registrar-se",
    labelEmailLogin: "Email",
    labelPasswordLogin: "Contrasenya",
    btnEntrar: "Entrar",
    labelTitular: "Titular",
    labelEmailDonacion: "Email",
    labelNumeroTarjeta: "Número de targeta",
    labelCaducidad: "Caducitat (MM/AA)",
    labelCVV: "CVV",
    labelCantidad: "Quantitat (€)",
    btnDonar: "Donar",
    modalHistoriaTitle: "Història",
    modalPersonalidadTitle: "Personalitat",
    modalDetallesTitle: "Detalls",
    colorLabel: "Color:",
    pesoLabel: "Pes:",
    energiaLabel: "Energia:",
    modalBreedLabel: "Raça:",
    modalAgeLabel: "Edat:",
    searchPlaceholder: "Cercar per nom...",
    filterFavoritos: "Només favorits",
    clearFilters: "Netejar",
    prevPage: "Anterior",
    nextPage: "Següent",
    filterRaza: ["Totes les races", "Siamès", "Persa", "Comú europeu", "Bengalí", "Altres"],
    filterEdad: ["Totes les edats", "Cadells", "Adults", "Sènior"],
    curiosidadesList: [
      "Els gats poden dormir fins a 16 hores al dia.",
      "El seu ronc pot tenir un efecte relaxant en les persones.",
      "Cada gat té un miol únic."
    ],
    consejosList: [
      "Ofereix sempre aigua fresca i menjar de qualitat.",
      "Reserva temps diari per jugar amb el teu gat.",
      "Visita el veterinari almenys un cop l'any."
    ],
    langAlert: "Idioma canviat a català.",
    noCatsFound: "No s'han trobat gats.",
    pageLabel: "Pàgina",
    weeklyCatTitle: "🐱 Gat de la setmana",
    weeklyBadge: "Gat de la setmana",
    weeklySeeMore: "Veure més",
    weeklyAdopt: "Vull adoptar-lo",
    weeklyFavorite: "Afegir a favorits"
  },
  en: {
    heroTitle: "Welcome to GatoHub",
    heroSubtitle: "Explore the gallery, save favorites and discover unique stories.",
    btnVerGaleria: "View gallery",
    btnVerGifs: "View gifs",
    statGatosLabel: "Cats",
    statFavoritosLabel: "Favorites",
    statRonroneosLabel: "Purrs",
    nav: ["Gallery", "Gifs", "Curiosities", "Tips", "Adoption", "Login", "Donations"],
    galeriaTitle: "Cat gallery",
    galeriaSubtitle: "Filter, search and discover each one.",
    gifsTitle: "Cat gifs",
    curiosidadesTitle: "Curiosities",
    consejosTitle: "Tips",
    adopcionTitle: "Adoption form",
    loginTitle: "Login",
    crearCuentaTitle: "Create account",
    iniciarSesionTitle: "Sign in",
    donacionesTitle: "Donations",
    footerText: "GatoHub · 2026",
    labelNombre: "Full name",
    labelEmail: "Email",
    labelTelefono: "Phone",
    labelGatoInteres: "Cat of interest",
    labelMensaje: "Tell us about your home",
    btnEnviarAdopcion: "Send request",
    labelUsuario: "Username",
    labelEmailRegistro: "Email",
    labelPasswordRegistro: "Password",
    btnRegistrarse: "Sign up",
    labelEmailLogin: "Email",
    labelPasswordLogin: "Password",
    btnEntrar: "Log in",
    labelTitular: "Cardholder",
    labelEmailDonacion: "Email",
    labelNumeroTarjeta: "Card number",
    labelCaducidad: "Expiry (MM/YY)",
    labelCVV: "CVV",
    labelCantidad: "Amount (€)",
    btnDonar: "Donate",
    modalHistoriaTitle: "Story",
    modalPersonalidadTitle: "Personality",
    modalDetallesTitle: "Details",
    colorLabel: "Color:",
    pesoLabel: "Weight:",
    energiaLabel: "Energy:",
    modalBreedLabel: "Breed:",
    modalAgeLabel: "Age:",
    searchPlaceholder: "Search by name...",
    filterFavoritos: "Only favorites",
    clearFilters: "Clear",
    prevPage: "Previous",
    nextPage: "Next",
    filterRaza: ["All breeds", "Siamese", "Persian", "European shorthair", "Bengal", "Others"],
    filterEdad: ["All ages", "Kittens", "Adults", "Senior"],
    curiosidadesList: [
      "Cats can sleep up to 16 hours a day.",
      "Their purring can have a calming effect on people.",
      "Each cat has a unique meow."
    ],
    consejosList: [
      "Always provide fresh water and quality food.",
      "Set aside daily time to play with your cat.",
      "Visit the vet at least once a year."
    ],
    langAlert: "Language changed to English.",
    noCatsFound: "No cats found.",
    pageLabel: "Page",
    weeklyCatTitle: "🐱 Cat of the week",
    weeklyBadge: "Cat of the week",
    weeklySeeMore: "See more",
    weeklyAdopt: "I want to adopt",
    weeklyFavorite: "Add to favorites"
  }
};

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

const btnVerGaleria = document.getElementById("btnVerGaleria");
const btnVerGifs = document.getElementById("btnVerGifs");

const btnLoginTop = document.getElementById("btnLoginTop");
const btnRegisterTop = document.getElementById("btnRegisterTop");
const btnGoogleTop = document.getElementById("btnGoogleTop");
const logoutBtn = document.getElementById("logoutBtn");
const userInfo = document.getElementById("userInfo");

const weeklyCatSection = document.getElementById("weeklyCatSection");
const weeklyCatTitleEl = document.getElementById("weeklyCatTitle");
const weeklyCatCardEl = document.getElementById("weeklyCatCard");

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
let isDarkMode = localStorage.getItem("gatoHubDarkMode") === "true";

let heroSliderIndex = 0;
let heroSliderIntervalId = null;

/* =========================
   UTILIDADES
   ========================= */
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

/* ========== HERO SLIDER (FADE) ========== */
function startHeroSlider() {
  if (!heroCatImage) return;
  const images = cats.map(c => c.img);
  const alts = cats.map(c => c.nombre);

  function showCurrent() {
    heroCatImage.classList.remove("visible");
    const src = images[heroSliderIndex];
    const alt = alts[heroSliderIndex];
    // pequeño timeout para que el fade se note
    setTimeout(() => {
      heroCatImage.src = src;
      heroCatImage.alt = alt;
      heroCatImage.classList.add("visible");
    }, 80);
  }

  showCurrent();

  if (heroSliderIntervalId) clearInterval(heroSliderIntervalId);
  heroSliderIntervalId = setInterval(() => {
    heroSliderIndex = (heroSliderIndex + 1) % images.length;
    showCurrent();
  }, 6000);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* =========================
   FORMATEAR RAZA
   ========================= */
function formatearRaza(raza, lang) {
  const mapEs = { siames: "Siamés", persa: "Persa", comun: "Común europeo", bengali: "Bengalí", otra: "Otra raza" };
  const mapCa = { siames: "Siamès", persa: "Persa", comun: "Comú europeu", bengali: "Bengalí", otra: "Una altra raça" };
  const mapEn = { siames: "Siamese", persa: "Persian", comun: "European shorthair", bengali: "Bengal", otra: "Other breed" };
  if (lang === "ca") return mapCa[raza] || raza;
  if (lang === "en") return mapEn[raza] || raza;
  return mapEs[raza] || raza;
}

/* =========================
   GATO DE LA SEMANA
   ========================= */
function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}

function getWeeklyCat() {
  const now = new Date();
  const week = getWeekNumber(now);
  const index = (week - 1) % cats.length;
  return cats[index];
}

function renderWeeklyCat() {
  if (!weeklyCatCardEl || !weeklyCatSection) return;
  const t = i18nTexts[currentLang];
  const cat = getWeeklyCat();
  const data = i18nCats[currentLang][cat.id];

  weeklyCatTitleEl.textContent = t.weeklyCatTitle;

  weeklyCatCardEl.innerHTML = "";

  const wrapperImg = document.createElement("div");
  wrapperImg.className = "weekly-cat-image-wrapper";

  const img = document.createElement("img");
  img.className = "weekly-cat-image";
  img.src = cat.img;
  img.alt = cat.nombre;

  const badge = document.createElement("span");
  badge.className = "weekly-badge";
  badge.textContent = t.weeklyBadge;

  wrapperImg.appendChild(img);
  wrapperImg.appendChild(badge);

  const info = document.createElement("div");
  info.className = "weekly-cat-info";

  const h3 = document.createElement("h3");
  h3.textContent = cat.nombre;

  const meta = document.createElement("div");
  meta.className = "weekly-cat-meta";
  meta.textContent = `${formatearRaza(cat.raza, currentLang)} · ${data.edad}`;

  const story = document.createElement("p");
  story.className = "weekly-cat-story";
  story.textContent = data.historia;

  const actions = document.createElement("div");
  actions.className = "weekly-cat-actions";

  const btnSeeMore = document.createElement("button");
  btnSeeMore.type = "button";
  btnSeeMore.className = "secondary-button";
  btnSeeMore.textContent = t.weeklySeeMore;
  btnSeeMore.addEventListener("click", () => openModal(cat.id));

  const btnAdopt = document.createElement("button");
  btnAdopt.type = "button";
  btnAdopt.className = "primary-button";
  btnAdopt.textContent = t.weeklyAdopt;
  btnAdopt.addEventListener("click", () => {
    const adopGato = document.getElementById("adopGato");
    if (adopGato) adopGato.value = cat.nombre;
    scrollToSection("adopcion");
  });

  const btnFav = document.createElement("button");
  btnFav.type = "button";
  btnFav.className = "secondary-button";
  btnFav.textContent = t.weeklyFavorite;
  btnFav.addEventListener("click", () => {
    const cardFavIcon = document.querySelector(`.cat-card[data-id="${cat.id}"] .favorite-icon`);
    if (cardFavIcon) {
      toggleFavorite(cat.id, cardFavIcon);
    } else {
      if (favoritos.has(cat.id)) favoritos.delete(cat.id);
      else favoritos.add(cat.id);
      saveFavoritos();
      updateStats();
    }
  });

  actions.appendChild(btnSeeMore);
  actions.appendChild(btnAdopt);
  actions.appendChild(btnFav);

  info.appendChild(h3);
  info.appendChild(meta);
  info.appendChild(story);
  info.appendChild(actions);

  weeklyCatCardEl.appendChild(wrapperImg);
  weeklyCatCardEl.appendChild(info);
}

/* =========================
   RENDER GALERÍA
   ========================= */
function renderCats() {
  catsGrid.innerHTML = "";
  let list = [...cats];
  const search = searchInput.value.toLowerCase().trim();
  if (search) {
    list = list.filter(c => c.nombre.toLowerCase().includes(search));
  }
  if (filterRaza.value !== "todos") {
    list = list.filter(c => c.raza === filterRaza.value);
  }
  if (filterEdad.value !== "todas") {
    list = list.filter(c => c.edadCategoria === filterEdad.value);
  }
  if (showOnlyFavorites) {
    list = list.filter(c => favoritos.has(c.id));
  }
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
    img.alt = cat.nombre;

    const fav = document.createElement("div");
    fav.className = "favorite-icon";
    fav.textContent = favoritos.has(cat.id) ? "❤️" : "🤍";

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

    fav.addEventListener("click", e => {
      e.stopPropagation();
      toggleFavorite(cat.id, fav);
    });

    card.addEventListener("click", () => openModal(cat.id));

    catsGrid.appendChild(card);
  });

  updatePagination();
  updateStats();
}

/* =========================
   MODAL
   ========================= */
function openModal(id) {
  const cat = cats.find(c => c.id === id);
  if (!cat) return;
  const data = i18nCats[currentLang][id];

  modalImg.src = cat.img;
  modalImg.alt = cat.nombre;
  modalName.textContent = cat.nombre;
  modalBreed.textContent = formatearRaza(cat.raza, currentLang);
  modalAge.textContent = data.edad;
  modalHistoria.textContent = data.historia;
  modalPersonalidad.textContent = data.personalidad;
  modalColor.textContent = cat.color;
  modalPeso.textContent = cat.peso;
  modalEnergia.textContent = data.energia;

  modalTagsContainer.innerHTML = "";
  data.tags.forEach(tag => {
    const span = document.createElement("span");
    span.className = "modal-tag-pill";
    span.textContent = tag;
    modalTagsContainer.appendChild(span);
  });

  const t = i18nTexts[currentLang];
  modalBadgeEdad.textContent = data.edad;
  modalBreedLabel.textContent = t.modalBreedLabel;
  modalAgeLabel.textContent = t.modalAgeLabel;
  document.getElementById("modalHistoriaTitle").textContent = t.modalHistoriaTitle;
  document.getElementById("modalPersonalidadTitle").textContent = t.modalPersonalidadTitle;
  document.getElementById("modalDetallesTitle").textContent = t.modalDetallesTitle;
  document.getElementById("colorLabel").textContent = t.colorLabel;
  document.getElementById("pesoLabel").textContent = t.pesoLabel;
  document.getElementById("energiaLabel").textContent = t.energiaLabel;

  currentModalCatId = id;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
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
  const t = i18nTexts[currentLang];
  const totalPages = Math.max(1, Math.ceil(filteredCats.length / pageSize));
  pageInfo.textContent = `${t.pageLabel} ${currentPage} / ${totalPages}`;
  prevPageBtn.disabled = currentPage <= 1;
  nextPageBtn.disabled = currentPage >= totalPages;
}

function updateStats() {
  statTotalGatos.textContent = cats.length;
  statFavoritos.textContent = favoritos.size;
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

  const navIds = ["navGaleria", "navGifs", "navCuriosidades", "navConsejos", "navAdopcion", "navLogin", "navDonaciones"];
  navIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t.nav[i];
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

  searchInput.placeholder = t.searchPlaceholder;
  filterFavoritosBtn.textContent = t.filterFavoritos;
  clearFiltersBtn.textContent = t.clearFilters;

  [...filterRaza.options].forEach((o, i) => {
    if (t.filterRaza[i]) o.textContent = t.filterRaza[i];
  });
  [...filterEdad.options].forEach((o, i) => {
    if (t.filterEdad[i]) o.textContent = t.filterEdad[i];
  });

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

  renderWeeklyCat();
  renderCats();
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
  localStorage.setItem("gatoHubDarkMode", isDarkMode ? "true" : "false");
  applyDarkMode();
}

/* =========================
   SUPABASE AUTH
   ========================= */
async function initSessionUI() {
  const { data } = await sb.auth.getSession();
  const user = data.session?.user || null;

  if (user) {
    const nombre = user.user_metadata?.nombre || user.email;
    if (userInfo) userInfo.textContent = `Hola, ${nombre}`;
    if (logoutBtn) logoutBtn.style.display = "inline-flex";
    if (btnLoginTop) btnLoginTop.style.display = "none";
    if (btnRegisterTop) btnRegisterTop.style.display = "none";
    if (btnGoogleTop) btnGoogleTop.style.display = "none";
  } else {
    if (userInfo) userInfo.textContent = "";
    if (logoutBtn) logoutBtn.style.display = "none";
    if (btnLoginTop) btnLoginTop.style.display = "inline-flex";
    if (btnRegisterTop) btnRegisterTop.style.display = "inline-flex";
    if (btnGoogleTop) btnGoogleTop.style.display = "inline-flex";
  }
}

async function setupAuthForms() {
  if (registerForm) {
    registerForm.addEventListener("submit", async e => {
      e.preventDefault();
      const nombre = document.getElementById("regNombre").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;

      if (!nombre || !email || !password) {
        alert("Por favor, completa todos los campos de registro.");
        return;
      }

      try {
        const { error } = await sb.auth.signUp({
          email,
          password,
          options: {
            data: { nombre },
            emailRedirectTo: window.location.origin
          }
        });

        if (error) {
          alert(error.message);
          return;
        }

        alert("Cuenta creada correctamente. Revisa tu correo para confirmar.");
        registerForm.reset();
        initSessionUI();
      } catch (err) {
        console.error(err);
        alert("Error del servidor. Inténtalo de nuevo más tarde.");
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async e => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      if (!email || !password) {
        alert("Por favor, completa todos los campos de inicio de sesión.");
        return;
      }

      try {
        const { data, error } = await sb.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          alert("Credenciales incorrectas o email no verificado.");
          return;
        }

        const nombre = data.user.user_metadata?.nombre || data.user.email;
        alert(`Bienvenido/a, ${nombre}.`);
        loginForm.reset();
        initSessionUI();
      } catch (err) {
        console.error(err);
        alert("Error del servidor. Inténtalo de nuevo más tarde.");
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await sb.auth.signOut();
      alert("Sesión cerrada.");
      initSessionUI();
    });
  }
}

async function handleGoogleLogin() {
  try {
    const { error } = await sb.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin
      }
    });
    if (error) {
      alert("Error al iniciar sesión con Google");
      console.error(error);
    }
  } catch (err) {
    console.error(err);
    alert("Error inesperado con Google");
  }
}

/* =========================
   EVENTOS VARIOS
   ========================= */
function setupFilters() {
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentPage = 1;
      renderCats();
    });
  }

  if (filterRaza) {
    filterRaza.addEventListener("change", () => {
      currentPage = 1;
      renderCats();
    });
  }

  if (filterEdad) {
    filterEdad.addEventListener("change", () => {
      currentPage = 1;
      renderCats();
    });
  }

  if (filterFavoritosBtn) {
    filterFavoritosBtn.addEventListener("click", () => {
      showOnlyFavorites = !showOnlyFavorites;
      filterFavoritosBtn.classList.toggle("active", showOnlyFavorites);
      currentPage = 1;
      renderCats();
    });
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      searchInput.value = "";
      filterRaza.value = "todos";
      filterEdad.value = "todas";
      showOnlyFavorites = false;
      filterFavoritosBtn.classList.remove("active");
      currentPage = 1;
      renderCats();
    });
  }

  if (prevPageBtn) {
    prevPageBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderCats();
      }
    });
  }

  if (nextPageBtn) {
    nextPageBtn.addEventListener("click", () => {
      const totalPages = Math.max(1, Math.ceil(filteredCats.length / pageSize));
      if (currentPage < totalPages) {
        currentPage++;
        renderCats();
      }
    });
  }
}

function setupModalEvents() {
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }
  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target.classList.contains("modal-backdrop")) {
        closeModal();
      }
    });
  }
  if (modalFavBtn) {
    modalFavBtn.addEventListener("click", () => {
      if (!currentModalCatId) return;
      const cardFavIcon = document.querySelector(`.cat-card[data-id="${currentModalCatId}"] .favorite-icon`);
      if (cardFavIcon) {
        toggleFavorite(currentModalCatId, cardFavIcon);
      } else {
        if (favoritos.has(currentModalCatId)) favoritos.delete(currentModalCatId);
        else favoritos.add(currentModalCatId);
        saveFavoritos();
        updateStats();
      }
    });
  }
  if (modalAdoptBtn) {
    modalAdoptBtn.addEventListener("click", () => {
      if (!currentModalCatId) return;
      const cat = cats.find(c => c.id === currentModalCatId);
      const adopGato = document.getElementById("adopGato");
      if (adopGato && cat) {
        adopGato.value = cat.nombre;
      }
      closeModal();
      scrollToSection("adopcion");
    });
  }
}

function setupLanguageSelector() {
  if (!languageSelect) return;
  languageSelect.value = currentLang;
  languageSelect.addEventListener("change", () => {
    currentLang = languageSelect.value;
    localStorage.setItem("gatoHubLang", currentLang);
    applyLanguage();
    initSessionUI();
  });
}

function setupThemeToggle() {
  if (!themeToggle) return;
  themeToggle.addEventListener("click", toggleDarkMode);
}

function setupBackToTop() {
  if (!backToTopBtn) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupForms() {
  if (adoptionForm) {
    adoptionForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Solicitud de adopción enviada. Nos pondremos en contacto contigo.");
      adoptionForm.reset();
    });
  }

  if (donationForm) {
    donationForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Donación procesada (simulado). ¡Gracias por tu apoyo!");
      donationForm.reset();
    });
  }
}

function setupHeroButtons() {
  if (btnVerGaleria) {
    btnVerGaleria.addEventListener("click", () => scrollToSection("galeria"));
  }
  if (btnVerGifs) {
    btnVerGifs.addEventListener("click", () => scrollToSection("gifs"));
  }
}

function setupTopAuthButtons() {
  if (btnLoginTop) {
    btnLoginTop.addEventListener("click", () => scrollToSection("login"));
  }
  if (btnRegisterTop) {
    btnRegisterTop.addEventListener("click", () => scrollToSection("login"));
  }
  if (btnGoogleTop) {
    btnGoogleTop.addEventListener("click", handleGoogleLogin);
  }
}

/* =========================
   INICIO
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
  loadFavoritos();
  applyDarkMode();
  applyLanguage();
  startHeroSlider();
  setupFilters();
  setupModalEvents();
  setupLanguageSelector();
  setupThemeToggle();
  setupBackToTop();
  setupForms();
  setupHeroButtons();
  setupTopAuthButtons();
  setupAuthForms();
  initSessionUI();
});
