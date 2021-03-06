'use strict'

const gTrans = {
    gallery: {
        en: 'Gallery',
        es: 'galería',
        he: 'גלריה',
    },
    memes: {
        en: 'Memes',
        es: 'Memés',
        he: 'ממים',
    },
    'search-all': {
        en: 'all',
        es: 'todos',
        he: 'הכל',
    },
    'search-baby': {
        en: 'baby',
        es: 'Bebés',
        he: 'תינוקות',
    },
    'search-animals': {
        en: 'animals',
        es: 'animales',
        he: 'בעלי חיים'
    },
    'search-cute': {
        en: 'cute',
        es: 'encantadores',
        he: 'מתוקים'
    },
    'search-celebs': {
        en: 'celebs',
        es: 'famosos',
        he: 'מפורסמים',
    },
    search: {
        en: 'search',
        es: 'buscar',
        he: 'חיפוש',
    },
    text: {
        en: 'Type your text here',
        es: 'Escriba aquí',
        he: 'הקלד כאן',
    },
    share: {
        en: 'Share',
        es: 'Compartir',
        he: 'שיתוף',
    },
    download: {
        en: 'Download',
        es: 'Descargar',
        he: 'הורדה',
    },
    save: {
        en: 'Save',
        es: 'Guardar',
        he: 'שמור',
    },
    "saved-memes-msg": {
        en: 'No meme has been saved yet',
        es: 'No hay memés guardados',
        he: 'לא קיימים ממים שמורים',
    }
}

let gCurrLang = 'en'

function getCurrLang() {
    return gCurrLang
}

function setLang() {
    if (gCurrLang === 'en') gCurrLang = 'es'
    else if (gCurrLang === 'es') gCurrLang = 'he'
    else gCurrLang = 'en'
}

function getTrans(transKey) {
    const key = gTrans[transKey]
    if (!key) return 'UNKNOWN'
    const translate = key[gCurrLang]
    if (!translate) return key['en']
    return translate
}