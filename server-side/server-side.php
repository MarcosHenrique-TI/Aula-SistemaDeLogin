<?php
$emai= $_POST['email'];
$password = $_POST['password'];

$users = file("users.txt");

foreach ($users as $user) {
    list($u_email, $u_pass) = explode(";", trim($user));
    if ($email === $u_email && $password === $u_pass) {
        echo "Login bem-sucedido!";
        exit;
    }
}
echo "Email ou senha incorretos.";
?>