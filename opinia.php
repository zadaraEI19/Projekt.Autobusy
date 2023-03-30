<?php
$link1 = @mysqli_connect("localhost","root","","projekt_autobusy");
$query = "insert into oceny_jazdy (id_busa, ocena) VALUES(1,'".$_POST["opinia"]."')";
$result = mysqli_query($link1, $query);

header("location:index.html");
?>
