<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>兴大ecampus</title>
<link href="../../css/ecampus.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" type="text/css" href="../../css/bootstrap.css">
<link href="../../css/bootstrap.min.css" rel="stylesheet">
<script src="../../js/jquery.min.js"></script>
<script src="../../js/menu.js"></script>
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
      echo  $_SESSION['lec_name']; 
      ?>
   </div>
    

</div>


<div class="menu">
      <h3>课程导览</h3>
      <ul id="nav_dot">
      <li>
          <h4 >介绍</h4>
          <div class="list-item none">
            <a href='#'>课程纲要</a>
            <a href='#'>教学进度</a>
            <a href='#'>成员</a>
           
          </div>
        </li>
        <li>
          <h4>公告</h4>
          <div class="list-item none">
            <a href='#'>最新公告</a>
           <a href='#'>过期公告</a>
                   
           </div>
        </li>
        <li>
          <h4 >内容</h4>
          <div class="list-item none">
          <a href='#'>大纲</a> 
         <a href='#'>文件</a> 
           <a href='homework.html' target="_blank">作业</a>
            <a href='#'>讨论</a>
            <a href='#'>测验</a>
             <a href='#'>问卷</a>
            <a href='#'>观摩</a>
           

          </div>
        </li>

           <li>
          <h4 >评量</h4>
          <div class="list-item none">
          <a href='#'>成绩</a> 
         <a href='#'>旷课</a> 
         <a href='#'>等级</a> 

          </div>
        </li>

           <li>
          <h4 >工具</h4>
          <div class="list-item none">
         <a href='#'>寄信</a> 
         <a href='#'>晤谈</a> 
        
         <a >聊天室</a> 
         <a href='#'>网站地图</a> 

          </div>
        </li>

  </ul>
</div>
</div>
<script>
  navList(12);
</script>



</body>
</html>