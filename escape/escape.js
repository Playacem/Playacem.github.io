const $in = $('#in')
$in.on('click keypress cut paste keyup', escape)
$('#btnSelectRes').click(selectResult)
$('#btnForceUpdate').click(forceUpdate)
/** @type string[] */
let markdownSpecialChars = '\\`*_{}[]()#+-.!'.split('')

function escape() {
    /** @type string */
    let content = $(this).val()
    let split = content.split('')

    let escaped = split.map(function (c) {
        return markdownSpecialChars.indexOf(c) >= 0 ? '\\' + c : c
    }).reduce(function (prev, curr) {
        return prev + curr
    }, '')

    $('#out').text(escaped)
}

function selectResult() {
    //force escaping
    $in.click()
    $('#out').select()
    return false
}

function forceUpdate() {
    $in.click()
    return false
}
