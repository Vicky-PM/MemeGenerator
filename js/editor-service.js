'use strict'

const SAVED_MEMES_KEY = 'SAVED_MEMES'

let gMeme
let gSavedMemes
let gIsImgReady
let gStartPos

function initMeme(selectedImgId = 0) {
    gMeme = {
        selectedImgId,
        selectedLineIdx: 0,
        lines: []
    }
}

function getLines() {
    return gMeme.lines
}

function getLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function getMeme() {
    return gMeme
}

function saveMeme(memeDataUrl) {
    if (!gSavedMemes) gSavedMemes = [];
    gSavedMemes.push(memeDataUrl);
    saveToStorage(SAVED_MEMES_KEY, gSavedMemes);
}

function getSavedMemes() {
    gSavedMemes = loadFromStorage(SAVED_MEMES_KEY)
    return gSavedMemes
}

function addLine(txt, size) {
    gMeme.lines.push(_createLine(txt, size))
}

function selectLine() {
    if (!gMeme.lines.length) return
    if (gMeme.lines[gMeme.selectedLineIdx]) gMeme.lines[gMeme.selectedLineIdx].isSelected = false
    let currIdx = gMeme.selectedLineIdx
    gMeme.selectedLineIdx = (currIdx < gMeme.lines.length - 1) ? ++currIdx : 0
    gMeme.lines[gMeme.selectedLineIdx].isSelected = true
}

function deleteLine() {
    if (!gMeme.lines.length) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

function setFontSize(diff) {
    if (!gMeme.lines.length) return
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].size += diff
}

function setFontFamily(elOption) {
    const fontFamily = elOption.value
    const currLine = getLine()
    currLine.fontFamily = fontFamily
}

function setColor(color, elChangeComponent) {
    if (!gMeme.lines.length) return
    const currLine = getLine()
    if (elChangeComponent === 'font') currLine.fontColor = color
    else currLine.strokeColor = color
}

function readyCanvas() {
    gIsImgReady = true
    renderMeme()
    setTimeout(() => gIsImgReady = false)
}

function isImageReady() {
    return gIsImgReady
}

function getEvPos(ev) {
    const touchEvs = ['touchstart', 'touchmove', 'touchend']

    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    if (touchEvs.includes(ev.type)) {
        ev.preventDefault();
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function isLineClicked(clickedPos) {
    const currLine = getLine()
    console.log(currLine);
    const distance = Math.sqrt((currLine.x - clickedPos.x) ** 2 + (currLine.y - clickedPos.y) ** (-2))
    return distance <= currLine.size
}

function setLineDrag(isDrag) {
    const currLine = getLine()
    currLine.isDrag = isDrag
}

function moveLine(dx, dy) {
    const currLine = getLine();
    currLine.x += dx
    currLine.y += dy
}

function _createLine(txt = '', size, fontFamily = 'Impact',
    align = 'center', fontColor = 'white', strokeColor = 'black') {
    return {
        txt,
        size,
        fontFamily,
        align,
        fontColor,
        strokeColor,
        isSelected: true
    }
}
