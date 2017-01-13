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

$editFormAction = $_SERVER['PHP_SELF'];
if (isset($_SERVER['QUERY_STRING'])) {
  $editFormAction .= "?" . htmlentities($_SERVER['QUERY_STRING']);
}
if($_GET[id_car]){
//if ((isset($_POST["MM_update"])) && ($_POST["MM_update"] == "form1")) {
  $updateSQL = sprintf("UPDATE cars SET notReady=%s, notes=%s, City_To_Sell=%s, miles=%s, model=%s, model_id=%s, Model_name=%s, make=%s, make_id=%s, price=%s, `year`=%s, date_insert=%s, VarCarmod=%s WHERE id_car=%s",
                       GetSQLValueString($_GET['notReady'], "int"),
					   GetSQLValueString($_GET['notes'], "text"),
					   GetSQLValueString($_GET['City_To_Sell'], "text"),
                       GetSQLValueString($_GET['miles'], "text"),
                       GetSQLValueString($_GET['model'], "text"),
                       GetSQLValueString($_GET['model_id'], "text"),
                       GetSQLValueString($_GET['Model_name'], "text"),
                       GetSQLValueString($_GET['make'], "text"),
                       GetSQLValueString($_GET['make_id'], "text"),
                       GetSQLValueString($_GET['price'], "text"),
                       GetSQLValueString($_GET['year'], "text"),
                       GetSQLValueString($_GET['date_insert'], "date"),
                       GetSQLValueString($_GET['VarCarmod'], "text"),
                       GetSQLValueString($_GET['id_car'], "int"));

  mysql_select_db($database_cars, $cars);
  $Result1 = mysql_query($updateSQL, $cars) or die(mysql_error());
//}
}
$colname_Recordset1 = "-1";
if (isset($_GET['id_car'])) {
  $colname_Recordset1 = $_GET['id_car'];
}
mysql_select_db($database_cars, $cars);
$query_Recordset1 = sprintf("SELECT * FROM cars WHERE id_car = %s", GetSQLValueString($colname_Recordset1, "int"));
$Recordset1 = mysql_query($query_Recordset1, $cars) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
?>


<div class="green">This car has been updated!! Please wait.<meta http-equiv="refresh" content="2;URL=../index.html" />
</div>
<?php
mysql_free_result($Recordset1);
?>
