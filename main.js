/* ============================================================
   GatoHub - main.js
   Modo oscuro + idiomas + filtros + modal
   ============================================================ */

/* DATOS BASE GATOS (no dependen de idioma) */
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

/* TEXTOS POR IDIOMA PARA CADA GATO */
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
        13: { edad: "2 años", historia: "Sombra se movía entre tejados como un ninja.", personalidad: "Independiente, observador, algo tímido.", energia: "Media", tags: ["Independiente", "Elegante", "Ideal personas tranquilas"] },
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

/* TEXTOS GENERALES POR IDIOMA */
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
        pageLabel: "Página"
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
        pageLabel: "Pàgina"
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
        pageLabel: "Page"
    }
};

/* DOM */
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

/* ESTADO */
let favoritos = new Set();
let currentPage = 1;
const pageSize = 10;
let filteredCats = [...cats];
let showOnlyFavorites = false;
let currentModalCatId = null;
let users = [];
let currentLang = "es";

/* UTILIDADES */
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

function loadUsers() {
    const stored = localStorage.getItem("gatoHubUsers");
    if (!stored) return;
    try {
        users = JSON.parse(stored);
    } catch {
        users = [];
    }
}

function saveUsers() {
    localStorage.setItem("gatoHubUsers", JSON.stringify(users));
}

function setRandomHeroImage() {
    const randomCat = cats[Math.floor(Math.random() * cats.length)];
    heroCatImage.src = randomCat.img;
}

/* RENDER Y PAGINACIÓN */
function updatePagination(totalPages) {
    const t = i18nTexts[currentLang] || i18nTexts.es;
    if (totalPages === 0) {
        pageInfo.textContent = `${t.pageLabel} 0 / 0`;
        prevPageBtn.disabled = true;
        nextPageBtn.disabled = true;
        return;
    }
    pageInfo.textContent = `${t.pageLabel} ${currentPage} / ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

function updateStats() {
    statTotalGatos.textContent = cats.length;
    statFavoritos.textContent = favoritos.size;
}

function renderCats(list) {
    const t = i18nTexts[currentLang] || i18nTexts.es;
    catsGrid.innerHTML = "";

    if (list.length === 0) {
        catsGrid.innerHTML = `<p>${t.noCatsFound}</p>`;
        updatePagination(0);
        return;
    }

    const totalPages = Math.ceil(list.length / pageSize);
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * pageSize;
    const pageItems = list.slice(start, start + pageSize);

    pageItems.forEach(cat => {
        const langData = i18nCats[currentLang][cat.id];
        const edadTexto = langData ? langData.edad : "";
        const card = document.createElement("article");
        card.className = "cat-card";
        card.innerHTML = `
            <img src="${cat.img}" alt="${cat.nombre}">
            <div class="cat-card-body">
                <h3>${cat.nombre}</h3>
                <p><strong>${t.modalBreedLabel}</strong> ${formatearRaza(cat.raza, currentLang)}</p>
                <p><strong>${t.modalAgeLabel}</strong> ${edadTexto}</p>
            </div>
            <span class="favorite-icon ${favoritos.has(cat.id) ? "active" : ""}" data-id="${cat.id}">
                ${favoritos.has(cat.id) ? "❤️" : "🤍"}
            </span>
        `;

        card.addEventListener("click", e => {
            if (e.target.classList.contains("favorite-icon")) return;
            openCatModal(cat);
        });

        const favIcon = card.querySelector(".favorite-icon");
        favIcon.addEventListener("click", e => {
            e.stopPropagation();
            toggleFavorite(cat.id);
        });

        catsGrid.appendChild(card);
    });

    updatePagination(totalPages);
}

/* FILTROS */
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

/* FAVORITOS */
function toggleFavorite(catId) {
    if (favoritos.has(catId)) {
        favoritos.delete(catId);
    } else {
        favoritos.add(catId);
    }
    saveFavoritos();
    applyFilters();
    updateStats();
    if (currentModalCatId === catId) {
        if (currentLang === "en") {
            modalFavBtn.textContent = favoritos.has(catId)
                ? "❤️ In favorites"
                : "❤️ Add to favorites";
        } else if (currentLang === "ca") {
            modalFavBtn.textContent = favoritos.has(catId)
                ? "❤️ Als favorits"
                : "❤️ Afegir a favorits";
        } else {
            modalFavBtn.textContent = favoritos.has(catId)
                ? "❤️ En favoritos"
                : "❤️ Añadir a favoritos";
        }
    }
}

/* MODAL */
function openCatModal(cat) {
    currentModalCatId = cat.id;
    const langData = i18nCats[currentLang][cat.id];
    const t = i18nTexts[currentLang] || i18nTexts.es;

    modalImg.src = cat.img;
    modalName.textContent = cat.nombre;
    modalBreed.textContent = formatearRaza(cat.raza, currentLang);
    modalAge.textContent = langData ? langData.edad : "";
    modalHistoria.textContent = langData ? langData.historia : "";
    modalPersonalidad.textContent = langData ? langData.personalidad : "";
    modalColor.textContent = cat.color;
    modalPeso.textContent = cat.peso;
    modalEnergia.textContent = langData ? langData.energia : "";

    modalBreedLabel.textContent = t.modalBreedLabel;
    modalAgeLabel.textContent = t.modalAgeLabel;

    modalBadgeEdad.textContent =
        cat.edadCategoria === "cachorro"
            ? (currentLang === "en" ? "Kitten" : currentLang === "ca" ? "Cadell" : "Cachorro")
            : cat.edadCategoria === "adulto"
            ? (currentLang === "en" ? "Adult" : currentLang === "ca" ? "Adult" : "Adulto")
            : (currentLang === "en" ? "Senior" : currentLang === "ca" ? "Sènior" : "Senior");

    modalTagsContainer.innerHTML = "";
    if (langData && langData.tags) {
        langData.tags.forEach(tag => {
            const span = document.createElement("span");
            span.className = "modal-tag-pill";
            span.textContent = tag;
            modalTagsContainer.appendChild(span);
        });
    }

    if (favoritos.has(cat.id)) {
        modalFavBtn.textContent =
            currentLang === "en" ? "❤️ In favorites" :
            currentLang === "ca" ? "❤️ Als favorits" :
            "❤️ En favoritos";
    } else {
        modalFavBtn.textContent =
            currentLang === "en" ? "❤️ Add to favorites" :
            currentLang === "ca" ? "❤️ Afegir a favorits" :
            "❤️ Añadir a favoritos";
    }

    modalAdoptBtn.textContent =
        currentLang === "en" ? "I want to adopt" :
        currentLang === "ca" ? "Vull adoptar-lo" :
        "Quiero adoptarlo";

    modal.classList.remove("hidden");
}

function closeCatModal() {
    modal.classList.add("hidden");
    currentModalCatId = null;
}

/* TEMA OSCURO */
function loadTheme() {
    const stored = localStorage.getItem("gatoHubTheme");
    const isDark = stored === "dark";
    document.body.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("dark", isDark);
    themeToggle.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";
}

function toggleTheme() {
    const isDark = !document.body.classList.contains("dark");
    document.body.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("gatoHubTheme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️ Modo claro" : "🌙 Modo oscuro";
}

/* SCROLL */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
}

function handleScroll() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
    } else {
        backToTopBtn.classList.remove("visible");
    }
}

/* VALIDACIONES DONACIÓN */
function validateDonationCardNumber(num) {
    const clean = num.replace(/\s+/g, "");
    return /^\d{16}$/.test(clean);
}

function validateDonationExpiry(value) {
    const match = /^(\d{2})\/(\d{2})$/.exec(value);
    if (!match) return false;
    const mm = parseInt(match[1], 10);
    const yy = parseInt(match[2], 10);
    if (mm < 1 || mm > 12) return false;
    if (yy < 0 || yy > 99) return false;
    return true;
}

function validateDonationCvv(value) {
    return /^\d{3}$/.test(value);
}

/* IDIOMAS */
function applyLanguage(lang) {
    currentLang = lang;
    const t = i18nTexts[lang] || i18nTexts.es;
    const byId = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    byId("heroTitle", t.heroTitle);
    byId("heroSubtitle", t.heroSubtitle);
    byId("btnVerGaleria", t.btnVerGaleria);
    byId("btnVerGifs", t.btnVerGifs);
    byId("statGatosLabel", t.statGatosLabel);
    byId("statFavoritosLabel", t.statFavoritosLabel);
    byId("statRonroneosLabel", t.statRonroneosLabel);

    const navLinks = document.querySelectorAll(".main-nav a");
    if (navLinks.length === t.nav.length) {
        navLinks.forEach((a, i) => a.textContent = t.nav[i]);
    }

    byId("galeriaTitle", t.galeriaTitle);
    byId("galeriaSubtitle", t.galeriaSubtitle);
    byId("gifsTitle", t.gifsTitle);
    byId("curiosidadesTitle", t.curiosidadesTitle);
    byId("consejosTitle", t.consejosTitle);
    byId("adopcionTitle", t.adopcionTitle);
    byId("loginTitle", t.loginTitle);
    byId("crearCuentaTitle", t.crearCuentaTitle);
    byId("iniciarSesionTitle", t.iniciarSesionTitle);
    byId("donacionesTitle", t.donacionesTitle);
    byId("footerText", t.footerText);

    byId("labelNombre", t.labelNombre);
    byId("labelEmail", t.labelEmail);
    byId("labelTelefono", t.labelTelefono);
    byId("labelGatoInteres", t.labelGatoInteres);
    byId("labelMensaje", t.labelMensaje);
    byId("btnEnviarAdopcion", t.btnEnviarAdopcion);

    byId("labelUsuario", t.labelUsuario);
    byId("labelEmailRegistro", t.labelEmailRegistro);
    byId("labelPasswordRegistro", t.labelPasswordRegistro);
    byId("btnRegistrarse", t.btnRegistrarse);

    byId("labelEmailLogin", t.labelEmailLogin);
    byId("labelPasswordLogin", t.labelPasswordLogin);
    byId("btnEntrar", t.btnEntrar);

    byId("labelTitular", t.labelTitular);
    byId("labelEmailDonacion", t.labelEmailDonacion);
    byId("labelNumeroTarjeta", t.labelNumeroTarjeta);
    byId("labelCaducidad", t.labelCaducidad);
    byId("labelCVV", t.labelCVV);
    byId("labelCantidad", t.labelCantidad);
    byId("btnDonar", t.btnDonar);

    byId("modalHistoriaTitle", t.modalHistoriaTitle);
    byId("modalPersonalidadTitle", t.modalPersonalidadTitle);
    byId("modalDetallesTitle", t.modalDetallesTitle);
    byId("colorLabel", t.colorLabel);
    byId("pesoLabel", t.pesoLabel);
    byId("energiaLabel", t.energiaLabel);
    if (modalBreedLabel) modalBreedLabel.textContent = t.modalBreedLabel;
    if (modalAgeLabel) modalAgeLabel.textContent = t.modalAgeLabel;

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    if (filterFavoritosBtn) filterFavoritosBtn.textContent = t.filterFavoritos;
    if (clearFiltersBtn) clearFiltersBtn.textContent = t.clearFilters;
    if (prevPageBtn) prevPageBtn.textContent = t.prevPage;
    if (nextPageBtn) nextPageBtn.textContent = t.nextPage;

    const razaOptions = filterRaza ? filterRaza.querySelectorAll("option") : [];
    if (razaOptions.length === t.filterRaza.length) {
        t.filterRaza.forEach((txt, i) => {
            razaOptions[i].textContent = txt;
        });
    }

    const edadOptions = filterEdad ? filterEdad.querySelectorAll("option") : [];
    if (edadOptions.length === t.filterEdad.length) {
        t.filterEdad.forEach((txt, i) => {
            edadOptions[i].textContent = txt;
        });
    }

    if (curiosidadesListEl) {
        curiosidadesListEl.innerHTML = "";
        t.curiosidadesList.forEach(text => {
            const li = document.createElement("li");
            li.textContent = text;
            curiosidadesListEl.appendChild(li);
        });
    }

    if (consejosListEl) {
        consejosListEl.innerHTML = "";
        t.consejosList.forEach(text => {
            const li = document.createElement("li");
            li.textContent = text;
            consejosListEl.appendChild(li);
        });
    }

    renderCats(filteredCats);
    if (currentModalCatId != null) {
        const cat = cats.find(c => c.id === currentModalCatId);
        if (cat) openCatModal(cat);
    }
}

/* EVENTOS */
document.addEventListener("DOMContentLoaded", () => {
    loadFavoritos();
    loadUsers();
    setRandomHeroImage();
    filteredCats = [...cats];
    renderCats(filteredCats);
    updateStats();
    loadTheme();

    const storedLang = localStorage.getItem("gatoHubLang") || "es";
    currentLang = storedLang;
    languageSelect.value = storedLang;
    applyLanguage(storedLang);

    languageSelect.addEventListener("change", () => {
        const lang = languageSelect.value;
        localStorage.setItem("gatoHubLang", lang);
        applyLanguage(lang);
        alert(i18nTexts[lang]?.langAlert || i18nTexts.es.langAlert);
    });

    searchInput.addEventListener("input", applyFilters);
    filterRaza.addEventListener("change", applyFilters);
    filterEdad.addEventListener("change", applyFilters);

    filterFavoritosBtn.addEventListener("click", () => {
        showOnlyFavorites = !showOnlyFavorites;
        filterFavoritosBtn.classList.toggle("active", showOnlyFavorites);
        applyFilters();
    });

    clearFiltersBtn.addEventListener("click", clearFilters);

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

    closeModalBtn.addEventListener("click", closeCatModal);
    modal.addEventListener("click", e => {
        if (e.target === modal || e.target.classList.contains("modal-backdrop")) {
            closeCatModal();
        }
    });

    modalFavBtn.addEventListener("click", () => {
        if (currentModalCatId == null) return;
        toggleFavorite(currentModalCatId);
    });

    modalAdoptBtn.addEventListener("click", () => {
        scrollToSection("adopcion");
        closeCatModal();
    });

    themeToggle.addEventListener("click", toggleTheme);

    window.addEventListener("scroll", handleScroll);
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    if (adoptionForm) {
        adoptionForm.addEventListener("submit", e => {
            e.preventDefault();
            alert(
                currentLang === "en"
                    ? "Adoption request sent successfully."
                    : currentLang === "ca"
                    ? "Sol·licitud d'adopció enviada correctament."
                    : "Solicitud de adopción enviada correctamente."
            );
            adoptionForm.reset();
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", e => {
            e.preventDefault();
            const nombre = document.getElementById("regNombre").value.trim();
            const email = document.getElementById("regEmail").value.trim();
            const password = document.getElementById("regPassword").value;

            if (!nombre || !email || !password) {
                alert(
                    currentLang === "en"
                        ? "Please fill in all registration fields."
                        : currentLang === "ca"
                        ? "Si us plau, omple tots els camps de registre."
                        : "Por favor, completa todos los campos de registro."
                );
                return;
            }

            if (users.some(u => u.email === email)) {
                alert(
                    currentLang === "en"
                        ? "A user with that email already exists."
                        : currentLang === "ca"
                        ? "Ja existeix un usuari registrat amb aquest email."
                        : "Ya existe un usuario registrado con ese email."
                );
                return;
            }

            users.push({ nombre, email, password });
            saveUsers();
            alert(
                currentLang === "en"
                    ? "Registration completed successfully."
                    : currentLang === "ca"
                    ? "Registre completat correctament."
                    : "Registro completado correctamente."
            );
            registerForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value;

            const user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                alert(
                    currentLang === "en"
                        ? "Incorrect credentials."
                        : currentLang === "ca"
                        ? "Credencials incorrectes."
                        : "Credenciales incorrectas."
                );
                return;
            }

            alert(
                currentLang === "en"
                    ? `Welcome, ${user.nombre}.`
                    : currentLang === "ca"
                    ? `Benvingut/da, ${user.nombre}.`
                    : `Bienvenido/a, ${user.nombre}.`
            );
            loginForm.reset();
        });
    }

    if (donationForm) {
        donationForm.addEventListener("submit", e => {
            e.preventDefault();
            const nombre = document.getElementById("donNombre").value.trim();
            const email = document.getElementById("donEmail").value.trim();
            const numero = document.getElementById("donNumero").value.trim();
            const fecha = document.getElementById("donFecha").value.trim();
            const cvv = document.getElementById("donCvv").value.trim();
            const cantidad = document.getElementById("donCantidad").value;

            const tErrorCampos =
                currentLang === "en"
                    ? "Please fill in all donation fields."
                    : currentLang === "ca"
                    ? "Si us plau, omple tots els camps de donació."
                    : "Por favor, completa todos los campos de donación.";

            if (!nombre || !email || !numero || !fecha || !cvv || !cantidad) {
                alert(tErrorCampos);
                return;
            }

            if (!validateDonationCardNumber(numero)) {
                alert(
                    currentLang === "en"
                        ? "Invalid card number. It must have 16 digits."
                        : currentLang === "ca"
                        ? "Número de targeta no vàlid. Ha de tenir 16 dígits."
                        : "Número de tarjeta no válido. Debe tener 16 dígitos."
                );
                return;
            }

            if (!validateDonationExpiry(fecha)) {
                alert(
                    currentLang === "en"
                        ? "Invalid expiry date. Use MM/YY with month between 01 and 12."
                        : currentLang === "ca"
                        ? "Data de caducitat no vàlida. Usa el format MM/AA amb mes entre 01 i 12."
                        : "Fecha de caducidad no válida. Usa el formato MM/YY con mes entre 01 y 12."
                );
                return;
            }

            if (!validateDonationCvv(cvv)) {
                alert(
                    currentLang === "en"
                        ? "Invalid CVV. It must have exactly 3 digits."
                        : currentLang === "ca"
                        ? "CVV no vàlid. Ha de tenir exactament 3 dígits."
                        : "CVV no válido. Debe tener exactamente 3 dígitos."
                );
                return;
            }

            if (Number(cantidad) <= 0) {
                alert(
                    currentLang === "en"
                        ? "Amount must be greater than 0."
                        : currentLang === "ca"
                        ? "La quantitat ha de ser superior a 0."
                        : "La cantidad debe ser mayor que 0."
                );
                return;
            }

            alert(
                currentLang === "en"
                    ? "Donation processed successfully. Thank you for your help."
                    : currentLang === "ca"
                    ? "Donació processada correctament. Gràcies per la teva ajuda."
                    : "Donación procesada correctamente. Gracias por tu ayuda."
            );
            donationForm.reset();
        });
    }
});
