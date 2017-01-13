<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_gra = "localhost";
$database_gra = "vtknlks_graphicsone";
$username_gra = "vtknlks_josue";
$password_gra = "4545";
$gra = mysql_pconnect($hostname_gra, $username_gra, $password_gra) or die(mysql_error());
?>