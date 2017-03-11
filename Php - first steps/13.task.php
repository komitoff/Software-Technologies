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
			$isPrime = false;
			$cnt = 0;
            for ($i = $num; $i >= 1; $i --) {
                for ($j = 1; $j <= $i; $j ++) {
					if ($i % $j == 0) {
						$cnt ++;
					}
				} 
				if ($cnt <= 2) {
					echo $i . " ";
				}
				$cnt = 0;
				
            } 
			
        }
     ?>
</body>
</html>