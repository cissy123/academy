
/*************************index**************************/
/*0104204153 赵晨曦 期中作業 4/24 
0104204153 Chenxi Zhao midtermHomework 4/24 */

function random(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><a href="speech.html">主题演讲</a></li>';
	link[1] = '<li><img src="images/icon1.png"><a href="doc.html">文件下载</a></li>';
	link[2] = '<li><img src="images/icon1.png"><a href="share.html">心得分享</a></li>';
	link[3] = '<li><img src="images/icon1.png"><a href="honor.html">荣誉榜</a></li>';
	link[4] = '<li><img src="images/icon1.png"><a href="map.html">系所地图</a></li>';
	link[5] = '<li><img src="images/icon1.png"><a href="namelist.html">實驗室缺額表</a></li>';
	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('link').innerHTML = randomlink;

}


function sort(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><a href="speech.html">主题演讲</a></li>';
	link[1] = '<li><img src="images/icon1.png"><a href="doc.html">文件下载</a></li>';
	link[2] = '<li><img src="images/icon1.png"><a href="share.html">心得分享</a></li>';
	link[3] = '<li><img src="images/icon1.png"><a href="honor.html">荣誉榜</a></li>';
	link[4] = '<li><img src="images/icon1.png"><a href="map.html">系所地图</a></li>';
	link[5] = '<li><img src="images/icon1.png"><a href="namelist.html">實驗室缺額表</a></li>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('link').innerHTML = sortlink;

}


function reset(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><a href="speech.html">主题演讲</a></li>';
	link[1] = '<li><img src="images/icon1.png"><a href="doc.html">文件下载</a></li>';
	link[2] = '<li><img src="images/icon1.png"><a href="share.html">心得分享</a></li>';
	link[3] = '<li><img src="images/icon1.png"><a href="honor.html">荣誉榜</a></li>';
	link[4] = '<li><img src="images/icon1.png"><a href="map.html">系所地图</a></li>';
	link[5] = '<li><img src="images/icon1.png"><a href="namelist.html">實驗室缺額表</a></li>';

	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('link').innerHTML = resetlink;

	console.log(resetlink);
}

/*************************index**************************/



/*************************alumnus**************************/

function random1(){
	var link = [];
	link[0] = '<li><a href="#">系友登入</a></li>';
	link[1] = '<li><a href="#">最新消息</a></li>';
	link[2] = '<li><a href="#">資料修改</a></li>';
	link[3] = '<li><a href="#">留言板</a></li>';
	link[4] = '<li><a href="#">校友通訊服務網</a></li>';

	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('sort').innerHTML = randomlink;

}


function sort1(){
	var link = [];
	link[0] = '<li><a href="#">系友登入</a></li>';
	link[1] = '<li><a href="#">最新消息</a></li>';
	link[2] = '<li><a href="#">資料修改</a></li>';
	link[3] = '<li><a href="#">留言板</a></li>';
	link[4] = '<li><a href="#">校友通訊服務網</a></li>';	
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('sort').innerHTML = sortlink;

}


function reset1(){
	var link = [];
	link[0] = '<li><a href="#">系友登入</a></li>';
	link[1] = '<li><a href="#">最新消息</a></li>';
	link[2] = '<li><a href="#">資料修改</a></li>';
	link[3] = '<li><a href="#">留言板</a></li>';
	link[4] = '<li><a href="#">校友通訊服務網</a></li>';

	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('sort').innerHTML = resetlink;

	console.log(resetlink);
}
/*************************alumnus**************************/


/*************************contact**************************/

function random2(){
	var link = [];
	link[0] = '<span>位置：國立中興大學理學大樓7-10樓</span><br>';
	link[1] = '<span>電話：(04)22840497、(04)22840498</span><br>';
	link[2] = '<span>傳真：(04)22853869</span><br>';
	link[3] = '<span>網址：www.cs.nchu.edu.tw</span><br>';

	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('contactmesg').innerHTML = randomlink;

}


function sort2(){
	var link = [];
	link[0] = '<span>位置：國立中興大學理學大樓7-10樓</span><br>';
	link[1] = '<span>電話：(04)22840497、(04)22840498</span><br>';
	link[2] = '<span>傳真：(04)22853869</span><br>';
	link[3] = '<span>網址：www.cs.nchu.edu.tw</span><br>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('contactmesg').innerHTML = sortlink;

}


function reset2(){
	var link = [];
	link[0] = '<span>位置：國立中興大學理學大樓7-10樓</span><br>';
	link[1] = '<span>電話：(04)22840497、(04)22840498</span><br>';
	link[2] = '<span>傳真：(04)22853869</span><br>';
	link[3] = '<span>網址：www.cs.nchu.edu.tw</span><br>';

	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('contactmesg').innerHTML = resetlink;

	console.log(resetlink);
}
/*************************contact**************************/


/*************************doc**************************/

function random3(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><p><a href="四川大學介紹.doc" download="川大简介">川大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[1] = '<li><img src="images/icon1.png"><p><a href="厦门大学介绍.doc" download="厦大简介">厦大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[2] = '<li><img src="images/icon1.png"><p><a href="重庆大學介紹.doc" download="重大简介">重大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[3] = '<li><img src="images/icon1.png"><p><a href="中兴大學介紹.doc" download="兴大简介">兴大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[4] = '<li><img src="images/icon1.png"><p><a href="英雄内战.doc" download="英雄内战">英雄内战.doc</a><time>[2016-03-29]</time></p></li><br>';

	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('doc').innerHTML = randomlink;

}


function sort3(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><p><a href="四川大學介紹.doc" download="川大简介">川大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[1] = '<li><img src="images/icon1.png"><p><a href="厦门大学介绍.doc" download="厦大简介">厦大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[2] = '<li><img src="images/icon1.png"><p><a href="重庆大學介紹.doc" download="重大简介">重大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[3] = '<li><img src="images/icon1.png"><p><a href="中兴大學介紹.doc" download="兴大简介">兴大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[4] = '<li><img src="images/icon1.png"><p><a href="英雄内战.doc" download="英雄内战">英雄内战.doc</a><time>[2016-03-29]</time></p></li><br>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('doc').innerHTML = sortlink;

}


function reset3(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><p><a href="四川大學介紹.doc" download="川大简介">川大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[1] = '<li><img src="images/icon1.png"><p><a href="厦门大学介绍.doc" download="厦大简介">厦大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[2] = '<li><img src="images/icon1.png"><p><a href="重庆大學介紹.doc" download="重大简介">重大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[3] = '<li><img src="images/icon1.png"><p><a href="中兴大學介紹.doc" download="兴大简介">兴大简介.doc</a><time>[2016-03-29]</time></p></li><br>';
	link[4] = '<li><img src="images/icon1.png"><p><a href="英雄内战.doc" download="英雄内战">英雄内战.doc</a><time>[2016-03-29]</time></p></li><br>';

	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('doc').innerHTML = resetlink;

	console.log(resetlink);
}
/*************************doc**************************/


/*************************honor**************************/

function random4(){
	var iconImg0 = document.getElementById( "TX0" );
	var iconImg1 = document.getElementById( "TX1" );
	var iconImg2 = document.getElementById( "TX2" );
	var iconImg3 = document.getElementById( "TX3" );
	var iconImg4 = document.getElementById( "TX4" );
	
	var link = [ "TX1", "TX2", "TX3", "TX4", "TX5"];
	
	link.sort(function(){ return 0.5 - Math.random() });
	  iconImg0.setAttribute( "src", "images/teachers/" + link[0] + ".bmp" );
	  iconImg1.setAttribute( "src", "images/teachers/" + link[1] + ".bmp" );
	  iconImg2.setAttribute( "src", "images/teachers/" + link[2] + ".bmp" );
	  iconImg3.setAttribute( "src", "images/teachers/" + link[3] + ".bmp" );
	  iconImg4.setAttribute( "src", "images/teachers/" + link[4] + ".bmp" );

/************这样写是错的**********/
/*
	
	var link = [ "TX1", "TX2", "TX3", "TX4", "TX5"];
	for (var i = 0; i < link.length; i++) {
		var id = TX + i;									//我猜是这里表达有问题    不然呢
		var iconImg[i] = document.getElementById(id);
	}
	link.sort(function(){ return 0.5 - Math.random() });
	 for (var j = 0; j < link.length; j++) {
	  iconImg[j].setAttribute( "src", "images/teachers/" + link[j] + ".bmp" );
	  }

 */
/************而且没懂这是为啥，本宝宝只是用了两个for循环啊OMG**********/

}


function sort4(){
	var iconImg0 = document.getElementById( "TX0" );
	var iconImg1 = document.getElementById( "TX1" );
	var iconImg2 = document.getElementById( "TX2" );
	var iconImg3 = document.getElementById( "TX3" );
	var iconImg4 = document.getElementById( "TX4" );
	
	var link = [ "TX1", "TX2", "TX3", "TX4", "TX5"];
	
	  iconImg0.setAttribute( "src", "images/teachers/" + link[4] + ".bmp" );
	  iconImg1.setAttribute( "src", "images/teachers/" + link[3] + ".bmp" );
	  iconImg2.setAttribute( "src", "images/teachers/" + link[2] + ".bmp" );
	  iconImg3.setAttribute( "src", "images/teachers/" + link[1] + ".bmp" );
	  iconImg4.setAttribute( "src", "images/teachers/" + link[0] + ".bmp" );



}


function reset4(){
	var iconImg0 = document.getElementById( "TX0" );
	var iconImg1 = document.getElementById( "TX1" );
	var iconImg2 = document.getElementById( "TX2" );
	var iconImg3 = document.getElementById( "TX3" );
	var iconImg4 = document.getElementById( "TX4" );
	
	var link = [ "TX1", "TX2", "TX3", "TX4", "TX5"];
	
	  iconImg0.setAttribute( "src", "images/teachers/" + link[0] + ".bmp" );
	  iconImg1.setAttribute( "src", "images/teachers/" + link[1] + ".bmp" );
	  iconImg2.setAttribute( "src", "images/teachers/" + link[2] + ".bmp" );
	  iconImg3.setAttribute( "src", "images/teachers/" + link[3] + ".bmp" );
	  iconImg4.setAttribute( "src", "images/teachers/" + link[4] + ".bmp" );
}
/*************************honor**************************/



/*************************intro**************************/

function random5(){
	var link = [];
	link[0] = '<li><a href="overview.html">概观</a></li>';
	link[1] = '<li><a href="organization.html">组成人员</a></li>';
	link[2] = '<li><a href="location.html">本系地址</a></li>';

	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('fenlei').innerHTML = randomlink;

}


function sort5(){	var link = [];
	link[0] = '<li><a href="overview.html">概观</a></li>';
	link[1] = '<li><a href="organization.html">组成人员</a></li>';
	link[2] = '<li><a href="location.html">本系地址</a></li>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('fenlei').innerHTML = sortlink;

}


function reset5(){
	var link = [];
	link[0] = '<li><a href="overview.html">概观</a></li>';
	link[1] = '<li><a href="organization.html">组成人员</a></li>';
	link[2] = '<li><a href="location.html">本系地址</a></li>';

	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('fenlei').innerHTML = resetlink;

	console.log(resetlink);
}
/*************************intro**************************/


/*************************lab**************************/

function random6(){
	var link = [];
	link[0] = '<img  src="images/lab1.jpg"  width="160px" /><div class="div16"><h4>網路與交換系統實驗室<br>指導教授：	林偉<br> </h4><a href="http://syslab.cs.nchu.edu.tw/">Network and Switch Systems lab</a></div>';
	link[1] = '<img  src="images/lab2.jpg"  width="160px" /><div class="div16"><h4>影像處理及多媒體資料庫實驗室<br>指導教授：	黃博惠<br> </h4><a href="	http://imdb.cs.nchu.edu.tw/"> Image Processing and Multimedia Database Lab</a></div>';
	link[2] = '<img  src="images/lab3.jpg"  width="160px" /><div class="div16">	<h4>資訊安全實驗室<br>指導教授：	詹進科<br> </h4><a href="	http://securitylab.cs.nchu.edu.tw/"> Information Security Lab</a></div>';
	link[3] = '<img  src="images/lab4.jpg"  width="160px" /><div class="div16"><h4>醫學影像處理實驗室<br>指導教授：	喻石生<br> </h4><a href="http://miplab.cs.nchu.edu.tw/"> Medical Image Processing Lab</a></div>';
	link[4] = '<img  src="images/lab5.jpg"  width="160px" /><div class="div16"><h4>超大型積體電路/電腦輔助設計實驗室 <br>指導教授：王行健<br> </h4><a href="http://vlsilab.cs.nchu.edu.tw/"> VLSI/CAD Lab</a></div>';

	link.sort(function(){ return 0.5 - Math.random() })

	document.getElementById('newlab1').innerHTML = link[0];
	document.getElementById('newlab2').innerHTML = link[1];
	document.getElementById('newlab3').innerHTML = link[2];
	document.getElementById('newlab4').innerHTML = link[3];
	document.getElementById('newlab5').innerHTML = link[4];



}


function sort6(){	var link = [];
	var link = [];
	link[0] = '<img  src="images/lab1.jpg"  width="160px" /><div class="div16"><h4>網路與交換系統實驗室<br>指導教授：	林偉<br> </h4><a href="http://syslab.cs.nchu.edu.tw/">Network and Switch Systems lab</a></div>';
	link[1] = '<img  src="images/lab2.jpg"  width="160px" /><div class="div16"><h4>影像處理及多媒體資料庫實驗室<br>指導教授：	黃博惠<br> </h4><a href="	http://imdb.cs.nchu.edu.tw/"> Image Processing and Multimedia Database Lab</a></div>';
	link[2] = '<img  src="images/lab3.jpg"  width="160px" /><div class="div16">	<h4>資訊安全實驗室<br>指導教授：	詹進科<br> </h4><a href="	http://securitylab.cs.nchu.edu.tw/"> Information Security Lab</a></div>';
	link[3] = '<img  src="images/lab4.jpg"  width="160px" /><div class="div16"><h4>醫學影像處理實驗室<br>指導教授：	喻石生<br> </h4><a href="http://miplab.cs.nchu.edu.tw/"> Medical Image Processing Lab</a></div>';
	link[4] = '<img  src="images/lab5.jpg"  width="160px" /><div class="div16"><h4>超大型積體電路/電腦輔助設計實驗室 <br>指導教授：王行健<br> </h4><a href="http://vlsilab.cs.nchu.edu.tw/"> VLSI/CAD Lab</a></div>';


	document.getElementById('newlab1').innerHTML = link[4];
	document.getElementById('newlab2').innerHTML = link[1];
	document.getElementById('newlab3').innerHTML = link[3];
	document.getElementById('newlab4').innerHTML = link[2];
	document.getElementById('newlab5').innerHTML = link[0];



}


function reset6(){
	var link = [];
	link[0] = '<img  src="images/lab1.jpg"  width="160px" /><div class="div16"><h4>網路與交換系統實驗室<br>指導教授：	林偉<br> </h4><a href="http://syslab.cs.nchu.edu.tw/">Network and Switch Systems lab</a></div>';
	link[1] = '<img  src="images/lab2.jpg"  width="160px" /><div class="div16"><h4>影像處理及多媒體資料庫實驗室<br>指導教授：	黃博惠<br> </h4><a href="	http://imdb.cs.nchu.edu.tw/"> Image Processing and Multimedia Database Lab</a></div>';
	link[2] = '<img  src="images/lab3.jpg"  width="160px" /><div class="div16">	<h4>資訊安全實驗室<br>指導教授：	詹進科<br> </h4><a href="	http://securitylab.cs.nchu.edu.tw/"> Information Security Lab</a></div>';
	link[3] = '<img  src="images/lab4.jpg"  width="160px" /><div class="div16"><h4>醫學影像處理實驗室<br>指導教授：	喻石生<br> </h4><a href="http://miplab.cs.nchu.edu.tw/"> Medical Image Processing Lab</a></div>';
	link[4] = '<img  src="images/lab5.jpg"  width="160px" /><div class="div16"><h4>超大型積體電路/電腦輔助設計實驗室 <br>指導教授：王行健<br> </h4><a href="http://vlsilab.cs.nchu.edu.tw/"> VLSI/CAD Lab</a></div>';

	document.getElementById('newlab1').innerHTML = link[0];
	document.getElementById('newlab2').innerHTML = link[1];
	document.getElementById('newlab3').innerHTML = link[2];
	document.getElementById('newlab4').innerHTML = link[3];
	document.getElementById('newlab5').innerHTML = link[4];

}
/*************************lab**************************/


/*************************namelist**************************/

function random7(){
	var link = [];
	link[0] = '<td>1</td><td>網路與交換系統實驗室</td><td>林  偉</td><td>林○永 林○霖</td><td>1</td> <td></td><td>0</td>';
	link[1] = '<td>2</td><td>醫學影像處理實驗室</td><td>喻石生</td><td>林○永 林○霖</td><td>3</td> <td></td><td>1</td>';
	link[2] = '<td>3</td><td>超大型積體電路/電腦輔助設計實驗室</td><td>王行健</td><td>佟○鵬</td><td>3</td> <td></td><td>1</td>';
	link[3] = '<td>4</td><td>人工智慧實驗室</td><td>洪國寶</td><td></td><td>3</td> <td></td><td>0</td>';
	link[4] = '<td>5</td><td>圖學多媒體暨虛擬實境實驗室</td><td>王宗銘</td><td></td><td>3</td> <td></td><td>1</td>';
	link[5] = '<td>6</td><td>資料挖掘與知識工程實驗室</td><td>廖宜恩</td><td></td><td>3</td> <td></td><td>0</td>';
	link[6] = '<td>7</td><td>資料工程實驗室</td><td>賈坤芳</td><td></td><td>3</td> <td></td><td>1</td>';

	link.sort(function(){ return 0.5 - Math.random() })

	document.getElementById('name1').innerHTML = link[0];
	document.getElementById('name2').innerHTML = link[1];
	document.getElementById('name3').innerHTML = link[2];
	document.getElementById('name4').innerHTML = link[3];
	document.getElementById('name5').innerHTML = link[4];
	document.getElementById('name6').innerHTML = link[5];
	document.getElementById('name7').innerHTML = link[6];



}


function sort7(){	var link = [];
	var link = [];
	link[0] = '<td>1</td><td>網路與交換系統實驗室</td><td>林  偉</td><td>林○永 林○霖</td><td>1</td> <td></td><td>0</td>';
	link[1] = '<td>2</td><td>醫學影像處理實驗室</td><td>喻石生</td><td>林○永 林○霖</td><td>3</td> <td></td><td>1</td>';
	link[2] = '<td>3</td><td>超大型積體電路/電腦輔助設計實驗室</td><td>王行健</td><td>佟○鵬</td><td>3</td> <td></td><td>1</td>';
	link[3] = '<td>4</td><td>人工智慧實驗室</td><td>洪國寶</td><td></td><td>3</td> <td></td><td>0</td>';
	link[4] = '<td>5</td><td>圖學多媒體暨虛擬實境實驗室</td><td>王宗銘</td><td></td><td>3</td> <td></td><td>1</td>';
	link[5] = '<td>6</td><td>資料挖掘與知識工程實驗室</td><td>廖宜恩</td><td></td><td>3</td> <td></td><td>0</td>';
	link[6] = '<td>7</td><td>資料工程實驗室</td><td>賈坤芳</td><td></td><td>3</td> <td></td><td>1</td>';


	document.getElementById('name1').innerHTML = link[4];
	document.getElementById('name2').innerHTML = link[1];
	document.getElementById('name3').innerHTML = link[3];
	document.getElementById('name4').innerHTML = link[2];
	document.getElementById('name5').innerHTML = link[5];
	document.getElementById('name6').innerHTML = link[0];
	document.getElementById('name7').innerHTML = link[6];



}


function reset7(){
	var link = [];
	link[0] = '<td>1</td><td>網路與交換系統實驗室</td><td>林  偉</td><td>林○永 林○霖</td><td>1</td> <td></td><td>0</td>';
	link[1] = '<td>2</td><td>醫學影像處理實驗室</td><td>喻石生</td><td>林○永 林○霖</td><td>3</td> <td></td><td>1</td>';
	link[2] = '<td>3</td><td>超大型積體電路/電腦輔助設計實驗室</td><td>王行健</td><td>佟○鵬</td><td>3</td> <td></td><td>1</td>';
	link[3] = '<td>4</td><td>人工智慧實驗室</td><td>洪國寶</td><td></td><td>3</td> <td></td><td>0</td>';
	link[4] = '<td>5</td><td>圖學多媒體暨虛擬實境實驗室</td><td>王宗銘</td><td></td><td>3</td> <td></td><td>1</td>';
	link[5] = '<td>6</td><td>資料挖掘與知識工程實驗室</td><td>廖宜恩</td><td></td><td>3</td> <td></td><td>0</td>';
	link[6] = '<td>7</td><td>資料工程實驗室</td><td>賈坤芳</td><td></td><td>3</td> <td></td><td>1</td>';

	document.getElementById('name1').innerHTML = link[0];
	document.getElementById('name2').innerHTML = link[1];
	document.getElementById('name3').innerHTML = link[2];
	document.getElementById('name4').innerHTML = link[3];
	document.getElementById('name5').innerHTML = link[4];
	document.getElementById('name6').innerHTML = link[5];
	document.getElementById('name7').innerHTML = link[6];

}
/*************************namelist**************************/



/*************************news**************************/


function random8(){
	var link = [];
	link[0] = '<li><p><a href="" target=_blank>104學年度中興大學資訊科學與工程學系大學部資訊專題競賽時程</a><time>[2016-03-29]</time></p></li>';
	link[1] = '<li><p><a href="" target=_blank>國立中興大學資訊科學與工程學系徵求系主任</a><time>[2016-03-29]</time></p></li>';
	link[2] = '<li><p><a href="" target=_blank>104學年度中興大學資訊科學與工程學系大學部資訊專題競賽時程</a><time>[2016-03-11]</time></p></li>';
	link[3] = '<li><p><a href="" target=_blank>公告 : 104學年度第 1 學期系定必修課程獎學金受推薦學生名單</a><time>[2016-02-22]</time></p></li>';
	link[4] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第5梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-02-05]</time></p></li>';
	link[5] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第4梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-01-31]</time></p></li>';
	link[6] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第3梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-01-28]</time></p></li>';
	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('newnews').innerHTML = randomlink;

}


function sort8(){
	var link = [];
	link[0] = '<li><p><a href="" target=_blank>104學年度中興大學資訊科學與工程學系大學部資訊專題競賽時程</a><time>[2016-03-29]</time></p></li>';
	link[1] = '<li><p><a href="" target=_blank>國立中興大學資訊科學與工程學系徵求系主任</a><time>[2016-03-29]</time></p></li>';
	link[2] = '<li><p><a href="" target=_blank>104學年度中興大學資訊科學與工程學系大學部資訊專題競賽時程</a><time>[2016-03-11]</time></p></li>';
	link[3] = '<li><p><a href="" target=_blank>公告 : 104學年度第 1 學期系定必修課程獎學金受推薦學生名單</a><time>[2016-02-22]</time></p></li>';
	link[4] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第5梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-02-05]</time></p></li>';
	link[5] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第4梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-01-31]</time></p></li>';
	link[6] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第3梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-01-28]</time></p></li>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('newnews').innerHTML = sortlink;

}


function reset8(){
	var link = [];
	link[0] = '<li><p><a href="" target=_blank>104學年度中興大學資訊科學與工程學系大學部資訊專題競賽時程</a><time>[2016-03-29]</time></p></li>';
	link[1] = '<li><p><a href="" target=_blank>國立中興大學資訊科學與工程學系徵求系主任</a><time>[2016-03-29]</time></p></li>';
	link[2] = '<li><p><a href="" target=_blank>104學年度中興大學資訊科學與工程學系大學部資訊專題競賽時程</a><time>[2016-03-11]</time></p></li>';
	link[3] = '<li><p><a href="" target=_blank>公告 : 104學年度第 1 學期系定必修課程獎學金受推薦學生名單</a><time>[2016-02-22]</time></p></li>';
	link[4] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第5梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-02-05]</time></p></li>';
	link[5] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第4梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-01-31]</time></p></li>';
	link[6] = '<li><p><a href="" target=_blank>國立中興大學105學年度資訊科學與工程學系碩士班第3梯次新生放棄產生的缺額獲遞補名單公告</a><time>[2016-01-28]</time></p></li>';
	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('newnews').innerHTML = resetlink;

	console.log(resetlink);
}

/*************************news**************************/


/*************************photo**************************/

function random9(){
	var iconImg0 = document.getElementById( "pic0" );
	var iconImg1 = document.getElementById( "pic1" );
	var iconImg2 = document.getElementById( "pic2" );
	var iconImg3 = document.getElementById( "pic3" );
	var iconImg4 = document.getElementById( "pic4" );
	var iconImg5 = document.getElementById( "pic5" );
	
	var link = [ "pic1", "pic2", "pic3", "pic4", "pic5", "pic6"];
	
	link.sort(function(){ return 0.5 - Math.random() });

	  iconImg0.setAttribute( "src", "images/photo/" + link[0] + ".jpg" );
	  iconImg1.setAttribute( "src", "images/photo/" + link[1] + ".jpg" );
	  iconImg2.setAttribute( "src", "images/photo/" + link[2] + ".jpg" );
	  iconImg3.setAttribute( "src", "images/photo/" + link[3] + ".jpg" );
	  iconImg4.setAttribute( "src", "images/photo/" + link[4] + ".jpg" );
	  iconImg5.setAttribute( "src", "images/photo/" + link[5] + ".jpg" );


}


function sort9(){
	var iconImg0 = document.getElementById( "pic0" );
	var iconImg1 = document.getElementById( "pic1" );
	var iconImg2 = document.getElementById( "pic2" );
	var iconImg3 = document.getElementById( "pic3" );
	var iconImg4 = document.getElementById( "pic4" );
	var iconImg5 = document.getElementById( "pic5" );
	
	var link = [ "pic1", "pic2", "pic3", "pic4", "pic5", "pic6"];
	
	
	  iconImg0.setAttribute( "src", "images/photo/" + link[0] + ".jpg" );
	  iconImg1.setAttribute( "src", "images/photo/" + link[4] + ".jpg" );
	  iconImg2.setAttribute( "src", "images/photo/" + link[2] + ".jpg" );
	  iconImg3.setAttribute( "src", "images/photo/" + link[5] + ".jpg" );
	  iconImg4.setAttribute( "src", "images/photo/" + link[3] + ".jpg" );
	  iconImg5.setAttribute( "src", "images/photo/" + link[1] + ".jpg" );


}


function reset9(){
	var iconImg0 = document.getElementById( "pic0" );
	var iconImg1 = document.getElementById( "pic1" );
	var iconImg2 = document.getElementById( "pic2" );
	var iconImg3 = document.getElementById( "pic3" );
	var iconImg4 = document.getElementById( "pic4" );
	var iconImg5 = document.getElementById( "pic5" );
	
	var link = [ "pic1", "pic2", "pic3", "pic4", "pic5", "pic6"];
	
	
	  iconImg0.setAttribute( "src", "images/photo/" + link[0] + ".jpg" );
	  iconImg1.setAttribute( "src", "images/photo/" + link[1] + ".jpg" );
	  iconImg2.setAttribute( "src", "images/photo/" + link[2] + ".jpg" );
	  iconImg3.setAttribute( "src", "images/photo/" + link[3] + ".jpg" );
	  iconImg4.setAttribute( "src", "images/photo/" + link[4] + ".jpg" );
	  iconImg5.setAttribute( "src", "images/photo/" + link[5] + ".jpg" );

}
/*************************photo**************************/


/*************************prof**************************/


function random10(){
	var link = [];
	link[0] = '<h4>李德財<span>特約特聘講座教授</span></h4>';
	link[1] = '<p>學　　歷：	台大電機學士、美國伊利諾大學香檳分校電腦科學碩士、博士<br>';
	link[2] = '<span>經　　歷：	西北大學電機電腦工程系教授、美國國科會Program Director、中央研究院院士、中央研究院資訊所特聘研究員兼所長、台灣大學資工系特聘研究講座教授、交通大學資工系特聘研究講座教授、台灣科技大學榮譽研究講座教授<br></span>';
	link[3] = '<span>專長領域：	Design and Analysis of Algorithms、Computational Geometry、Web based Computing、Software Security、	Algorithm Visualization、Bioinformatics、Digital Libraries<br></span>';
	link[4] = '<span>聯絡電話：	886-2-2788-3799 #2209<br></span>';
	link[5] = '<span>個人網頁：	http://www.iis.sinica.edu.tw/pages/dtlee/index_zh.html<br></span>';
	link[6] = '<span>電子信箱：	dtleeat@iis.sinica.edu.tw</p></span>';
	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('newprof').innerHTML = randomlink;

}


function sort10(){
	var link = [];
	link[0] = '<h4>李德財<span>特約特聘講座教授</span></h4>';
	link[1] = '<p>學　　歷：	台大電機學士、美國伊利諾大學香檳分校電腦科學碩士、博士<br>';
	link[2] = '<span>經　　歷：	西北大學電機電腦工程系教授、美國國科會Program Director、中央研究院院士、中央研究院資訊所特聘研究員兼所長、台灣大學資工系特聘研究講座教授、交通大學資工系特聘研究講座教授、台灣科技大學榮譽研究講座教授<br></span>';
	link[3] = '<span>專長領域：	Design and Analysis of Algorithms、Computational Geometry、Web based Computing、Software Security、	Algorithm Visualization、Bioinformatics、Digital Libraries<br></span>';
	link[4] = '<span>聯絡電話：	886-2-2788-3799 #2209<br></span>';
	link[5] = '<span>個人網頁：	http://www.iis.sinica.edu.tw/pages/dtlee/index_zh.html<br></span>';
	link[6] = '<span>電子信箱：	dtleeat@iis.sinica.edu.tw</p></span>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('newprof').innerHTML = sortlink;

}


function reset10(){
	var link = [];
	link[0] = '<h4>李德財<span>特約特聘講座教授</span></h4>';
	link[1] = '<p>學　　歷：	台大電機學士、美國伊利諾大學香檳分校電腦科學碩士、博士<br>';
	link[2] = '<span>經　　歷：	西北大學電機電腦工程系教授、美國國科會Program Director、中央研究院院士、中央研究院資訊所特聘研究員兼所長、台灣大學資工系特聘研究講座教授、交通大學資工系特聘研究講座教授、台灣科技大學榮譽研究講座教授<br></span>';
	link[3] = '<span>專長領域：	Design and Analysis of Algorithms、Computational Geometry、Web based Computing、Software Security、	Algorithm Visualization、Bioinformatics、Digital Libraries<br></span>';
	link[4] = '<span>聯絡電話：	886-2-2788-3799 #2209<br></span>';
	link[5] = '<span>個人網頁：	http://www.iis.sinica.edu.tw/pages/dtlee/index_zh.html<br></span>';
	link[6] = '<span>電子信箱：	dtleeat@iis.sinica.edu.tw</p></span>';
	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('newprof').innerHTML = resetlink;

	console.log(resetlink);
}

/*************************prof**************************/



/*************************speech**************************/

function random11(){
	var link = [];
	link[0] = '<td>謝一平博士</td><td>待定</td><td>105年05月13日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[1] = '<td>洪偉淦總經理</td><td>待定</td><td>105年04月29日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[2] = '<td>李維斌局長</td><td>待定</td><td>105年04月08日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[3] = '<td>Mr. Dominic Cope</td><td>Changing the World with IoT</td><td>105年03月25日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[4] = '<td>楊福正博士</td><td>淺談災防及資訊安全</td><td>105年03月11日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';

	link.sort(function(){ return 0.5 - Math.random() })

	document.getElementById('name1').innerHTML = link[0];
	document.getElementById('name2').innerHTML = link[1];
	document.getElementById('name3').innerHTML = link[2];
	document.getElementById('name4').innerHTML = link[3];
	document.getElementById('name5').innerHTML = link[4];



}


function sort11(){	var link = [];
	var link = [];
	link[0] = '<td>謝一平博士</td><td>待定</td><td>105年05月13日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[1] = '<td>洪偉淦總經理</td><td>待定</td><td>105年04月29日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[2] = '<td>李維斌局長</td><td>待定</td><td>105年04月08日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[3] = '<td>Mr. Dominic Cope</td><td>Changing the World with IoT</td><td>105年03月25日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[4] = '<td>楊福正博士</td><td>淺談災防及資訊安全</td><td>105年03月11日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';


	document.getElementById('name1').innerHTML = link[4];
	document.getElementById('name2').innerHTML = link[1];
	document.getElementById('name3').innerHTML = link[3];
	document.getElementById('name4').innerHTML = link[2];
	document.getElementById('name5').innerHTML = link[0];



}


function reset11(){
	var link = [];
	link[0] = '<td>謝一平博士</td><td>待定</td><td>105年05月13日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[1] = '<td>洪偉淦總經理</td><td>待定</td><td>105年04月29日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[2] = '<td>李維斌局長</td><td>待定</td><td>105年04月08日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[3] = '<td>Mr. Dominic Cope</td><td>Changing the World with IoT</td><td>105年03月25日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';
	link[4] = '<td>楊福正博士</td><td>淺談災防及資訊安全</td><td>105年03月11日(星期五) 14:00</td><td>理學大樓1A03演講廳</td>';

	document.getElementById('name1').innerHTML = link[0];
	document.getElementById('name2').innerHTML = link[1];
	document.getElementById('name3').innerHTML = link[2];
	document.getElementById('name4').innerHTML = link[3];
	document.getElementById('name5').innerHTML = link[4];

}
/*************************speech**************************/


/*************************visitor**************************/

function random12(){
	var link = [];
	link[0] = '<span>昵称： <input type="text" name="nickname" class="message-box"></input></span>';
	link[1] = '<span>e-mail:<input type="text" name="e-mail" class="message-box"></input></span>';
	link[2] = '<span>电话： <input type="text" name="phone" class="message-box"></input></span>';
	link[3] = '<span>留言： <input type="textarea" rows="5" name="message" class="message-box" ></input></span>';

	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	randomlink += '<button  class="btn btn-lg btn-warning btn-block" type="submit">提交</button>';
	document.getElementById('newvisitor').innerHTML = randomlink;

}


function sort12(){	
	var link = [];
	link[0] = '<span>昵称： <input type="text" name="nickname" class="message-box"></input></span>';
	link[1] = '<span>e-mail:<input type="text" name="e-mail" class="message-box"></input></span>';
	link[2] = '<span>电话： <input type="text" name="phone" class="message-box"></input></span>';
	link[3] = '<span>留言： <input type="textarea" rows="5" name="message" class="message-box" ></input></span>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	sortlink += '<button  class="btn btn-lg btn-warning btn-block" type="submit">提交</button>';

	document.getElementById('newvisitor').innerHTML = sortlink;

}


function reset12(){
	var link = [];
	link[0] = '<span>昵称： <input type="text" name="nickname" class="message-box"></input></span>';
	link[1] = '<span>e-mail:<input type="text" name="e-mail" class="message-box"></input></span>';
	link[2] = '<span>电话： <input type="text" name="phone" class="message-box"></input></span>';
	link[3] = '<span>留言： <input type="textarea" rows="5" name="message" class="message-box" ></input></span>';

	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	resetlink += '<button  class="btn btn-lg btn-warning btn-block" type="submit">提交</button>';

	document.getElementById('newvisitor').innerHTML = resetlink;

}
/*************************visitor**************************/

/*************************share**************************/

function random13(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><p><a href="#" download="">洪夢韓赴國外研修心得分享.pdf</a><time>[2016-03-29]</time></p></li>';
	link[1] = '<li><img src="images/icon1.png"><p><a href="#" download="">曾筱芸赴國外研修心得分享.pdf</a><time>[2016-03-29]</time></p></li>';

	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
		randomlink += '<br>';

	}
	document.getElementById('newdownload').innerHTML = randomlink;

}


function sort13(){	
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><p><a href="#" download="">洪夢韓赴國外研修心得分享.pdf</a><time>[2016-03-29]</time></p></li>';
	link[1] = '<li><img src="images/icon1.png"><p><a href="#" download="">曾筱芸赴國外研修心得分享.pdf</a><time>[2016-03-29]</time></p></li>';

	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
		sortlink += '<br>';
	}

	document.getElementById('newdownload').innerHTML = sortlink;

}


function reset13(){
	var link = [];
	link[0] = '<li><img src="images/icon1.png"><p><a href="#" download="">洪夢韓赴國外研修心得分享.pdf</a><time>[2016-03-29]</time></p></li>';
	link[1] = '<li><img src="images/icon1.png"><p><a href="#" download="">曾筱芸赴國外研修心得分享.pdf</a><time>[2016-03-29]</time></p></li>';

	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
		resetlink += '<br>';

	}

	document.getElementById('newdownload').innerHTML = resetlink;

}
/*************************share**************************/




/*************************sitemap**************************/


function random14(){
	var link = [];
	link[0] = '<li><a href="honor.html" target="_blank">荣誉榜</a></li>';
	link[1] = '<li><a href="video.html" target="_blank">视频分享</a></li>';
	link[2] = '<li><a href="doc.html" target="_blank">会议记录</a></li>';
	link[3] = '<li><a href="speech.html" target="_blank">专题演讲</a></li>';
	link[4] = '<li><a href="room.html" target="_blank">学生名册</a></li>';
	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('table').innerHTML = randomlink;

}


function sort14(){
	var link = [];
	link[0] = '<li><a href="honor.html" target="_blank">荣誉榜</a></li>';
	link[1] = '<li><a href="video.html" target="_blank">视频分享</a></li>';
	link[2] = '<li><a href="doc.html" target="_blank">会议记录</a></li>';
	link[3] = '<li><a href="speech.html" target="_blank">专题演讲</a></li>';
	link[4] = '<li><a href="room.html" target="_blank">学生名册</a></li>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('table').innerHTML = sortlink;

}


function reset14(){
	var link = [];
	link[0] = '<li><a href="honor.html" target="_blank">荣誉榜</a></li>';
	link[1] = '<li><a href="video.html" target="_blank">视频分享</a></li>';
	link[2] = '<li><a href="doc.html" target="_blank">会议记录</a></li>';
	link[3] = '<li><a href="speech.html" target="_blank">专题演讲</a></li>';
	link[4] = '<li><a href="room.html" target="_blank">学生名册</a></li>';
	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('table').innerHTML = resetlink;

	console.log(resetlink);
}

/*************************sitemap**************************/



/*************************sitemap.en**************************/


function random15(){
	var link = [];
	link[0] = '<li><a href="honor.html" target="_blank">HONOR</a></li>';
	link[1] = '<li><a href="video.html" target="_blank">VIDEO</a></li>';
	link[2] = '<li><a href="doc.html" target="_blank">CONFERENCE</a></li>';
	link[3] = '<li><a href="speech.html" target="_blank">SPEECH</a></li>';
	link[4] = '<li><a href="room.html" target="_blank">NAMELIST</a></li>';
	var randomlink = '';
	link.sort(function(){ return 0.5 - Math.random() })
	for (var i = 0;i < link.length; i++) {
		randomlink += link[i];
	}
	document.getElementById('table').innerHTML = randomlink;

}


function sort15(){
	var link = [];
	link[0] = '<li><a href="honor.html" target="_blank">HONOR</a></li>';
	link[1] = '<li><a href="video.html" target="_blank">VIDEO</a></li>';
	link[2] = '<li><a href="doc.html" target="_blank">CONFERENCE</a></li>';
	link[3] = '<li><a href="speech.html" target="_blank">SPEECH</a></li>';
	link[4] = '<li><a href="room.html" target="_blank">NAMELIST</a></li>';
	var sortlink = '';
	for (var i = link.length - 1;i >= 0; i--) {
		sortlink += link[i];
	}
	document.getElementById('table').innerHTML = sortlink;

}


function reset15(){
	var link = [];
	link[0] = '<li><a href="honor.html" target="_blank">HONOR</a></li>';
	link[1] = '<li><a href="video.html" target="_blank">VIDEO</a></li>';
	link[2] = '<li><a href="doc.html" target="_blank">CONFERENCE</a></li>';
	link[3] = '<li><a href="speech.html" target="_blank">SPEECH</a></li>';
	link[4] = '<li><a href="room.html" target="_blank">NAMELIST</a></li>';
	var resetlink = '';
	for (var i = 0;i < link.length; i++) {
		resetlink += link[i];
	}
	document.getElementById('table').innerHTML = resetlink;

	console.log(resetlink);
}

/*************************sitemap.en**************************/