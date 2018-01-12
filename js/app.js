(function main(){
	$('.check div img').mouseenter(function(){
		$(".check div img").css({"transform":"rotate(360deg)","transition":"all 0.8s ease-in-out 0s"})
		console.log("cou")
	})
	$('.check div img').mouseleave(function(){
		$(".check div img").css({"transform":"rotate(-360deg)","transition":"all 0.8s ease-in-out 0s"})
		console.log("cou")
	})
})();