<?php

           $conn=mysqli_connect("localhost","root","","movies");
           if(!$conn)
           {
               die("connection failed");
           }
           if(isset($_POST['submit']))
           {
               $username=$_POST['username'];
               $email=$_POST['email'];

               $sql_query="insert into
               login('username','email') values('$username','$email');";

               if(mysqli_query($conn,$sql_query))
               {
                    echo "success";
               }
               else{
                    echo "failed";
               }
           }
?>