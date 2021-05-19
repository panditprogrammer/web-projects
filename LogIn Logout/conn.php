<?php

$server = "localhost";
$user = "root";
$password = "";
$database = "user_login";

$conn = mysqli_connect($server,$user,$password,$database);

if($conn)
echo "connected";

?>