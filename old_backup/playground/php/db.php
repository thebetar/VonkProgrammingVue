<?php

$dbservername = "rdbms.strato.de";
$dbusername = "U4052629";
$dbpassword = "LarsIsPerfect035060899";
$dbname = "DB4052629";

$db = mysqli_connect($dbservername, $dbusername, $dbpassword, $dbname);

if(!$db) {
    die("Database reageert niet.");
}

if(isset($_POST['username'])){
    $username = $_POST['username'];
    $password = md5($_POST['password']);

    $sql = "SELECT * FROM Member WHERE login='$username' AND password='$password'";
        
    $result = mysqli_query($db, $sql);

    if(!$result) {
        die('Query reageert niet');
    }

    $count = mysqli_num_rows($result);

    if($count >= 1) {
        if($_POST['async'] == "true") {
            echo json_encode("Success");
            die();
        } else {
            echo json_encode("Failed");
        }
    }
} else {
    echo json_encode("Failed!");
}

?>