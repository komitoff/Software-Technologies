<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        X: <input type="text" name="num1" />
		Y: <input type="text" name="num2" />
        Z: <input type="text" name="num3" />
		<input type="submit" />
    </form>
    <?php 
        if (isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) {
          
            $numbers[0] = intval($_GET['num1']);
            $numbers[1] = intval($_GET['num2']);
            $numbers[2] = intval($_GET['num3']);

            $negativeCount = 0;
            $positiveCount = 0;
            $zero = false;
            for ($i = 0; $i < count($numbers); $i ++) {
                if($numbers[$i] == 0) {
                    echo "positive";
                    $zero = true;
                    break;
                }
                else if ($numbers[$i] < 0) {
                    $negativeCount ++;
                }
                else {
                    $positiveCount ++;
                }
            }

            if ($negativeCount == 1 && !$zero) {
                echo "negative";
            }
            else if (!$zero) {
                echo "positive";
            }
            
        }
    ?>
</body>
</html>