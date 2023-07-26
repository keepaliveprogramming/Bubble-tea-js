function gid(el) {
    return document.getElementById(el);
}
function qSelectorAll(el) {
    return document.querySelectorAll(el);
}
function pokaz_chowaj_div_pod_button(element_open_or_close, el) {
    var element = gid(el);
    var closed = gid(element_open_or_close);
    if (element.classList.contains('hidden')) {
        closed.classList.remove('closed');
    }else {
        closed.classList.add('closed');
    }
    element.classList.toggle('hidden');
}