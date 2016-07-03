<?php
 session_start();
unset($_SESSION['user_name']);
unset($_SESSION['user_flag']);
unset($_SESSION['user_id']);
echo "<script>location.href='../ecap_index.html';</script>"
?>