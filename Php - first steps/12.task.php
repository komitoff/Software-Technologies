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
			
			$tribSq[0] = 1;
			$tribSq[1] = 1;
			$tribSq[2] = 2;
			
			for ($i = 3; $i < $num; $i ++) {
				
				$tribSq[$i] = $tribSq[$i-1] + $tribSq[$i - 2] + $tribSq[$i - 3];
			}
			
			echo implode(" ", $tribSq);
		}
	
	?>
</body>
</html>