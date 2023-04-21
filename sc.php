<html lang="pl">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
        />
        <script src="skrypt.js"></script>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <link rel="stylesheet" href="styleodp.css" />
    </head>
    <body>
        <header>
            <h1>Dziękujemy za zakup!</h1>
        </header>
        <main>
            <div class="container">
            <form action="index.html" method="POST">
                <h2>Twój bilet</h2>
                
                <div class="input-group mb-3">
                    <span class="input-group-text">Imię: </span>
                    <div class="form-control" id="imie" name="imie"></div>
                    <span class="input-group-text">Nazwisko: </span>
                    <div class="form-control" id="nazwisko" name="nazwisko"></div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Email: </span>
                    <div class="form-control" id="email" name="email"></div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Przystanek początkowy: </span>
                    <div class="form-control" id="przystaneks" name="przystaneks"></div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Przystanek końcowy: </span>
                    <div class="form-control" id="przystanekk" name="przystanekk"></div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Typ biletu: </span>
                    <div class="form-control" id="bilet" name="bilet"></div>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Cena biletu: </span>
                    <div class="form-control" id="Cena" name="cena"></div>
                </div>
                <input class="btn btn-primary col-md-6" type="submit" value="Powrót do strony głównej" />   
            </form>
        </div>
        </main>
        <footer></footer>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"
        ></script>
        <script src="skrypt.js"></script>
        <script>
            document.getElementById("imie").innerHTML = sessionStorage.getItem('imie');
            document.getElementById("nazwisko").innerHTML = sessionStorage.getItem('nazwisko');
            document.getElementById("email").innerHTML = sessionStorage.getItem('email');
            document.getElementById("przystaneks").innerHTML = sessionStorage.getItem('z');
            document.getElementById("przystanekk").innerHTML = sessionStorage.getItem('do');
            document.getElementById("bilet").innerHTML = sessionStorage.getItem('ulga');
            document.getElementById("Cena").innerHTML = sessionStorage.getItem('cena');
        </script>
        <?php
        #Łączy z bazą danych, wyświetla potwierdzenie zakupu.
        
        $link = @mysqli_connect("localhost","root","","projekt_autobusy");
        if (!$link) {
            echo "Błąd: ".mysqli_connect_error();
        }
        else {
            echo "Łączenie z bazą danych udane!<br>";
        }
        
        $imie = $_POST["imie"];
        $nazwisko = $_POST["nazwisko"];
        $odjazd = $_POST["odjazdd"];
        $bilet = $_POST["bilet"];
        $start = $_POST["przystaneks"];
        $koniec = $_POST["przystanekk"];
        $waluta = $_POST["waluta"];
        
        #Sprawdza odległości między przystankami oraz sprawdza ulgę, i na ich podstawie
        #wylicza cenę biletu.
        
        $g1 = 0;
        $g2 = 0;
        
        if($start == "Centrum") {
            $g1=4;
        }
        elseif ($start== "Rogatka") {
            $g1=3;
        }
        elseif ($start == "Bojszow") {
            $g1=2;
        }
        
        if($koniec == "Rogatka") {
            $g2=3;
        }
        elseif ($koniec == "Bojszow") {
            $g2=2;
        }
        elseif ($koniec == "Stadion") {
            $g2=1;
        }
        
        if($bilet == "ulgowy") {
            $ulga = 2;
        }
        else {
            $ulga = 3;
        }
        $koszt = ($g1 - $g2) * $ulga;
        
        #Tworzy zapytanie i wysyła dane z formularza do bazy danych.
        if($waluta == "PLN") {
            $query = "insert into projekt_autobusy.klienci (imie,nazwisko,bus,godziny,koszt_biletu,waluta) VALUES('".$imie."','".$nazwisko."',1,'".$odjazd."',".$koszt.",'Złotych')";
        }
        else if($waluta == "EUR") {
            $koszt *= 0.21;
            $query = "insert into projekt_autobusy.klienci (imie,nazwisko,bus,godziny,koszt_biletu,waluta) VALUES('".$imie."','".$nazwisko."',1,'".$odjazd."',".$koszt.",'Euro')";
        }
        else if($waluta == "USD") {
            $koszt *= 0.23;
            $query = "insert into projekt_autobusy.klienci (imie,nazwisko,bus,godziny,koszt_biletu,waluta) VALUES('".$imie."','".$nazwisko."',1,'".$odjazd."',".$koszt.",'Dolary')";
        }
        $result = mysqli_query($link, $query);
        echo "Użytkownik: ".$imie." ".$nazwisko." został pomyślnie zarejestrowany!";
        ?>     
      
</body>
</html>



