$(document).on("ready", inicio);

function inicio () {
	//ya ha cargado la pagina
	$("#pdta-menu").on("click", transicion);
}
//Se activa cuando se clic en boton Personalizar
function transicion (){
	//Objeto js/JSON
	var cambiosCSS= {
		margin: "0.5em auto"
	}
	var cambiosCSSPerso= {
		height: "auto",
		opacity: "1",
		width: "80%",
		margin: "0.5em auto 6em auto"
	}
	$("#cata").css(cambiosCSS);
	$("#pdta").css(cambiosCSSPerso);
}