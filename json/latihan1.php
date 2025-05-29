<?php
$mahasiswa = [  
    "nama" => "Budi",
    "nim" => "1234567890",
    "jurusan" => "Teknik Informatika",
    "angkatan" => 2020
];

$data = json_encode($mahasiswa);
echo $data;
?>