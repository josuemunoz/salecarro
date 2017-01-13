<?php 
class carInfo
{
	var $year;
	var $make;
	var $model;
	var $price;
	var $miles;
	
	public function __construct($year = '1500', $make = 'none', $model = 'none', $price = 'call', $miles = 'unavailable')
		{
			$this->year = $year;
			$this->make = $make;
			$this->model = $model;
			$this->price = $price;
			$this->miles = $miles;
			}
	public function ymm()
		{
			$name =  $this->year .' '. $this->make .' '. $this->model;
			return strtoupper($name);
			}
	function showPrice()
		{
			printf('Price: %s', $this->price);
			}
	function showMiles()
		{
			printf('Miles: %s', $this->miles);
			}
}

?>