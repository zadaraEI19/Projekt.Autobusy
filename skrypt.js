function zmiana() {
    document.getElementById("odjazd1").innerHTML = "";
    if(document.forms.formularz.przystaneks.value == "Centrum") {
        document.getElementById("odjazd1").innerHTML = '<label for="przystanekk">Przystanek końcowy:</label><select onchange="bilet()" name="przystanekk" id="przystaneks"><option>Rogatka</option><option>Bojszow</option><option>Stadion</option></select>';
        document.getElementById("odjazd2").innerHTML = '<select name="odjazdd" id="odjazd_c"><option>9:00</option><option>11:00</option><option>14:00</option></select>';
    }
    else if(document.forms.formularz.przystaneks.value == "Rogatka") {
        document.getElementById("odjazd1").innerHTML = '<label for="przystanekk">Przystanek końcowy:</label><select onchange="bilet()" name="przystanekk" id="przystaneks"><option>Bojszow</option><option>Stadion</option></select>';
        document.getElementById("odjazd2").innerHTML = '<select name="odjazdd" id="odjazd_r"><option>9:15</option><option>11:15</option><option>14:15</option></select>';
    }
    else if(document.forms.formularz.przystaneks.value == "Bojszow") {
        document.getElementById("odjazd1").innerHTML = '<label for="przystanekk">Przystanek końcowy:</label><select onchange="bilet()" name="przystanekk" id="przystaneks"><option>Stadion</option></select>';
        document.getElementById("odjazd2").innerHTML = '<select name="odjazdd" id="odjazd_b"><option>9:40</option><option>11:40</option><option>14:40</option></select>';
    }
    else if(document.forms.formularz.przystaneks.value == "Stadion") {
        document.getElementById("odjazd1").innerHTML = 'To jest ostatni przystanek!';
        document.getElementById("odjazd2").innerHTML = "";
    }
}

