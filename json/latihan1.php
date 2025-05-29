<?php
// $mahasiswa = [  
//     "nama" => "Budi",
//     "nim" => "1234567890",
//     "jurusan" => "Teknik Informatika",
//     "angkatan" => 2020
// ];



$dbh = new PDO("mysql:host=localhost;dbname=sikepo_db", "root", "");
$db = $dbh->prepare("SELECT * FROM kehadiran");
$db->execute();
$kehadiran = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($kehadiran);
echo $data;
?>