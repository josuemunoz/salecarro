<?php 

	class title
	{
		//variables needed
		static $folder;
		static $fontFolder;
		static $whatToWrite;
		static $fontType;
		//static $newFileName;
		static $width;
		static $height;
		static $fontColor;
		static $fontColorShadow;
		static $fontSize;
		static $saveItAs;
		
		
		static function makeTitle(){
					
$im = imagecreatetruecolor(self::$width, self::$height);
// Create some colors
imagesavealpha($im, true); 
imagealphablending($im, false); 
$background = imagecolorallocatealpha($im,255,255,255,127);
//COLORS FOR THE FONT AND THE SHADOW
$grey 	= imagecolorallocate($im, 204, 204, 204);
$black 	= imagecolorallocate($im, 0, 0, 0);
$white 	= imagecolorallocate($im, 204, 204, 204);

imagefilledrectangle($im,0, 0, self::$width, self::$height, $background);
imagealphablending($im, true); 
// The text to draw
$text = title::$whatToWrite;
// Replace path by your own font path
$font = title::$fontFolder . title::$fontType;


// Add some shadow to the text
imagettftext($im, self::$fontSize, 0, 1, 22, $grey, $font, $text);
// Add the text
imagettftext($im, self::$fontSize, 0, 0, 20, $black, $font, $text);


// Using imagepng() results in clearer text compared with imagejpeg()
imagepng($im, title::$folder. title::$saveItAs.'.PNG');

imagedestroy($im);		
			}
		}

?>