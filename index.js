let buttonOpen = document.querySelector('.registration__button');
let buttonClose = document.querySelector('.close__button');
let buttonSave = document.querySelector('.button__save');
let body = document.querySelector('body');
let modalOver = document.querySelector('.modal__over');
let regModal = document.querySelector('.modal');
buttonOpen.addEventListener('click', function (e) {
    regModal.classList.toggle('visible')
    modalOver.classList.toggle('visible')
    body.classList.toggle('shadow')
})


buttonSave.addEventListener('click', function (e) {
    regModal.classList.toggle('visible')
    modalOver.classList.toggle('visible')
    body.classList.toggle('shadow')
})
buttonClose.addEventListener('click', function (e) {
    regModal.classList.toggle('visible')
    modalOver.classList.toggle('visible')
    body.classList.toggle('shadow')
})

$("img.img__like").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});
