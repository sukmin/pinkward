(function(){

	var bodyHtml = document.body.innerHTML;
	var alternativeHtml = "";
	for(var i = 0 ; i < bodyHtml.length ; i++){
		if( bodyHtml.charCodeAt(i) == 8203 ){ //16진수:200B -> 10진수:8203
			alternativeHtml += "<img height='48' width='48' src='http://static1.wikia.nocookie.net/__cb20131101031916/leagueoflegends/images/d/d2/Warding_Totem_item.jpg'>";
		}else{
			alternativeHtml += bodyHtml[i];
		}
	}
	
	document.body.innerHTML = alternativeHtml;

	//아무데나 클릭하면 원래 페이지로 재로딩
	document.addEventListener("click", function(){
    	location.reload();
	});
	
}());