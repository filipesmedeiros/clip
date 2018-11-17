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

let activities_array = [];

function logIn() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if (username === USERNAME && password === PASSWORD)
        window.location.href = "pages/homepage.html";
    else
        alert("Not correct");
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

function close_submit() {
    document.getElementById("confirm_submit").style.display = "none";
}

function submit_reservation() {

    let selected_date = document.getElementById("date_input").value;

    document.getElementById("confirm_submit").style.display = "block";

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
    if (name === "ICL")
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
    var d = c_date.getFullYear() + "-" + (c_date.getMonth() + 1) + "-" + c_date.getDate();
    var t = document.getElementById("titulo").value;
    var f = document.getElementById("exampleFormControlFile1").value;

    let apontamento = {cadeira: c, data: d, titulo: t, ficheiro: f};

    apontamentos_array.push(apontamento);

    update_badge(c);
}

window.onkeyup = function (e) {
    let passwordbox = document.getElementById('passwordInput');
    let focus = document.activeElement === passwordbox;
    if(!focus)
        return;

    if (e.keyCode == 13) {
        logIn();
    }
}

//////////////////////////////////////////////////////////

// SCHEDULE

//////////////////////////////////////////////////////////


window.onload = onload;

function onload() {
    addClass(9, 'col-2f', 2, 'IPM')
}

function addClass(time, day, duration, name, room, shift) {
    let numActInTheDay = 0;

    for(let i = 0; i < activities_array.length; i++) {
        if(activities_array[i].day == day) {
            numActInTheDay++;
            for(let j = time; j < time + duration; j++)
                if(activities_array[i].hours.includes(j)) {
                    alert('Atividades sobreposta com ' + activities_array[i].actName + ', escolhe horas diferentes');
                    return;
                }
        }
    }

    let daycol = document.getElementById(day);

    let children = daycol.children;

    let blocks = '';

    for (let i = 0; i < duration; i++) {
        console.log(children[time - 7 + i]);
        blocks += children[time - 7 + i + numActInTheDay].id + ' ';
        children[time - 7 + i + numActInTheDay].style.display = "none";
        console.log(children[time - 7 + i]);
    }

    let el = document.createElement("div");
    el.classList.add("activity-cell");
    el.id = name;
    el.setAttribute('data-id', blocks);
    el.style.height = (45 * duration) + "px";
    el.onclick = deleteActivityButton;

    el.innerHTML = '<span class="act-name" style="margin-top:' + (20 * duration) + 'px">' + name + '</span>';



    el.style.backgroundColor = color;

    daycol.insertBefore(el, children[time - 7]);

    let hourarray = [];
    for(let i = time; i < time + duration; i++)
        hourarray.push(i);

    activities_array.push({'actName': name, 'day': day, 'hours': hourarray});
    console.log(activities_array);

    off('add-act');
}

function addActivityGetValues() {
    let ihour = document.getElementById('i-act-hour').value;
    let fhour = document.getElementById('f-act-hour').value;

    if(+ihour >= +fhour) {
        alert("Horas inválidas!");
        return;
    }

    let duration = +fhour - +ihour;

    let name = document.getElementById('act-title').value;

    let dayBtns = document.getElementsByClassName('day-btn');

    let daysOne = false;
    for(let i = 0; i < dayBtns.length; i++)
        if(dayBtns[i].getAttribute('data-id') === 'true') {
            daysOne = true;
            addActivity(+ihour, 'col'.concat(dayBtns[i].id.substr(3, dayBtns[i].id.length)), duration, name, '#00c5ff');
        }

    document.getElementById('act-title').value = '';
    document.getElementById('i-act-hour').value = 8;
    document.getElementById('f-act-hour').value = 9;

    if(!daysOne)
        alert("Tens de selecionar pelo menos um dia!")
}

function addActivity(time, day, duration, name, color) {
    let numActInTheDay = 0;

    for(let i = 0; i < activities_array.length; i++) {
        if(activities_array[i].day == day) {
            numActInTheDay++;
            for(let j = time; j < time + duration; j++)
                if(activities_array[i].hours.includes(j)) {
                    alert('Atividades sobreposta com ' + activities_array[i].actName + ', escolhe horas diferentes');
                    return;
                }
        }
    }

    let daycol = document.getElementById(day);

    let children = daycol.children;

    let blocks = '';

    for (let i = 0; i < duration; i++) {
        console.log(children[time - 7 + i]);
        blocks += children[time - 7 + i + numActInTheDay].id + ' ';
        children[time - 7 + i + numActInTheDay].style.display = "none";
        console.log(children[time - 7 + i]);
    }

    let el = document.createElement("div");
    el.classList.add("activity-cell");
    el.id = name;
    el.setAttribute('data-id', blocks);
    el.style.height = (45 * duration) + "px";
    el.onclick = deleteActivityButton;

    el.innerHTML = '<span class="act-name" style="margin-top:' + (20 * duration) + 'px">' + name + '</span>';
    el.style.backgroundColor = color;

    daycol.insertBefore(el, children[time - 7]);

    let hourarray = [];
    for(let i = time; i < time + duration; i++)
        hourarray.push(i);

    activities_array.push({'actName': name, 'day': day, 'hours': hourarray});
    console.log(activities_array);

    off('add-act');
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}

var currentActivity = null;

function deleteActivityButton(event) {
    currentActivity = event.target;
    if(currentActivity.tagName === 'SPAN')
        currentActivity = currentActivity.parentElement;
    document.getElementById('delete-act-btn').classList.remove('display-none');
}

function deleteAct() {
    let blocks = currentActivity.getAttribute('data-id').split(' ');

    for(let i = 0; i < blocks.length; i++) {
        if(blocks[i] !== ' ' && blocks[i] !== '')
            document.getElementById(blocks[i]).style.display = 'block';
    }

    for(let i = 0; i < activities_array.length; i++)
        if(activities_array[i].actName == currentActivity.id)
            activities_array.splice(i, 1);

    currentActivity.remove();

    document.getElementById('delete-act-btn').classList.add('display-none');
}

function highlightDay(day) {
    if (day.getAttribute('data-id') === 'false') {
        day.style.backgroundColor = "#FFFFFF";
        day.style.color = "#032237";
        day.style.fontFamily = "OverpassBold";

        day.setAttribute('data-id', 'true');
    } else {
        day.style.backgroundColor = "#032237";
        day.style.color = "#FFFFFF";
        day.style.fontFamily = "Overpass";

        day.setAttribute('data-id', 'false');
    }
}





