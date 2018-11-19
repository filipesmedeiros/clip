const USERNAME = 'f.medeiros';
const PASSWORD = 'password123';

var selected = false;
var count_gab_available = 0;
var hour_seleted;
var office_selected;
var available = true;

var temp_array = ["Gabinete de Trabalho de Grupo: 2.1", "Gabinete de Trabalho de Grupo: 3.1"];
var temp_array_availability = ["Available", "No-Available"];

var apontamentos_array = [];

var apontamentos_recentes_array = [];
var maxSize = 5;
var objectURL;

let activities_array = [];

function logIn() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if (username === USERNAME && password === PASSWORD)
        window.location.href = "pages/homepage.html";
    else
        alert("Not correct");
}

function logOut() {
    window.location.href = "../index.html";
}

function on(overlay) {
    document.getElementById("overlay-" + overlay).style.display = "inline";
}

function off(overlay) {
    document.getElementById("overlay-" + overlay).style.display = "none";
}

function auditory() {
    if (!selected) {
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else {
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected = false;
    }
}

function gab_group() {
    if (!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        document.getElementById("gab_group_form").style.display = "block";
        selected = true;
    }
    else {
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";

        document.getElementById("gab_group_form").style.display = "none";
        document.getElementById("info_availability").style.display = "none";
        document.getElementById("gab_group_availability").style.display = "none";
        document.getElementById("name_gab_selected").innerHTML = "";
        document.getElementById('date_input').value = "";


        for (let i = 1; i < 5; i++) {

            document.getElementById("btn_" + i).style.backgroundColor = "#032237";
            document.getElementById("option_" + i).style.color = "white";
            document.getElementById("option_" + i).style.fontFamily = "Overpass";

        }


        selected = false;
    }
}

function gab_ind() {
    if (!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else {
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected = false;
    }
}

function lab_des_ino() {
    if (!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else {
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected = false;
    }
}

function class_mult() {
    if (!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else {
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected = false;
    }
}

function class_agora() {
    if (!selected) {
        document.getElementById("biblioteca").style.display = "none";
        selected = true;
    }
    else {
        document.getElementById("biblioteca").style.display = "block";
        selected = false;
    }
}

function onDateChange() {

    for (let i = 1; i < 5; i++) {
        document.getElementById("btn_" + i).style.backgroundColor = "#032237";
        document.getElementById("option_" + i).style.color = "white";
        document.getElementById("option_" + i).style.fontFamily = "Overpass";
    }
}

function confirmDateHourToSelect(option) {

    var selected_date = document.getElementById("date_input").value;
    hour_seleted = option;
    var c_date = new Date();
    var current_date = c_date.getFullYear() + "-" + (c_date.getMonth() + 1) + "-" + c_date.getDate();

    if (selected_date >= current_date && hour_seleted != null) {
        document.getElementById("name_invalidDate").style.display = "none";
        document.getElementById("img_invalidDate").style.display = "none";
        availability(option);
    }
    else {
        document.getElementById("info_availability").style.display = "none";
        document.getElementById("name_invalidDate").style.display = "inline-block";
        document.getElementById("img_invalidDate").style.display = "inline-block";
        document.getElementById("name_invalidDate").innerHTML = "Data inválida. Por favor selecione outra data.";
        document.getElementById("gab_group_availability").style.display = "none";

    }
}

function availability(option) {

    document.getElementById("info_availability").style.display = "block";
    document.getElementById("gab_group_availability").style.display = "block";

    let table_availability = document.getElementById("table_availability");

    table_availability.innerHTML = "";
    document.getElementById("name_gab_selected").innerHTML = "";
    document.getElementById("btn_submit").style.display = "none";

    for (let i = 1; i < 5; i++) {
        document.getElementById("btn_" + i).style.backgroundColor = "#032237";
        document.getElementById("option_" + i).style.color = "white";
        document.getElementById("option_" + i).style.fontFamily = "Overpass";
    }

    document.getElementById("btn_" + option).style.backgroundColor = "#FFFFFF";
    document.getElementById("option_" + option).style.color = "#032237";
    document.getElementById("option_" + option).style.fontFamily = "OverpassBold";

    count_gab_available = temp_array.length;


    for (let i = 0; i < count_gab_available; i++) {

        let row = table_availability.insertRow(-1);
        let cell_0 = row.insertCell(0);
        let cell_1 = row.insertCell(1);

        if (temp_array_availability[i] === "Available")
            cell_0.outerHTML = "<td bgcolor='green'></td>";

        if (temp_array_availability[i] === "No-Available")
            cell_0.outerHTML = "<td bgcolor='red'></td>";

        cell_1.outerHTML = '<a class="finger-pointer bold_none" id="gab_selected_' + i + '" onclick="select_availability(\'' + i + '\')">' + temp_array[i] + '</a>';
    }
}

function select_availability(num_office) {
    var selected_date = document.getElementById("date_input").value;

    if (selected_date !== "") {
        office_selected = temp_array[num_office];
        for (let i = 0; i < count_gab_available; i++) {

            if (i !== num_office) {
                document.getElementById("gab_selected_" + i).style.color = "#032237";
                document.getElementById("gab_selected_" + i).style.backgroundColor = "#EFF0EF";
            }
        }

        document.getElementById("btn_submit").style.display = "block";
        document.getElementById("gab_selected").style.display = "block";
        document.getElementById("name_gab_selected").innerHTML = office_selected;
        document.getElementById("gab_selected_" + num_office).style.color = "white";
        document.getElementById("gab_selected_" + num_office).style.backgroundColor = "#032237";

        if (temp_array_availability[num_office] !== "Available") {
            document.getElementById("fa_show").style.display = "block";
            document.getElementById("attention_show").style.display = "block";
            document.getElementById("hr_show").style.display = "block";
        }
        else {
            document.getElementById("fa_show").style.display = "none";
            document.getElementById("attention_show").style.display = "none";
            document.getElementById("hr_show").style.display = "none";
        }

    }
}

function submit_reservation() {

    let selected_date = document.getElementById("date_input").value;

    on("confirm-res");

    let hour_output = "";

    if (hour_seleted === 1)
        hour_output = "9:00 - 12:00";
    if (hour_seleted === 2)
        hour_output = "12:00 - 14:00";
    if (hour_seleted === 3)
        hour_output = "14:00 - 17:00";
    if (hour_seleted === 4)
        hour_output = "17:00 - 20:00";

    document.getElementById("date_output").innerHTML = selected_date;
    document.getElementById("hour_output").innerHTML = hour_output;
    document.getElementById("gab_output").innerHTML = office_selected;

}

function update_badge(id) {

    let id_output, number;

    if (id === "AA")
        id_output = "badge_AA";
    if (id === "IPM")
        id_output = "badge_IPM";
    if (id === "IIO")
        id_output = "badge_IIO";
    if (id === "ICL")
        id_output = "badge_ICL";
    if (id === "Outra")
        id_output = "badge_Outra";

    let doc = document.getElementById(id_output);

    if (doc != null) {
        number = doc.innerText;
        doc.innerText = (parseInt(number) + 1);
    }
}

function changeDropdownName(name) {

    let name_output = "";

    if (name === 1)
        name_output = "AA";
    if (name === 2)
        name_output = "IPM";
    if (name === 3)
        name_output = "IIO";
    if (name === 4)
        name_output = "ICL";
    if (name === 5)
        name_output = "Outra";

    document.getElementById("dropdownCadeiras").innerText = name_output;
}

function newApontamento() {

    var c = document.getElementById("dropdownCadeiras").innerText;
    var c_date = new Date();
    var d = c_date.getDate() + "/" + (c_date.getMonth() + 1) + "/" + c_date.getFullYear();
    var t = document.getElementById("titulo").value;
    var f = document.getElementById("exampleFormControlFile1").value;

    let apontamento = {cadeira: c, data: d, titulo: t, ficheiro: f};
    let url = window.URL.createObjectURL(objectURL);

    apontamentos_array.push(apontamento);
    var id_list = document.getElementById("list_" + c);
    var new_apontamento = document.createElement("li");

    new_apontamento.innerHTML = ' <a href="' + url + '" class="list-group-item">' +
        '<div class="row"><div class="col-lg-8 col-md-8 d-inline-block text-left">' +
        '<span class="sub-title-normal">' + apontamento.titulo + '</span>' +
        '</div>' +
        '<div class="col-lg-2 col-md-2 d-inline-block text-right">' +
        '<span class="small-title">' + apontamento.data + '</span>' +
        '</div>' +
        '<div class="col-lg-2 col-md-2 d-inline-block text-right">' +
        '<i class="fas fa-angle-right" style="font-size:2rem; color:#032237;"></i>' +
        '</div>' +
        '</div>' +
        '</a> ';

    id_list.appendChild(new_apontamento);

    let id_list_recentes = document.getElementById("list_recentes");
    apontamentos_recentes_array.splice(id_list_recentes.children.length % maxSize, 0, apontamento);
    let new_recent = document.createElement("li");

    while (id_list_recentes.children.length >= 5) {
        console.log(id_list_recentes.lastChild);
        id_list_recentes.removeChild(id_list_recentes.lastChild);
        apontamentos_recentes_array.pop();
    }
    let vcolor = "";
    if (id_list_recentes.children.length % 2 == 1)
        vcolor = "secondary-bg";

    new_recent.innerHTML = '  <a href="\' + url + \'"class="list-group-item "' + vcolor + '>\n' +
        '<div class="row">\n' +
        '<div class="col-lg-6 col-md-6 d-inline-block text-left">\n' +
        '<span class="sub-title-normal">' + apontamento.titulo + '</span>\n' +
        '</div>\n' +
        '<div class="col-lg-2 col-md-2 d-inline-block text-right">\n' +
        '<span class="sub-title-normal">' + apontamento.cadeira + '</span>\n' +
        '</div>\n' +
        '<div class="col-lg-2 col-md-2 d-inline-block text-right">\n' +
        '<span class="small-title">' + apontamento.data + '</span>\n' +
        '</div>\n' +
        '<div class="col-lg-2 col-md-2 d-inline-block text-right">\n' +
        '<i class="fas fa-angle-right" style="font-size:2rem; color:#032237;"></i>\n' +
        '</div>\n' +
        '</div>\n' +
        '</a>';

    id_list_recentes.insertBefore(new_recent, id_list_recentes.firstChild);

    update_badge(c);

    document.getElementById("dropdownCadeiras").innerText = "Selecionar Cadeira";
    document.getElementById("titulo").value = "";
    document.getElementById("exampleFormControlFile1").value = "";

    off();
    document.getElementById("text_submit").style.display = "none";

}

function saveFiles(input) {
    objectURL = input.files.item(0);
}

function myFunction() {

    let input, filter, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();

    let ul = [];

    let ul_IIO = document.getElementById("list_IIO");
    ul.push(ul_IIO);
    let ul_ICL = document.getElementById("list_ICL");
    ul.push(ul_ICL);
    let ul_AA = document.getElementById("list_AA");
    ul.push(ul_AA);
    let ul_IPM = document.getElementById("list_IPM");
    ul.push(ul_IPM);

    for (let j = 0; j < ul.length; j++) {

        li = ul[j].getElementsByTagName("li");

        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}

function countCaracteres() {

    let textsize = document.getElementById("ambito").value.length;

    document.getElementById("counter_carac").innerText = textsize;
}

window.onkeyup = function (e) {
    let passwordbox = document.getElementById('passwordInput');
    let focus = document.activeElement === passwordbox;
    if (!focus)
        return;

    if (e.keyCode == 13) {
        logIn();
    }
}

//////////////////////////////////////////////////////////

// SCHEDULE

//////////////////////////////////////////////////////////

function selectSection(id, id_font) {

    console.log(id + " " + id_font);

    if (id !== "" && id_font !== "") {

        let option = document.getElementById(id);
        let font = document.getElementById(id_font);

        let fontSel = document.getElementsByClassName('font-options-selected');
        for (let i = 0; i < fontSel.length; i++)
            fontSel[i].classList.remove('font-options-selected');

        let sel = document.getElementsByClassName('option-selected');
        for (let i = 0; i < sel.length; i++)
            sel[i].classList.remove('option-selected');

        font.classList.add('font-options-selected');
        option.classList.add('option-selected');

        localStorage.setItem('selected', id);
        localStorage.setItem('font', id_font);

    }
}

function addClass(time, day, duration, name, room, shift, id, color) {
    let numActInTheDay = 0;

    for (let i = 0; i < activities_array.length; i++) {
        if (activities_array[i].day == day) {
            numActInTheDay++;
            for (let j = time; j < time + duration; j++)
                if (activities_array[i].hours.includes(j)) {
                    alert('Atividades sobreposta com ' + activities_array[i].actName + ', escolhe horas diferentes');
                    return;
                }
        }
    }

    let daycol = document.getElementById(day);

    let children = daycol.children;

    let blocks = '';

    for (let i = 0; i < duration; i++) {
        blocks += children[time - 7 + i + numActInTheDay].id + ' ';
        children[time - 7 + i + numActInTheDay].style.display = "none";
    }

    let el = document.createElement("div");
    el.classList.add("class-cell");
    el.id = name + id;
    el.setAttribute('data-id', blocks);
    el.style.height = (45 * duration) + "px";

    el.innerHTML = '<span class="class-name" style="margin-top:' + (20 * duration) + 'px">'
        + name + '</span><p class="class-shift">' + shift + '<br>' + room + '</p>';
    el.style.backgroundColor = color;

    daycol.insertBefore(el, children[time - 7 + numActInTheDay]);

    let hourarray = [];
    for (let i = time; i < time + duration; i++)
        hourarray.push(i);

    activities_array.push({'actName': name, 'day': day, 'hours': hourarray});

    off('add-act');
}

let color = '#00c5ff';

function changeColor(event) {
    color = '#' + event.target.value;

    console.log(color);
}

function addActivityGetValues() {
    let ihour = document.getElementById('i-act-hour').value;
    let fhour = document.getElementById('f-act-hour').value;

    if (+ihour >= +fhour) {
        alert("Horas inválidas!");
        return;
    }

    let duration = +fhour - +ihour;

    let name = document.getElementById('act-title').value;

    let dayBtns = document.getElementsByClassName('day-btn');

    let daysOne = false;
    for (let i = 0; i < dayBtns.length; i++)
        if (dayBtns[i].getAttribute('data-id') === 'true') {
            daysOne = true;
            addActivity(+ihour, 'col'.concat(dayBtns[i].id.substr(3, dayBtns[i].id.length)), duration, name, color);
        }

    document.getElementById('act-title').value = '';
    document.getElementById('i-act-hour').value = 8;
    document.getElementById('f-act-hour').value = 9;

    color = '#00c5ff';
    document.getElementById("color-select").value = '#00c5ff';

    if (!daysOne)
        alert("Tens de selecionar pelo menos um dia!")
}

function addActivity(time, day, duration, name, color) {
    let numActInTheDay = 0;

    for (let i = 0; i < activities_array.length; i++) {
        if (activities_array[i].day == day) {
            if (activities_array[i].hours[0] < time)
                numActInTheDay++;
            for (let j = time; j < time + duration; j++)
                if (activities_array[i].hours.includes(j)) {
                    alert('Atividades sobreposta com ' + activities_array[i].actName + ', escolhe horas diferentes');
                    return;
                }
        }
    }

    let daycol = document.getElementById(day);

    let children = daycol.children;

    let blocks = '';

    for (let i = 0; i < duration; i++) {
        blocks += children[time - 7 + i + numActInTheDay].id + ' ';
        children[time - 7 + i + numActInTheDay].style.display = "none";
    }

    let el = document.createElement("div");
    el.classList.add("activity-cell");
    el.id = name;
    el.setAttribute('data-id', blocks);
    el.style.height = (45 * duration) + "px";
    el.onclick = deleteActivityButton;

    el.innerHTML = '<span class="act-name" style="margin-top:' + (20 * duration) + 'px">' + name + '</span>';
    el.style.backgroundColor = color;

    if (color < '#888888')
        el.style.color = 'white';

    daycol.insertBefore(el, children[time - 7 + numActInTheDay]);

    let hourarray = [];
    for (let i = time; i < time + duration; i++)
        hourarray.push(i);

    activities_array.push({'actName': name, 'day': day, 'hours': hourarray});

    off('add-act');
}

Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}

var currentActivity = null;

function deleteActivityButton(event) {
    currentActivity = event.target;
    if (currentActivity.tagName === 'SPAN')
        currentActivity = currentActivity.parentElement;
    document.getElementById('delete-act-btn').classList.remove('display-none');
}

function deleteAct() {
    let blocks = currentActivity.getAttribute('data-id').split(' ');

    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i] !== ' ' && blocks[i] !== '')
            document.getElementById(blocks[i]).style.display = 'block';
    }

    for (let i = 0; i < activities_array.length; i++)
        if (activities_array[i].actName == currentActivity.id)
            activities_array.splice(i, 1);

    currentActivity.remove();

    document.getElementById('delete-act-btn').classList.add('display-none');
}

function highlightDay(day) {
    if (day.getAttribute('data-id') === 'false') {
        day.style.backgroundColor = "#FFFFFF";

        day.style.color = "#032237";
        day.firstChild.nextSibling.style.color = "#032237";
        day.firstChild.nextSibling.style.fontFamily = "OverpassBold";

        day.setAttribute('data-id', 'true');
    } else {
        day.style.backgroundColor = "#032237";
        day.firstChild.color = "#FFFFFF";
        day.firstChild.nextSibling.style.color = "#FFFFFF";
        day.firstChild.nextSibling.style.fontFamily = "Overpass";

        day.setAttribute('data-id', 'false');
    }
}

window.onload = onload();

function onload() {

    let selectedOption = localStorage.getItem('selected');
    let optionFont = localStorage.getItem('font');
    if (selectedOption != undefined && optionFont != undefined)
        selectSection(selectedOption, optionFont);

    if (!window.location.href.includes('homepage'))
        return;

    addClass(9, 'col-2f', 2, 'IPM', 'T1', 'Ed.4/203', '1', '#00375b');
    addClass(14, 'col-2f', 2, 'IIO', 'T2', 'Ed.7/1D', '1', '#00375b');
    addClass(16, 'col-2f', 2, 'IPM', 'P2', 'Ed.2/120', '2', '#00578a');
    addClass(9, 'col-3f', 2, 'ICL', 'T1', 'Ed.2/128', '1', '#00375b');
    addClass(11, 'col-3f', 2, 'ICL', 'P1', 'Ed.2/121', '2', '#00578a');
    addClass(14, 'col-3f', 2, 'IIO', 'P6', 'Ed.7/1.4', '2', '#00578a');
    addClass(16, 'col-3f', 2, 'AA', 'T1', 'Ed.2/128', '1', '#00375b');
    addClass(9, 'col-5f', 2, 'AA', 'P6', 'Ed.2/120', '2', '#00578a');
}

