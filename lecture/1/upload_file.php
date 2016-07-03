<!DOCTYPE HTML>
<html>

<body>


<?php 
if ($_FILES["file"]["error"] > 0) {
	echo "error" . $_FILES["file"]["error"] . "<br />";
}

else
{
	if (file_exists("upload/" .$_FILES["file"]["name"])) {
	echo $_FILES["file"]["name"]. " already exists";
}
	else
	{
		move_uploaded_file($_FILES["file"]["tmp_name"] , "upload/" .$_FILES["file"]["name"]);
		echo "success";
		echo "strored in:" .$_FILES["file"]["tmp_name"]. "kb<br />";

	echo "upload:" . $_FILES["file"]["name"]. "<br />";
	echo "type:". $_FILES["file"]["type"]. "<br />";
	echo "size:". ($_FILES["file"]["size"] / 1024). "kb<br />";
	}
}





?>




</body>
</html>