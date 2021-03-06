/**
 * Accepted languages
 * @type {Array}
 */
export const _LANGUAGES = ['en', 'ca', 'es']

/**
 * Translations by language
 * @private
 */
const DICTIONARY = {
  ca: {
    explore: 'Explora',
    contact: 'Contactar',
    about: 'Que és VVLOG',
    lang: '{param} Lleng.',
    catalan: 'Catalá',
    spanish: 'Espanyol',
    english: 'Anglés',
    but_dont_get_lost: '...Però no et perdis {param}',
    write_the_query: 'escriu la consulta',
    written_by: 'Escrit per',
    min_read: 'lectura {param} min.',
    more_of_vvlog: 'Més de VVLOG {param}',
    seems_like_this_is_empty: 'Sembla que això esta buit',
    maybe_try_another_words: 'Potser amb unes altres paraules {param}',
    subscribe_and_stay_in_touch: 'Subscriu-te i manté el contacte',
    subscribe: "Subscriure's",
    fullstack_development: 'Fullstack development',
    if_you_are_not_a_ill_check_you_back: 'Si no ets un {param} et tornare el missatge {param}',
    vvlog_explore: 'Explora',
    your_name: 'El teu nom',
    we_use_cookies_to_personalise_content_and_ads_to_provide_social_media_features_and_to_analyse_our_traffic:
      'Utilitzem cookies per a personalitzar el contingut i la publicitat, així com les xarxes socials, a més per analitzar el nostre tràfic',
    vvlog_homepage: "Blog multi idioma sobre programació i desenvolupament d'apps",
    i_agree: "Estic d'acord",
    this_website_uses_cookies: 'Aquesta pàgina web utilitza cookies',
    email_is_invalid: 'El email es invàlid',
    thanks_for_subscribing: 'Gràcies per formar-ne part!',
    other_projects: 'Altres projectes',
    your_email: 'El teu correu',
    send: 'Enviar {param}',
    vvlog_contact: 'Contactar',
    message: 'Missatge',
    message_cant_be_empty: 'El missatge no pot estar buit',
    thanks_for_contacting_us: 'Gràcies per contactar-nos {param}!',
    vvlog_about: 'Sobre nosaltres',
    category: 'Categoria',
    homepage: 'Inici',
    vvlog_is_created_written_and_maintained_by: 'VVLOG està creat, escrit i mantingut per',
    and_a_team_of_contributors_on_github: 'i un equip de col·laboradors a github',
    category_does_not_exist: 'La categoria no existeix',
    category_does_not_exist_or_it_is_no_longer_public:
      'La categoria no existeix o ja no és pública',
    nothing_is_wrong: 'No esta passant res',
    why_would_you_come_here: 'Perquè vindries aquí?',
    contact_me_ill_try_to_answer_as_soon_as_possible:
      'Contactem, intentaré contestar el més ràpid possible',
    check_them_all: 'Un tastet',
    featured: 'Destacats',
    do_you_have_any_suggestions_any_topic_you_need_help_with_or_code_youd_like_to_see_together:
      "Tens algun suggeriment? Qualsevol tema amb el qual necessitis ajuda, o codi que t'agradaria veure junts",
    an_introduction_to_me_and_vvlogs_philosophy: 'Una introducció a mi hi ha la filosofia de VVLOG',
    about_p_1:
      "VVLOG neix de la passió pel desenvolupament web, del neguit personal per a compartir coneixements, d'intentar ensenyar amb paraules senzilles allò que de primeres pareix molt complex.",
    about_p_2:
      "Durant aquest procés espero aprendre encara més i poder explicar encara millor allò que m'agrada.",
    about_p_3: 'Espero de veritat que us agradi i sobretot que us sigui útil.',
    about_p_4: 'Com hauràs endevinat, el nom de VVLOG ve dels meus cognoms repetits {param}.',
    about_p_5:
      "Sóc un programador que estima el desenvolupament web, m'agrada molt CREAR {param} literalment, inventar coses que passen pel meu cap. El disseny i la programació de funcionalitat dura i UX són les coses que m'apassionen.",
    about_p_6:
      'Pots posar-te en contacte amb mi en una de les meves xarxes socials a baix o per correu {param}.',
    article_does_not_exist: "L'article no existeix",
    article_does_not_exist_or_it_is_no_longer_public: "L'article no existeix o ja no és públic",
    vvlog_error: 'Error, algúna cosa ha passat!',
    react_powered_blog_for_web_development:
      "Blog sobre programació i desenvolupament d'apps fet amb React",
    language: 'Llenguatge',
    library: 'Llibreria',
    framework: 'Framework',
    package: 'Package',
    source: 'Font',
    so: 'Sistema operatiu',
    other: 'Altre',
    hey_give_me_a_clap: 'Ei! Donam un aplaudiment',
    claps: 'Aplaudiments',
    thanks: 'Gràcies',
  },
  es: {
    explore: 'Explora',
    contact: 'Contactar',
    about: 'Sobre VVLOG',
    lang: '{param} Leng.',
    catalan: 'Catalán',
    spanish: 'Español',
    english: 'Inglés',
    but_dont_get_lost: '...Intenta no perderte {param}',
    write_the_query: 'escribe tu consulta',
    written_by: 'Escrito por',
    min_read: 'lectura {param} min.',
    more_of_vvlog: 'Más de VVLOG {param}',
    seems_like_this_is_empty: 'Parece que esto esta vacío',
    maybe_try_another_words: 'A lo mejor con otras palabras {param}',
    subscribe_and_stay_in_touch: 'Subscríbete y mantén el contacto',
    subscribe: 'Subscribirse',
    fullstack_development: 'Fullstack development',
    if_you_are_not_a_ill_check_you_back: 'Si no eres un {param} te devolvere el mensaje {param}',
    vvlog_explore: 'Explora',
    your_name: 'Tu nombre',
    we_use_cookies_to_personalise_content_and_ads_to_provide_social_media_features_and_to_analyse_our_traffic:
      'Usamos cookies para personalizar el contenido y la publicidad, asi como las redes sociales, además de analizar nuestro trafico',
    vvlog_homepage: 'Blog multi idioma sobre programación y desarrollo de apps',
    i_agree: 'Estoy de acuerdo',
    this_website_uses_cookies: 'Esta página web usa cookies',
    email_is_invalid: 'El email es inválido',
    thanks_for_subscribing: 'Grácias por subscribirte',
    other_projects: 'Otros proyectos',
    your_email: 'Tu email',
    send: 'Enviar {param}',
    vvlog_contact: 'VVLOG ─ Contactar',
    message: 'Mensaje',
    message_cant_be_empty: 'El mensaje no puede estar vacío',
    thanks_for_contacting_us: 'Grácias por contactarnos {param}!',
    vvlog_about: 'vvblog {param} Sobre nosotros',
    category: 'Categoria',
    homepage: 'Inicio',
    vvlog_is_created_written_and_maintained_by: 'VVLOG ha sido creado, escrito y mantenido por',
    and_a_team_of_contributors_on_github: 'y un equipo de colaboradores en github',
    category_does_not_exist: 'La categoria no existe',
    category_does_not_exist_or_it_is_no_longer_public: 'La categoría no existe o ya no és pública',
    nothing_is_wrong: 'No esta pasando nada',
    why_would_you_come_here: '¿Porque vendrias aquí?',
    contact_me_ill_try_to_answer_as_soon_as_possible:
      'Contáctame, intentare contestar lo más rápido posible',
    check_them_all: 'Un pequeño popurri',
    featured: 'Destacados',
    do_you_have_any_suggestions_any_topic_you_need_help_with_or_code_youd_like_to_see_together:
      '¿Tiene alguna sugerencia? Cualquier tema con el que necesites ayuda, o código que te gustaría ver juntos',
    an_introduction_to_me_and_vvlogs_philosophy: 'Una introducción a mi y a la filosofía de VVLOG',
    about_p_1:
      'VVLOG nace de la pasión por el desarrollo web, de la desazón personal para compartir conocimientos, de intentar enseñar con palabras sencillas aquello que de primeras pare muy complejo.',
    about_p_2:
      'Durante este proceso espero aprender todavía más y poder explicar todavía mejor aquello que me gusta.',
    about_p_3: 'Espero de verdad que os guste y sobre todo que os sea útil.',
    about_p_4:
      'Como habrás adivinado, el nombre de VVLOG viene de mis apellidos repetidos {param}.',
    about_p_5:
      'Soy un programador que ama el desarrollo web, me gusta mucho CREAR {param} literalmente, inventar cosas que pasan por mi cabeza. El diseño y la programación de funcionalidad dura y UX son las cosas que me apasionan.',
    about_p_6:
      'Puedes ponerte en contacto conmigo en una de mis redes sociales abajo o por correo {param}.',
    article_does_not_exist: 'El articulo no existe',
    article_does_not_exist_or_it_is_no_longer_public: 'El articulo no existe o ya no és público',
    vvlog_error: 'VVLOG ─ Error',
    react_powered_blog_for_web_development:
      'Blog sobre programación y desarrollo de apps hecho con React',
    language: 'Lenguaje',
    library: 'Librería',
    framework: 'Framework',
    package: 'Package',
    source: 'Fuente',
    so: 'Sistema operativo',
    other: 'Otro',
    hey_give_me_a_clap: 'Ei! Dame un aplauso',
    claps: 'Aplausos',
    thanks: 'Grácias',
  },
  en: {
    explore: 'Explore',
    contact: 'Contact',
    about: 'About',
    lang: '{param} Lang.',
    catalan: 'Catalan',
    spanish: 'Spanish',
    english: 'English',
    but_dont_get_lost: "...But don't get lost {param}",
    write_the_query: 'write the query',
    written_by: 'Written by',
    min_read: '{param} min read',
    more_of_vvlog: 'More of VVLOG {param}',
    seems_like_this_is_empty: 'Seems like this is empty',
    maybe_try_another_words: 'Maybe with other words {param}',
    subscribe_and_stay_in_touch: 'Subscribe and stay in touch',
    subscribe: 'Subscribe',
    fullstack_development: 'Fullstack development',
    if_you_are_not_a_ill_check_you_back: "If you are not a {param} i'll check you back {param}",
    vvlog_explore: 'Explore',
    your_name: 'Your name',
    we_use_cookies_to_personalise_content_and_ads_to_provide_social_media_features_and_to_analyse_our_traffic:
      'We use cookies to personalise content and ads, to provide social media features and to analyse our traffic',
    vvlog_homepage: 'Programming and app development blog build with React',
    i_agree: 'I agree',
    this_website_uses_cookies: 'This website uses cookies',
    email_is_invalid: 'Email is invalid',
    thanks_for_subscribing: 'Thanks for subscribing',
    other_projects: 'Other projects',
    your_email: 'Your email',
    send: 'Send {param}',
    vvlog_contact: 'Contact',
    message: 'Message',
    message_cant_be_empty: "Message can't be empty",
    thanks_for_contacting_us: 'Thanks for contacting us {param}!',
    vvlog_about: 'About',
    category: 'Category',
    homepage: 'Homepage',
    vvlog_is_created_written_and_maintained_by: 'VVLOG is created, written, and maintained by',
    and_a_team_of_contributors_on_github: 'and a team of contributors on github',
    category_does_not_exist: "Category doesn't exist",
    category_does_not_exist_or_it_is_no_longer_public:
      "Category doesn't exist or it is no longer public",
    nothing_is_wrong: 'Nothing is wrong',
    why_would_you_come_here: 'Why would you come here?',
    contact_me_ill_try_to_answer_as_soon_as_possible:
      "Contact me, I'll try to answer as soon as possible",
    check_them_all: 'Check them all',
    featured: 'Featured',
    do_you_have_any_suggestions_any_topic_you_need_help_with_or_code_youd_like_to_see_together:
      "Do you have any suggestions? Any topic you need help with, or code you'd like to see together",
    an_introduction_to_me_and_vvlogs_philosophy: "An introduction to me and VVLOG's philosophy",
    about_p_1:
      'VVLOG was born from the passion for web development, from the personal desire to share knowledge, from trying to teach with simple words that which at first seems very complex.',
    about_p_2:
      'During this process I hope to learn even more and be able to explain even better what I like.',
    about_p_3: 'I really hope you like it and above all that it is useful to you.',
    about_p_4: "As you might have guessed, VVLOG's name comes from my repeated surnames {param}.",
    about_p_5:
      "I'm a fullstack programmer who loves web development, I really like CREATING {param} literally, inventing things that go through my head. Design and UX and hard functionality programming are the things that im passionate about.",
    about_p_6: 'You can contact me in one of my social networks below or by mail {param}.',
    article_does_not_exist: 'Article does not exist',
    article_does_not_exist_or_it_is_no_longer_public:
      'Article does not exist or it is no longer public',
    vvlog_error: 'VVLOG ─ Error',
    react_powered_blog_for_web_development: 'Programming and app development blog build with React',
    language: 'Language',
    library: 'Library',
    framework: 'Framework',
    package: 'Package',
    source: 'Source',
    so: 'OS',
    other: 'other',
    hey_give_me_a_clap: 'Hey! Give me a clap',
    claps: 'Claps',
    thanks: 'Thanks',
  },
}

export default DICTIONARY
