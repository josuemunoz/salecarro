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

$colname_Recordset1 = "256";
if (isset($_GET[user_id])) {
  $colname_Recordset1 = $_GET[user_id];
}
mysql_select_db($database_cars, $cars);
$query_Recordset1 = sprintf("SELECT * FROM cars WHERE cars.id_salesperson = %s", GetSQLValueString($colname_Recordset1, "int"));
$Recordset1 = mysql_query($query_Recordset1, $cars) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);

$colnameA_Recordset2 = "256";
if (isset($_GET[user_id])) {
  $colnameA_Recordset2 = $_GET[user_id];
}
mysql_select_db($database_cars, $cars);
$query_Recordset2 = sprintf("SELECT `user`.business_name FROM `user` WHERE `user`.user_id = %s", GetSQLValueString($colnameA_Recordset2, "int"));
$Recordset2 = mysql_query($query_Recordset2, $cars) or die(mysql_error());
$row_Recordset2 = mysql_fetch_assoc($Recordset2);
$totalRows_Recordset2 = mysql_num_rows($Recordset2);
?>
<?php
include('../class/mobileApp.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link href="../ASSETS/css/imports_css.css" rel="stylesheet" type="text/css">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<div class="headerTitle"><?php echo strtoupper($row_Recordset2['business_name']); ?></div>
<?php if($totalRows_Recordset1 > 0 ) { ?>

<ul class="myTarget">


  <?php do { ?>


 <?php if($row_Recordset1['image']) { ?>

  <li>
  
<h1>  
<?php
$car = new carInfo($row_Recordset1['year'],$row_Recordset1['make'], $row_Recordset1['model'], $row_Recordset1['price'], $row_Recordset1['miles']);

echo $car->ymm();

?></h1> <h5>  <?php echo $car->showPrice();
					echo '<br/>';
					echo $car->showMiles(); ?> </h5> 
<div class="westImage"><img name="" src="http://www.salecarro.com/assets/cars_for_sale/<?php echo $row_Recordset1['id_salesperson']; ?>/_small<?php echo $row_Recordset1['image']; ?>" alt="" /></div>
    
 
      
    </li>
<?php }  ?>
    <?php } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); ?>

</ul>
<?php }else{
	echo '<div class="red">No Inventory at This Time.</div>';
	} ?>
</body>


</html>
<?php
mysql_free_result($Recordset1);

mysql_free_result($Recordset2);
?>
