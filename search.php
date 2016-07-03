<?php
$tex = $_POST['search'];
$url = "https://www.google.com.hk/?gws_rd=ssl#safe=strict&q=".$tex;
echo "<script>window.location.href='$url';</script>";
?>


