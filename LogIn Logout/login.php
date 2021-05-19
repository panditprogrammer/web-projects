<?php

session_start();
if(isset($_SESSION['username']))
{
    header("location:welcome.php");
}

include "conn.php";
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include "style.php" ?>
    <title>Login</title>
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="index.php">Register</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <h3>Log In here</h3>
        <form action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="post">
            <div>
                <label for="Email">Email</label>
                <input type="email" name="email" id="username">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
            </div>
            <div>
                <button type="submit" name="login">Log In</button>
            </div>
        </form>
    </section>


</body>

</html>

<?php


if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];


    // form validation 
    if ($email == "" || $password == "") {
        echo "<br>fill the require fields";
    } else {

        // sql query for retrieve data  and matching
        $sql = "SELECT * FROM login_info WHERE email = '$email'";
        $query = mysqli_query($conn, $sql);
        // if data match with user password 
        $email_exist = mysqli_num_rows($query);

        if ($email_exist) {
            // fatching password from db 
            $user_data = mysqli_fetch_assoc($query);
            $password_from_db = $user_data['password'];
            // storing username in session 
            $_SESSION["username"] = $user_data['username'];

            // decode and verify with user password 
            $pass_decode = password_verify($password, $password_from_db);

            if ($pass_decode) {
                echo "<br>login success";
                header("location:welcome.php");
            } else {
                echo "<br>username or password incorrect!";
            }
        } else {
            echo "<br>invalid email";
        }
    }
}

?>