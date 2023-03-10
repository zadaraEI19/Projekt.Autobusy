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
function lettersOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode :
       ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 65 || charCode > 90) &&
       (charCode < 97 || charCode > 122)) {
       return false;
    }
    return true;
}
function emaill(){
    if(document.forms.formularz.email.value.length < 5) {
      document.getElementById("mail").innerHTML = "Zbyt krótki!";
      document.getElementById("mail").style.color = "red";
      return false;
    }
  else if(document.forms.formularz.email.value.includes(".")==false && document.forms.formularz.email.value.includes("@")==false) {
    document.getElementById("mail").innerHTML = "Nie ma kropki ani @!";
    document.getElementById("mail").style.color = "red";
    return false;
  }
  else if(document.forms.formularz.email.value.includes("@")==false) {
    document.getElementById("mail").innerHTML = "Nie ma znaku @";
    document.getElementById("mail").style.color = "red";
    return false;
  }
  else if(document.forms.formularz.email.value.includes(".")==false) {
    document.getElementById("mail").innerHTML = "Nie ma kropki";
    document.getElementById("mail").style.color = "red";
    return false;
  }
  else {
    document.getElementById("mail").innerHTML = "Wszystko git!";
    document.getElementById("mail").style.color = "green";
    return true;
  }
}
function nazwiskoo() {
    if(document.forms.formularz.nazwisko.value.length == 0) {
      document.getElementById("naz").innerHTML = "Wpisz nazwisko";
      document.getElementById("naz").style.color = "red";
      return false;
    }
    else if(document.forms.formularz.nazwisko.value.length < 2) {
      document.getElementById("naz").innerHTML = "Zbyt krótkie!";
      document.getElementById("naz").style.color = "red";
      return false;
    }
    else {
      document.getElementById("naz").innerHTML = "Wszystko git";
      document.getElementById("naz").style.color = "green";
      return true;
    }
  }
  function imiee() {
    if(document.forms.formularz.imie.value.length == 0) {
      document.getElementById("imi").innerHTML = "Wpisz imię";
      document.getElementById("imi").style.color = "red";
      return false;
    }
    else if(document.forms.formularz.imie.value.length < 3) {
      document.getElementById("imi").innerHTML = "Zbyt krótkie!";
      document.getElementById("imi").style.color = "red";
      return false;
    }
    else {
      document.getElementById("imi").innerHTML = "Wszystko git";
      document.getElementById("imi").style.color = "green";
      return true;
    }
  }
  
