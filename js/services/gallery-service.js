'use strict'

const SEARCH_WORDS_KEY = 'searchWordsDB'
const gKeyWords = loadFromStorage(SEARCH_WORDS_KEY) || { all: 0, baby: 3, animals: 8, cute: 1, celebs: 0 }
let gImgs = []
let gFilterBy = 'all'

_createImgs()

function getKeyWords() {
    return gKeyWords
}

function setFilter(keyWord) {
    switch (keyWord) {
        case 'todos':
        case 'הכל':
            keyWord = 'all'
            break
        case 'Bebés':
        case 'תינוקות':
            keyWord = 'baby'
            break
        case 'animales':
        case 'בעלי חיים':
            keyWord = 'animals'
            break
        case 'encantadores':
        case 'מתוקים':
            keyWord = 'cute'
            break
        case 'famosos':
        case 'מפורסמים':
            keyWord = 'celebs'
            break
    }

    if (!gKeyWords[keyWord] && gKeyWords[keyWord] !== 0) return
    gKeyWords[keyWord]++
    saveToStorage(SEARCH_WORDS_KEY, gKeyWords)

    //** */
    // if (gKeyWords[keyWord] < 20) gKeyWords[keyWord]++

    //** */
    // if (gKeyWords[keyWord] < 10) gKeyWords[keyWord] = gKeyWords[keyWord] + 2
    // else gKeyWords[keyWord]++
    //         const Keys = Object.keys(gKeyWords)
    //     Keys.forEach(key => {
    //         if (gKeyWords[key] > 0) gKeyWords[key]--
    //     })

    gFilterBy = keyWord
}

function getImgsForDisplay() {
    if (gFilterBy === 'all') return gImgs
    let imgs = gImgs.filter(img => {
        return img.keyWords.includes(gFilterBy)
    })
    return imgs
}

function _createImgs() {
    gImgs = []
    gImgs.push(_createImg(1, ['celebs']))
    gImgs.push(_createImg(2, ['cute', 'animals']))
    gImgs.push(_createImg(3, ['baby', 'animals', 'cute']))
    gImgs.push(_createImg(4, ['animals', 'cute']))
    gImgs.push(_createImg(5, ['baby', 'cute']))
    gImgs.push(_createImg(6, ['celebs']))
    gImgs.push(_createImg(7, ['baby', 'cute']))
    gImgs.push(_createImg(8, ['celebs']))
    gImgs.push(_createImg(9, ['baby', 'cute']))
    gImgs.push(_createImg(10, ['celebs']))
    gImgs.push(_createImg(11, ['celebs']))
    gImgs.push(_createImg(12, ['celebs']))
    gImgs.push(_createImg(13, ['celebs']))
    gImgs.push(_createImg(14, ['celebs']))
    gImgs.push(_createImg(15, ['celebs']))
    gImgs.push(_createImg(16, ['celebs']))
    gImgs.push(_createImg(17, ['celebs']))
    gImgs.push(_createImg(18, ['celebs', 'cute']))
}

function _createImg(id, keyWords) {
    return {
        id,
        keyWords,
        url: `img/meme-imgs-square/${id}.jpg`
    }
}