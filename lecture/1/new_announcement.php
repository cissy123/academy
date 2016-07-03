<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>兴大ecampus-作业</title>
<link href="../../css/ecampus.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="../../css/bootstrap.css">

<script src="../../js/jquery.min.js"></script>
<script src="../../js/menu.js"></script>
</head>
<body>

<!--
<?php
 
/*
function write($file_name,$data,$mode='w'){
                     
    if(!in_array($mode,array('w','a','x')))
        return false;
 
    $dir = dirname($file_name);
 
    if(!is_dir($dir))
        $dir = mkdir($dir,0777);
         
    if(!$dir) return false;
 
    $file = fopen($file_name,$mode);
     
    if(!$file || !is_writable($file_name)) return false;
                 
    fwrite($file,$data);
    fclose($file);
     
 
}
echo write('new_announcement.txt',json_encode($_POST['htmlsource']));
*/
?>

<script >
	alert("shifouchakan");
	if (true) {
		window.location.href="new_announcement_show.php";
	}
</script>
-->

<?php
$days = $_POST['days'];
define("DAYS", $days * 60 * 60 * 24);

setcookie("htmlsource",$_POST['htmlsource'],time() + DAYS);
$htmlsource = $_POST['htmlsource'];

?>
<script >
    alert("是否查看公告内容");
    if (true) {
        window.location.href="new_announcement_show.php";
        
    }
</script>
</body>
</html>