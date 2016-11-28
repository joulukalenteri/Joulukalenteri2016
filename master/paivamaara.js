/*Tämän päivän päivämäärän näyttämiseen tarkoitettu funktio*/
var tanaan = new Date();
		var paiva = tanaan.getDate();
		var kuukausi = tanaan.getMonth()+1;
		var vuosi = tanaan.getFullYear();
		
document.getElementById("tanaan").innerHTML= ("Tänään on "+paiva + "." + kuukausi + "." + vuosi);
