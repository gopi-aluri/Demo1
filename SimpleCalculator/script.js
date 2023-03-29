function a1(x){
	document.getElementById("s1").value+=x.innerText;
}
function a2(){
	var x=document.getElementById("s1").value 
	var b=eval(x);
	document.getElementById("s1").value=b;
}
function a3(){
	document.getElementById("s1").value=" ";
}
function a4(){
	var sh=document.getElementById("s1").value 
	var n=" ";
	for(i=0;i<sh.length-1;i++){
		n=n+sh[i];
	}
	document.getElementById("s1").value=n;
}
