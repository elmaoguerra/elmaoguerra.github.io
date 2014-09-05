var dibujo, lienzo, t, b;
function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	bDiana = document.getElementById("pintaDiana");

	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

	b.addEventListener("click", dibujarGrilla);
	bDiana.addEventListener("click", dibujarDiana);

	cosasRaras();

}
function dibujarGrilla ()
{
	var pony = lienzo;
	var rayas = Number(t.value);//10
	var ancho = 400, alto = 400;
	var linea, punto;
	var anchoLinea = ancho / rayas;//30
	var limiteX = ancho / anchoLinea;//10
	var limiteY = alto / anchoLinea;//10

	pony.strokeStyle = "#800";

	for(linea = 0; linea < limiteX; linea++)
	{
		punto = (linea * anchoLinea);//0,30,60,90,120,150,180,210,240,270
		
		pony.beginPath();

		pony.moveTo(punto, 0);
		pony.strokeStyle = "#800";
		//pony.lineTo(alto, ancho); //Asi es una linea horizontal
		pony.lineTo(ancho, alto-punto);
		pony.stroke();

		pony.closePath();

		if (linea!=0) {
			pony.beginPath();

			pony.moveTo(0, punto);
			pony.strokeStyle = "#008";
			pony.lineTo(alto-punto, ancho);
			pony.stroke();
			
			pony.closePath();

			pony.beginPath();

			pony.moveTo(0, alto-punto);
			pony.strokeStyle = "#F6F";
			pony.lineTo(ancho-punto, 0);
			pony.stroke();
			
			pony.closePath();
		}

		pony.beginPath();

		pony.moveTo(punto, alto);
		pony.strokeStyle = "#080";
		//pony.lineTo(alto, ancho); //Asi es una linea horizontal
		pony.lineTo(ancho, punto);
		pony.stroke();

		pony.closePath();
		
	}
}
function dibujarDiana(){	
	for (var i = 0; i < 5; i++) {
		lienzo.beginPath();
		if(i % 2 != 0){
			lienzo.fillStyle ="#99f614";
		}else{
			lienzo.fillStyle ="#7114f6";
		}
		
		//lienzo.globalAlpha = 0.5;
		//lienzo.strokeStyle = "#00F";
		lienzo.arc(200,200,100-(i*20), (Math.PI * 2), false);
		lienzo.fill();
		lienzo.closePath();
	}
}

function cosasRaras(){
	var dibujo2 = document.getElementById("otroCanvas");
	var ctx = dibujo2.getContext("2d");
	var ancho = 400;
	var alto = 400;
	var linea, punto;
	var anchoLinea = ancho / 15;//30
	var limiteX = ancho / anchoLinea;//10
	var limiteY = alto / anchoLinea;//10
	ctx.strokeStyle = "#080";
	for(linea = limiteX; linea >= 0; linea--)
	{
		punto = (linea * anchoLinea);//300,270,240
		ctx.beginPath();
		ctx.moveTo(punto, 0);
		//ctx.lineTo(alto, punto);
		ctx.lineTo(0, ancho-punto);
		ctx.stroke();
		ctx.closePath();
	}	

	escribeMiNombre(ctx);
}

function escribeMiNombre(contexto) {
  var ctx = contexto;

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
 
  ctx.font = "50px Helvetica";
  ctx.fillStyle = "Blue";
  ctx.fillText("Mauro Guerra", 60, 200);
}
