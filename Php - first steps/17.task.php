<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
	<style>
		table * {
			border: 1px solid black;
			width: 50px;
			height: 50px;
		}
    </style>
</head>
<body>
<table>
    <tr>
        <td>
            Red
        </td>
        <td>
            Green
        </td>
        <td>
            Blue
        </td>
    </tr>
	<?php
		$inc = 51;
		for ($i = 0; $i < 5; $i++ ) {
			echo '<tr>';
			echo '<td style="background-color: RGB(' . $inc . ', 0, 0)">';
			echo '</td>';
			echo '<td style="background-color: RGB(0,' . $inc .', 0)">';
			echo '</td>';
			echo '<td style="background-color: RGB(0, 0, ' . $inc . ')">';
			echo '</td>';
			echo '</tr>';
			$inc += 51;
		}
		
	?>
</table>
</body>
</html>