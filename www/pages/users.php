<?php require_once('../../Connections/cars.php'); ?>
<?php
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}

$colname_Recordset1 = "info@info.com";
if (isset($_GET[email])) {
  $colname_Recordset1 = $_GET[email];
}
$colnameb_Recordset1 = "1";
if (isset($_GET[password])) {
  $colnameb_Recordset1 = $_GET[password];
}
mysql_select_db($database_cars, $cars);
$query_Recordset1 = sprintf("SELECT * FROM `user` WHERE `user`.email = %s AND `user`.password = %s", GetSQLValueString($colname_Recordset1, "text"),GetSQLValueString($colnameb_Recordset1, "text"));
$Recordset1 = mysql_query($query_Recordset1, $cars) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
?>

	<?php 
		if($_GET[email] == $row_Recordset1['email'] && $_GET[password] == $row_Recordset1['password']){
				
				
                
                
				
				echo '<div class="blue" id="good">Welcome '.ucwords($row_Recordset1['first_name']). ' '.  ucwords($row_Recordset1['last_name']).'</div>';
				
				echo '<p class="userId">'.$row_Recordset1['user_id'].'</p>';
				
                echo '<span><a href="pages/my-car-inventory.html?userId='.$row_Recordset1['user_id'].'"><img src="ASSETS/icons/Android_notepad-download-letter_33.png" width="80" height="89"></a><br/><br/>MY INVENTORY</span>';
				
                
                
			}else{
				echo '<div class="red">Make sure you have an account! Try Again!</div>';
				}
	?> 
	

<?php
mysql_free_result($Recordset1);
?>
