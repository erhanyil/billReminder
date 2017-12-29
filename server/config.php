<?php

date_default_timezone_set('Europe/Istanbul');

$servername = "localhost";
$database = "projects";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password, $database);

mysqli_set_charset($conn,"utf8");

if ($conn->connect_error) die("0");

if ($conn->connect_errno) exit();
?> 