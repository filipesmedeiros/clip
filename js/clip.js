const USERNAME = 'f.medeiros';
const PASSWORD = 'password123';

var selected = false;
var count_gab_available = 0;
var hour_seleted;
var office_selected;
var available = true;

var temp_array = ["Gabinete de Trabalho de Grupo: 2.1", "Gabinete de Trabalho de Grupo: 3.1"];
var temp_array_availability =["Available", "No-Available"];


function logIn() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if(username === USERNAME && password === PASSWORD) {
        console.log("Logged in");
        window.location.href = "pages/homepage.html";
    } else
        alert("Not correct");
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function auditory() {
    if(!selected) {
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else{
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected= false;
    }
}

function gab_group() {
    if(!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        document.getElementById("gab_group_form").style.display = "block";
        selected = true;
    }
    else{
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";

        document.getElementById("gab_group_form").style.display = "none";
        document.getElementById("info_availability").style.display = "none";
        document.getElementById("gab_group_availability").style.display = "none";
        document.getElementById("name_gab_selected").innerHTML= "";
        document.getElementById('date_input').value = "";


        for(let i = 1; i<5; i++) {

            document.getElementById("btn_" + i).style.backgroundColor = "#032237";
            document.getElementById("option_" + i).style.color = "white";
            document.getElementById("option_" + i).style.fontFamily = "Overpass";

        }


        selected= false;
    }
}

function gab_ind() {
    if(!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else{
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected= false;
    }
}

function lab_des_ino() {
    if(!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("class_mult").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else{
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("class_mult").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected= false;
    }
}

function class_mult() {
    if(!selected) {
        document.getElementById("auditory").style.display = "none";
        document.getElementById("gab_ind").style.display = "none";
        document.getElementById("gab_group").style.display = "none";
        document.getElementById("lab_des_ino").style.display = "none";
        document.getElementById("comunication").style.display = "none";
        selected = true;
    }
    else{
        document.getElementById("auditory").style.display = "block";
        document.getElementById("gab_ind").style.display = "block";
        document.getElementById("gab_group").style.display = "block";
        document.getElementById("lab_des_ino").style.display = "block";
        document.getElementById("comunication").style.display = "block";
        selected= false;
    }
}

function class_agora() {
    if(!selected) {
        document.getElementById("biblioteca").style.display = "none";
        selected=true;
    }
    else{
        document.getElementById("biblioteca").style.display = "block";
        selected= false;
    }
}

function availability(option) {

    hour_seleted=option;

    document.getElementById("info_availability").style.display = "block";
    document.getElementById("gab_group_availability").style.display = "block";
    var selected_date = document.getElementById("date_input").value;

    let table_availability = document.getElementById("table_availability");

    table_availability.innerHTML= "";
    document.getElementById("name_gab_selected").innerHTML= "";
    document.getElementById("btn_submit").style.display = "none";

    for(let i = 1; i<5; i++) {
        document.getElementById("btn_" + i).style.backgroundColor = "#032237";
        document.getElementById("option_" + i).style.color = "white";
        document.getElementById("option_" + i).style.fontFamily = "Overpass";
    }

    document.getElementById("btn_"+ option).style.backgroundColor="#FFFFFF";
    document.getElementById("option_" + option).style.color="#032237";
    document.getElementById("option_" + option).style.fontFamily="OverpassBold";

    count_gab_available = temp_array.length;


    for(let i = 0; i < count_gab_available ; i++) {

        let row = table_availability.insertRow(-1);
        let cell_0 = row.insertCell(0);
        let cell_1 = row.insertCell(1);

        if(temp_array_availability[i] === "Available")
            cell_0.outerHTML = "<td bgcolor='green'></td>";

        if(temp_array_availability[i] === "No-Available")
            cell_0.outerHTML = "<td bgcolor='red'></td>" ;

        cell_1.outerHTML = '<a class="finger-pointer bold_none" id="gab_selected_'+i+'" onclick="select_availability(\''+i+'\')">'+temp_array[i]+'</a>';
    }

}

function select_availability(num_office){
    var selected_date = document.getElementById("date_input").value;

    if(selected_date !== "") {
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

function close_submit(){
    document.getElementById("confirm_submit").style.display = "none";
}

function submit_reservation(){

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

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   var passwordbox = document.getElementById('passwordInput');
	var focus = document.activeElement === passwordbox;

	console.log(key);
	console.log(focus);

   if (key == 13 && focus) {
   console.log("???");
	logIn();
   }
}

