<?php
$link = @mysqli_connect("localhost","root","","test");
if (!$link) {
    echo "Błąd: ".mysqli_connect_error();
}
else {
    echo "Łączenie z bazą danych udane!<br>";
}
$imie = $_GET["imie"];
$nazwisko = $_GET["nazwisko"];
$odjazd = $_GET["odjazdd"];
$bilet = $_GET["bilet"];
$start = $_GET["przystaneks"];
$koniec = $_GET["przystanekk"];
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
echo $bilet;
echo $odjazd;
echo $g1;
echo $g2;
$koszt = ($g1 - $g2) * $ulga;

$query = "insert into projekt_autobusy.klienci (imie,nazwisko,bus,godziny,koszt_biletu) VALUES('".$imie."','".$nazwisko."',1,'".$odjazd."',".$koszt.")";
$result = mysqli_query($link, $query);
echo "Bilet użytkownika: ".$imie." ".$nazwisko." został pomyślnie zarejestrowany!";
?>
