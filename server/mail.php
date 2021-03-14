<?php
    $naam = $_POST['name'];
    $email = $_POST['email'];
    $desc = $_POST['description'];

    if(!empty($naam) && !empty($email) && !empty($desc)) {
        mail('info@vonkprogramming.nl', "Vraag van {$naam}", "Naam: {$naam} \nEmail: {$email} \nVraag: {$desc}");
    } else {
        echo "Er is iets fout gegaan";
    }
?>