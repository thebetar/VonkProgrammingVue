<?php
$naam = $_GET['naam'];
$telefoon = $_GET['telefoon'];
$email = $_GET['email'];
$vraag = $_GET['vraag'];

mail('info@vonkprogramming.nl', "Vraag van {$naam}", "Naam: {$naam} \nTelefoon: {$telefoon} \nEmail: {$email} \nVraag: {$vraag}");
?>