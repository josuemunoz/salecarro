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

$colname_Recordset1 = "1";
if (isset($_GET[id_car])) {
  $colname_Recordset1 = $_GET[id_car];
}
mysql_select_db($database_cars, $cars);
$query_Recordset1 = sprintf("SELECT * FROM cars WHERE cars.id_car = %s", GetSQLValueString($colname_Recordset1, "int"));
$Recordset1 = mysql_query($query_Recordset1, $cars) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
?>

<?php

if($_GET[id_car]){
	
	
	$arr = array(
	'color' => $row_Recordset1['color'],
	'make_id' => $row_Recordset1['make_id'],
	'model_id' => $row_Recordset1['model_id'],
	'model_name' => ucwords($row_Recordset1['model']),
	'year' => $row_Recordset1['year'],
	'miles' => $row_Recordset1['miles'],
	'price' => $row_Recordset1['price'],
	'notes' => $row_Recordset1['notes']
	
	);
	echo json_encode($arr);
	
	}

?>


<?php
mysql_free_result($Recordset1);
?>
