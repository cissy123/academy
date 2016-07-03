<?php
@mysql_connect("localhost","root",'') or die("数据库 error");
@mysql_select_db("ecampus") or die("选择数据库error");

$user_id = $_POST['user_id'];
$passcode = $_POST['passcode'];

$query = @mysql_query("select user_id,user_flag,user_name from user where user_id = '$user_id' and passcode = '$passcode'") or die("sql query error");

if ($row = mysql_fetch_array($query)) {
	# code...
	session_start();
	if ($row['user_flag'] == 1 or $row['user_flag'] == 0) {
		# code...
		$_SESSION['user_id'] = $row['user_id'];
		$_SESSION['user_flag'] = $row['user_flag'];
		$_SESSION['user_name'] = $row['user_name'];
		echo "<script>location.href='welcome_login.php';</script>";
	}else{
		echo "no right";
	}
}
?>