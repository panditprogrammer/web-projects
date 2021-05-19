<style>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body{
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(skyblue,rgb(203, 238, 203));
    background-repeat: no-repeat;
}
nav{
    height: 70px;
    width: 100%;
    background-color: lightblue;
}
nav ul{
    margin: 0 20%;
    display: flex;
    justify-content: space-between;
}
nav ul li{
    line-height: 70px;
    text-decoration: none;
    display: inline-block;
}
nav ul li a{
    text-decoration: none;
    padding: 10px 15px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: bold;
    
}
nav ul li a:hover{
    color: rgb(21, 3, 63);
    transform: scale(1.5);
}

/* form styled ehre  */
section{
    width: 360px;
    margin: 20px auto;
    padding: 10px;
    border-radius: 5px;
    border: 1px groove rgb(142, 221, 159);
    padding-bottom: 30px;
    box-shadow: 0px 6px 14px 0px #3fa67b;

}
section h3{
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #1b217e;
    text-transform: capitalize;
    text-decoration: underline;
    border-radius: 5px;
    margin-top: 30px;
    padding: 10px;
}
section form div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    padding: 5px;

    
}
section form div label{
    color: rgb(2, 2, 54);
    font-weight: 800;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 12px;
}
section form div input{
    width: 200px;
    padding: 2px;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    outline: none;
    border: 1px solid whitesmoke;
    border-radius: 3px;
    background: transparent;
    
}
section form div button{
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 700;
    color: #1b217e;
    border-radius: 4px;
    background: transparent;
    box-shadow: 0px 1px 4px 0px #4f8499;
    outline: none;
    border-style: none;
    margin-bottom: 30px;
    cursor: pointer;


}
</style>