<?php require_once('../../Connections/cars.php'); ?>
<?php
include('../class/mobileApp.php');
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

$colname_Recordset1 = "8";
if (isset($_GET[makeId])) {
  $colname_Recordset1 = $_GET[makeId];
}
mysql_select_db($database_cars, $cars);
$query_Recordset1 = sprintf("SELECT * FROM cars WHERE cars.make_id = %s", GetSQLValueString($colname_Recordset1, "int"));
$Recordset1 = mysql_query($query_Recordset1, $cars) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link href="../ASSETS/css/imports_css.css" rel="stylesheet" type="text/css">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
<div class="headerTitle"><?php echo strtoupper($row_Recordset1['make']); ?></div>
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
<div class="westImage"><a><img name="" src="http://www.salecarro.com/assets/cars_for_sale/<?php echo $row_Recordset1['id_salesperson']; ?>/_small<?php echo $row_Recordset1['image']; ?>" alt="" /></a></div>
    
 
      
    </li>
<?php }  ?>
    <?php } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); ?>

</ul>
</body>


</html>
<?php
mysql_free_result($Recordset1);
?>
