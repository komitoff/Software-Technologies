<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
	<?php 
		if(isset($_GET['num'])) {
			$num = intval($_GET['num']);
			
			$fibSq[0] = 1;
			$fibSq[1] = 1;
			
			for ($i = 2; $i < $num; $i ++) {
				
				$fibSq[$i] = $fibSq[$i-1] + $fibSq[$i - 2];
			}
			
			echo implode(" ", $fibSq);
		}
	
	?>
</body>
</html>