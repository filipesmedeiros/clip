function createModal() {
    let el = document.createElement('div');
    el.id = 'overlay-confirm-res';
    el.innerHTML = '<div id="overlay-confirm-res-back" class="overlay-back" onclick="off(\'confirm-res\')"></div>' +
        '                            <div class="text_submit add_activity1 pb-2\n' +
        '                            giantclip-bg text-center d-flex flex-column justify-content-between">' +
        '\n' +
        '                                <!-- Titulo modal -->' +
        '                                <div class="mb-2">' +
        '                                    <div class="w-12-5 float-right lh-0">' +
        '                                        <img class="cursor-pointer float-right mr-4" style="height: 40px;"' +
        '                                             src="../img/close.svg"\n' +
        '                                             onclick="off(\'confirm-res\')">' +
        '                                    </div>' +
        '                                    <div class="w-75 float-right d-inline-flex mt-4\n' +
        '                                    lh-auto flex-column justify-content-center">' +
        '                                        <h4 class="type-letter">Reservas</h4>' +
        '                                    </div>' +
        '                                </div>'
        '                            </div>'

    return el;
}

function addResList() {
    
}