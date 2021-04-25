$('#in').on('click keypress cut paste keyup', escape);
$('#btnSelectRes').click(selectResult);
$('#btnForceUpdate').click(forceUpdate);
let markdownSpecialChars = '\\`*_{}[]()#+-.!'.split('');
function escape() {
    let content = $(this).val();
    let split = content.split('');
    let array = [];

    $.each(split, function (i, obj) {
        let res = markdownSpecialChars.indexOf(obj) >= 0 ? '\\' + obj : obj;
        array.push(res);
    });

    let escaped = array.join('');
    $('#out').text(escaped);
}

function selectResult() {
    //force escaping
    $('#in').click();
    $('#out').select();
    return false;
}

function forceUpdate() {
    $('#in').click();
    return false;
}
