$(document).ready(function(){

	$('button').on('click', function(){

		var color = $(event.target).data('color');
		
		$('body').css("background-color", ( $(this).data("color")));
	
		window.localStorage.setItem("bg-color", color);

	});

});

	// ITINERAR POR CADA COLOR DEL ARRAY DE COLORES
// var colors = ['red','yellow'];

// for (var i=0; i<colors.length;i++){

// 	setTimeOut(
// 		setColor.bind({color: colors[i]}),1000*1);
// }

// function setColor() {
// 	document.body.style.backgroundColor = this.color;
// }