var today = new Date();var dayCheck = today.getDate();var monthCheck = today.getMonth();
if(((monthCheck == 00 && dayCheck <= 6) || (monthCheck == 11 && dayCheck >= 2))) {
	var snowMax=45;var snowColor=["#DDD","#EEE"];var snowEntity="❄️";var snowSpeed=0.75;var snowMinSize=8;var snowMaxSize=30;var snowRefresh=50;var snowStyles="cursor: default; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;";var snow=[],pos=[],coords=[],lefr=[],marginBottom,marginRight;function randomise(range){rand=Math.floor(range*Math.random());return rand;}
	function initSnow(){var snowSize=snowMaxSize- snowMinSize;marginBottom=document.body.scrollHeight- 5;marginRight=document.body.clientWidth- 15;for(i=0;i<=snowMax;i++){coords[i]=0;lefr[i]=Math.random()*15;pos[i]=0.03+ Math.random()/ 10;
	snow[i]=document.getElementById("flake"+ i);snow[i].style.fontFamily="inherit";snow[i].size=randomise(snowSize)+ snowMinSize;snow[i].style.fontSize=snow[i].size+"px";snow[i].style.color=snowColor[randomise(snowColor.length)];snow[i].style.zIndex=1000;snow[i].sink=snowSpeed*snow[i].size/5;snow[i].posX=randomise(marginRight- snow[i].size);snow[i].posY=randomise(2*marginBottom- marginBottom- 2*snow[i].size);snow[i].style.left=snow[i].posX+"px";snow[i].style.top=snow[i].posY+"px";}
	moveSnow();}
	function resize(){marginBottom=document.body.scrollHeight- 5;marginRight=document.body.clientWidth- 15;}
	function moveSnow(){for(i=0;i<=snowMax;i++){coords[i]+=pos[i];snow[i].posY+=snow[i].sink;snow[i].style.left=snow[i].posX+ lefr[i]*Math.sin(coords[i])+"px";snow[i].style.top=snow[i].posY+"px";if(snow[i].posY>=marginBottom- 2*snow[i].size||parseInt(snow[i].style.left)>(marginRight- 3*lefr[i])){snow[i].posX=randomise(marginRight- snow[i].size);snow[i].posY=0;}}
	setTimeout("moveSnow()",snowRefresh);}
	for(i=0;i<=snowMax;i++){document.write("<span id='flake"+ i+"' style='"+ snowStyles+"position:absolute;top:-"+ snowMaxSize+"'>"+ snowEntity+"</span>");}
	window.onresize=resize;window.onload=initSnow;
}
