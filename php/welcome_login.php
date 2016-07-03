<!DOCTYPE html>
<html>
<head>
	 <link href="../css/bootstrap.min.css" rel="stylesheet">
   <script src="../js/jquery.min.js"></script>
   <script src="../js/bootstrap.min.js"></script>
</head>
<body>


<?php
session_start();
if (isset($_SESSION['user_id'])) {
	if ($_SESSION['user_flag'] == 1) {
?>

<div class="alert alert-success alert-dismissable">
   <button type="button" class="close" data-dismiss="alert" 
      aria-hidden="true" onclick="loginout()">
      &times;
   </button>
   管理员登录成功！。
</div>
<script >
	function loginout()
	{
		window.location.href = "../ecap_index_login.php";
	}
</script>

<?php
	}
		if ($_SESSION['user_flag'] == 0) {
?>
<div class="alert alert-success alert-dismissable">
   <button type="button" class="close" data-dismiss="alert" 
      aria-hidden="true" onclick="loginout()">
      &times;
   </button>
   登录成功！。
</div>
<script >
	function loginout()
	{
		window.location.href = "../ecap_index_login.php";
	}
</script>

<?php
}
	

}else
			echo "no right";
?>
</body>
</html>

