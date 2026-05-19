<?php  
$email = $_POST['email'];
$password = $_POST['password'];

file_put_contents("users.txt", "$email;$password\n", FILE_APPEND);

echo "Registro bem-sucedido!";
?>