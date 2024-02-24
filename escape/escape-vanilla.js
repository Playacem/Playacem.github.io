/**
 * @param {HTMLElement | string} element
 * @param {string} events
 * @param {function} listener
 */
function batchRegister(element, events, listener) {
    /** @type HTMLElement */
    let el = typeof element === 'string' ? document.querySelector(element) : element
    const list = events.split(' ')
    for(let e of list) {
        el.addEventListener(e, listener)
    }
}

/** @type {HTMLTextAreaElement} */
const $in = document.querySelector('#in')
/** @type {HTMLTextAreaElement} */
const $out = document.querySelector('#out')
/** @type string[] */
let markdownSpecialChars = '\\`*_{}[]()#+-.!'.split('')

batchRegister($in, 'click keypress cut paste keyup', escape)
batchRegister('#btnSelectRes', 'click', selectResult)
batchRegister('#btnForceUpdate', 'click', forceUpdate)

/**
 * @param {Event} event
 */
function escape(event) {
    /** @type string[] */
    let chars = event.target.value.split('')

    $out.innerText = chars.map(function (c) {
        return markdownSpecialChars.indexOf(c) >= 0 ? '\\' + c : c
    }).reduce(function (prev, curr) {
        return prev + curr
    }, '')
}

function selectResult() {
    //force escaping
    $in.click()
    $out.focus()
    $out.select()
    return false
}

function forceUpdate() {
    $in.click()
    return false
}
