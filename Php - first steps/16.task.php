<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
</head>
<body>
<?php
	$blue = '<button style =  "background-color: blue">1</button>';
	$white = '<button>0</button>';
	//not optimized - bad writen code 
	for ($i = 0; $i < 5; $i ++) {
		echo $blue;
	}
	echo "<br/>";
	for ($i = 0; $i < 3; $i ++) {
		echo $blue;
		for ($j = 0; $j < 4; $j ++) {
			echo $white;
		}
		echo "<br/>";
	}
	for ($i = 0; $i < 5; $i ++) {
		echo $blue;
	}
	echo "<br/>";
	for ($i = 0; $i < 3; $i ++) {
		for ($j = 0; $j < 4; $j ++) {
			echo $white;
		}
		echo $blue;
		echo "<br/>";
	}
	for ($i = 0; $i < 5; $i ++) {
		echo $blue;
	}
?>
</body>
</html>