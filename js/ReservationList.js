function createModal() {
    let el = document.createElement('div');
    let res = '\'res-list\'';
    el.id = 'overlay-res-list';
    el.innerHTML = '<div id="overlay-res-list-back" class="overlay-back" onclick="off(' + res + ')"></div>' +
        '                            <div id="res-list-content" class="text_submit add_activity1 pb-2\n' +
        '                            giantclip-bg text-center d-flex flex-column justify-content-between">' +
        '                                <!-- Titulo modal -->' +
        '                                <div class="mb-2">' +
        '                                    <div class="w-12-5 float-right lh-0">' +
        '                                        <img class="cursor-pointer float-right mr-4" style="height: 40px;"' +
        '                                             src="../img/close.svg"\n' +
        '                                             onclick="off(' + res + ')">' +
        '                                    </div>' +
        '                                    <div class="w-75 float-right d-inline-flex mt-4\n' +
        '                                    lh-auto flex-column justify-content-center">' +
        '                                        <h4 class="type-letter">Reservas</h4>' +
        '                                    </div>' +
        '                                </div>' +
        '                            </div>';

    return el;
}

function addResList(array) {
    let content = document.getElementById('res-list-content');
    let list = document.createElement('ul');
    list.classList.add('sub-title-normal-white');
    list.classList.add('list');

    for(let i = 0; i < array.length; i++) {
        let item = document.createElement('li');
        item.innerHTML = array[i].gab + '<br>'
            + '<div class="mb-2">' + array[i].date + '&nbsp&nbsp das &nbsp&nbsp' + array[i].hour + '</div>'
            + '<hr class="m-auto">';

        item.classList.add('mt-2');
        item.classList.add('mb-2');
        list.appendChild(item);
    }

    content.appendChild(list);
}