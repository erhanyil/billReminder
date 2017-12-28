<?php

$servername = "localhost";
$database = "projects";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) die("0");

if ($conn->connect_errno) exit();
?> 