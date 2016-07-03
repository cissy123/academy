<!-- 
0104204153 赵晨曦 第四次作业 
0104204153 Chenxi Zhao midtermHomework 
-->
<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>兴大ecampus</title>
<link href="css/ecampus.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<link href="../css/bootstrap.min.css" rel="stylesheet">
<script src="js/jquery.min.js"></script>
<script src="js/menu.js"></script>
</head>
<body>
<div id="container">


<div class="panel panel-info">
   <div class="panel-heading">
      <h3 class="panel-title">Welcome</h3>

   </div>
   <div  style="text-align: center;font-size: 1.3em;" class="panel-body">
      <?php 
      session_start();
      echo $_SESSION['user_name']; 
      ?>
   </div>
    <input type="reset" style="text-align: center;width: 221px;" class="btn btn-info"name="logout" value="logout" onclick="logout()"></input>

</div>
<script>
  function logout()
  {
    window.location.href = "php/logout.php";
  }
</script>

<?php
@mysql_connect("localhost","root",'') or die("数据库 error");
@mysql_select_db("ecampus") or die("选择数据库error");
$db = "id".$_SESSION['user_id'];
$lecture = @mysql_query("select lec_name,lec_folder,lec_href from $db") or die(mysql_error());
while ($row = mysql_fetch_array($lecture)) {

  $_SESSION['lec_name'] = $row['lec_name'];
?>
<td>
  <div align="center"><a href="<?php echo $row['lec_folder'].$row['lec_href']?>"><?php echo $row['lec_name']?></a>
  </div></td>
<?php
}
?>

<div>
<form action="search.php" method="post">
<div><input name="search" id="search" type="text" ></input></div>
<div><input type="submit" value="google" ></input></div>
 </form>


</div>

</body>
</html>