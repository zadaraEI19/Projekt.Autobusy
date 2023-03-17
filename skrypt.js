function zmiana() {
	document.getElementById("odjazd1").innerHTML = "";
	if (document.forms.formularz.przystaneks.value == "Centrum") {
		document.getElementById("odjazd1").innerHTML =
			'<label for="przystanekk">Przystanek końcowy:</label><select class="form-select" onchange="bilett()" name="przystanekk" id="przystanekk"><option>Rogatka</option><option>Bojszow</option><option>Stadion</option></select>';
		document.getElementById("odjazd2").innerHTML =
			'<label for="odjazd_b" class="form-label">Godzina Odjazdu</label><select class="form-select" name="odjazdd" id="odjazd_c"><option>9:00</option><option>11:00</option><option>14:00</option></select>';
	} else if (document.forms.formularz.przystaneks.value == "Rogatka") {
		document.getElementById("odjazd1").innerHTML =
			'<label for="przystanekk">Przystanek końcowy:</label><select class="form-select" onchange="bilett()" name="przystanekk" id="przystanekk"><option>Bojszow</option><option>Stadion</option></select>';
		document.getElementById("odjazd2").innerHTML =
			'<label for="odjazd_b" class="form-label">Godzina Odjazdu</label><select class="form-select" name="odjazdd" id="odjazd_r"><option>9:15</option><option>11:15</option><option>14:15</option></select>';
	} else if (document.forms.formularz.przystaneks.value == "Bojszow") {
		document.getElementById("odjazd1").innerHTML =
			'<label for="przystanekk">Przystanek końcowy:</label><select class="form-select" onchange="bilett()" name="przystanekk" id="przystanekk"><option>Stadion</option></select>';
		document.getElementById("odjazd2").innerHTML =
			'<label for="odjazd_b" class="form-label">Godzina Odjazdu</label><select class="form-select" name="odjazdd" id="odjazd_b"><option>9:40</option><option>11:40</option><option>14:40</option></select>';
	} else if (document.forms.formularz.przystaneks.value == "Stadion") {
		document.getElementById("odjazd1").innerHTML = "To jest ostatni przystanek!";
		document.getElementById("odjazd2").innerHTML = "";
	}
  }
  
function bilett() {
	g1 = 0;
	g2 = 0;
    transfer = 0;
	if(document.forms.formularz.przystaneks.value == "Centrum") {
		g1=4.00;
	}
	else if (document.forms.formularz.przystaneks.value == "Rogatka") {
    	g1=3.00;
	}
	else if (document.forms.formularz.przystaneks.value == "Bojszow") {
    	g1=2.00;
	}

	if(document.forms.formularz.przystanekk.value == "Rogatka") {
    	g2=3.00;
	}
	else if (document.forms.formularz.przystanekk.value == "Bojszow") {
    	g2=2.00;
	}
	else if (document.forms.formularz.przystanekk.value == "Stadion") {
    	g2=1.00;
	}

	if(document.forms.formularz.bilet.value == "ulgowy") {
    	ulga = 2;
	}
	else {
	    ulga = 3;
	}
	koszt = (g1 - g2) * ulga;
    waluta = document.forms.formularz.waluta.value;
    if(waluta == "PLN") {
        transfer = 1;
        document.forms.formularz.cena.value = (koszt * transfer).toFixed(2) + " zł";  
    }
    else if(waluta == "USD") {
        transfer = 0.23;
        document.forms.formularz.cena.value = (koszt * transfer).toFixed(2) + " $";  
    }
    else if(waluta == "EUR"){
        transfer = 0.21;
        document.forms.formularz.cena.value = (koszt * transfer).toFixed(2) + " €";  
    } 
    console.log(document.forms.formularz.waluta.value);
}

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
	"use strict";
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");
  
	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
  
				form.classList.add("was-validated");
			},
			false
		);
	});
  })();

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