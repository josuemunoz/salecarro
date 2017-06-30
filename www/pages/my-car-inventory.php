<?php require_once('../../Connections/cars.php');
include('../class/mobileApp.php');
?>
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

$colname_Recordset1 = "1";
if (isset($_GET['userId'])) {
  $colname_Recordset1 = $_GET['userId'];
}
mysql_select_db($database_cars, $cars);
$query_Recordset1 = sprintf("SELECT * FROM cars WHERE cars.id_salesperson = %s", GetSQLValueString($colname_Recordset1, "int"));
$Recordset1 = mysql_query($query_Recordset1, $cars) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);

$colname_Recordset2 = "0";
if (isset($_GET['userId'])) {
  $colname_Recordset2 = $_GET['userId'];
}
mysql_select_db($database_cars, $cars);
$query_Recordset2 = sprintf("SELECT * FROM `user` WHERE user_id = %s", GetSQLValueString($colname_Recordset2, "int"));
$Recordset2 = mysql_query($query_Recordset2, $cars) or die(mysql_error());
$row_Recordset2 = mysql_fetch_assoc($Recordset2);
$totalRows_Recordset2 = mysql_num_rows($Recordset2);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<div class="headerTitle">My Inventory</div>
<div><select name="optionBaby" id="go" style="display:none"></select></div>

<ul class="myTarget" id="myTarget">
  
  <?php if($totalRows_Recordset1 > 0) { ?>
  <?php do { ?>
  <?php 
  
  ?>
  <li>
  <h1><?php $car = new carInfo($row_Recordset1['year'],$row_Recordset1['make'], $row_Recordset1['model'],$row_Recordset1['price'], $row_Recordset1['miles']);
  echo $car->ymm();
  ?></h1>
  <h5><?php 		echo $car->showPrice();
					echo '<br/>';
					echo $car->showMiles(); ?></h5>
  <div class="westImage"><a href="car-edit.html?car=<?php echo $row_Recordset1['id_car']; ?>&citytosell=<?php echo $row_Recordset2['area']; ?>"><img name="" src="http://www.salecarro.com/assets/cars_for_sale/<?php echo $row_Recordset1['id_salesperson']; ?>/_small<?php echo $row_Recordset1['image']; ?>" alt="" /></a></div>
     
     <button id="edit"><a href="car-edit.html?car=<?php echo $row_Recordset1['id_car']; ?>&citytosell=<?php echo $row_Recordset2['area']; ?>">Edit Post</a></button>
     <button id="addPictures">Add Pictures</button>
     <button id="sold">Mark as Sold</button>
     <button id="delete">Delete Post</button>
     <button onclick="extraPicture(<?php echo $row_Recordset1['id_car']; ?>)">test folder creation</button>
      <?php echo '</li>'; ?>
     
    
    <?php } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); ?>
<?php }else{
		echo '<div class="red">YOU DONT HAVE INVENTORY AT THIS TIME!</div>';
	} ?>
</ul>
</body>
</html>

<?php
mysql_free_result($Recordset1);

mysql_free_result($Recordset2);
?>
