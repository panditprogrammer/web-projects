<?php
session_start();
if(isset($_SESSION['username']))
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
    <title>Register</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="Login.php">Log In</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h3>Register for Free </h3>
        <form action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
            <div>
                <label for="username">Username</label>
                <input type="text" name="username" id="username">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
            </div>
            <div>
                <label for="cpassword">Confirm Password</label>
                <input type="password" name="cpassword" id="cpassword">
            </div>
            <div>
                <button type="submit" name="register">Register</button>
            </div>

        </form>

    </section>


</body>
</html>

<?php

include "conn.php";

if(isset($_POST['register']))
{
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword =$_POST['cpassword'];
    
    // simple form validation 
    if($username == "" || $email == "" || $password == "" )
    {
        echo "<br>fill the required field";
    }
    else if($password != $cpassword)
    {
        echo "<br>password mismatch!";
    }
    else
    {
        // encript password and stor 
        $encript_pass = password_hash($password,PASSWORD_DEFAULT);
        $encript_cpass = password_hash($cpassword,PASSWORD_DEFAULT);

        $sql = "INSERT INTO `login_info`(`username`, `email`, `password`, `cpassword`) VALUES ('$username','$email','$encript_pass','$encript_cpass')";
        // execute the final query to insert data into databases 
        $query = mysqli_query($conn,$sql);

        if($query)
        {
        echo "<br>registration success";
            header("location:login.php");
        }
    }
}


?>