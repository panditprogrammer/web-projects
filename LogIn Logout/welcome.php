<?php
session_start();
if($_SESSION['username'] == "")
{
    header("location:login.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "style.php" ?>
    <title>Dashboard</title>
    <style>
    .wel{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin: 20px auto;
        font-size: 22px;
        color: blue;
    }
    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="logout.php">Logout</a></li>
            </ul>
        </nav>
    </header>

  
       <div class="wel">
       <h3 style="text-align: center; margin: 20px auto;">Welcome to Dashboard</h3>
        <h3>Hello,<br><span style="font-size: 50px; text-transform:capitalize;color:green"> <?php echo $_SESSION['username'] ?> </span></h3>
       </div>
        


</body>
</html>