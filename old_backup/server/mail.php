<?php
    $data = json_decode(file_get_contents('php://input'), true);

    $naam = $data['name'];
    $email = $data['email'];
    $desc = $data['text'];

    if(!empty($naam) && !empty($email) && !empty($desc)) {
        mail('info@vonkprogramming.nl', "Vraag van {$naam}", "Naam: {$naam} \nEmail: {$email} \nVraag: {$desc}");
    } else {
        echo "Er is iets fout gegaan";
    }
?>