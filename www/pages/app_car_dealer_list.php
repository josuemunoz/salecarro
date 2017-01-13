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

mysql_select_db($database_cars, $cars);
$query_Recordset1 = "SELECT * FROM `user` WHERE `user`.type_business = 2";
$Recordset1 = mysql_query($query_Recordset1, $cars) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
include("../class/titles1point2.php");

/* /variables needed
		static $folder;
		static $fontFolder;
		static $whatToWrite;
		static $fontType;
		static $newFileName;
		static $width;
		static $height;
		static $fontColor;
		static $fontColorShadow;
		static $fontSize;


title::$folder 		= 'assets/companyNames/';
title::$fontFolder  = 'assets/fonts/';
title::$fontType	= 'Zurche.ttf';
title::$fontSize	= 45;
//title::$whatToWrite		= $_GET[write];
title::$width = '300';
title::$height =	'30';
title::$fontColor = '#333333';
title::$fontColorShadow = 'blue';
*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CAR DEALERS LISTING</title>
<link href="../ASSETS/css/2012.css" rel="stylesheet" type="text/css" />
</head>

<body>
<?php 
$color = array('#ffffff', '#ffffcc');
$color_index = 0;
$i = 0;

?>
<div class="test" id="test">
	<ul>
    	<?php do { ?>
     <?php if($row_Recordset1['business_name']) { ?>
        <?php
       // title::$whatToWrite = ucwords($row_Recordset1['business_name']);
		//title::$saveItAs = $row_Recordset1['user_id'];
		//title::makeTitle();
		
   	    echo '<li style="background:'.$color[$color_index].'">';
		$color_index = 1 - $color_index; ?>
        <img src="http://www.salecarro.com/car_ajax/assets/companyNames/<? echo $row_Recordset1['user_id'];?>.PNG" />
        <br/>
        <div class="phone"><?php echo '('. $row_Recordset1['area']. ')'; ?> <?php echo $row_Recordset1['phone']; ?></div>

<? if($row_Recordset1['Directory_Listing'] == 'yes') { ?>
<div class="DealerArrow">
<a href="pages/car-dealer.html?user_id=<?php echo $row_Recordset1['user_id']; ?>">
<img src="http://45graphics.net/camera/ASSETS/icons/arrow.png" width="26" height="26" />
</a>
</div>
<? } ?>

</li>
    	 
		  <?php } ?>
		  <?php } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); ?>
    
	</ul> 
    </div>
</body>
</html>
<?php
mysql_free_result($Recordset1);
?>
