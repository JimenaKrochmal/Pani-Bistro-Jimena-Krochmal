
let tortaIngresada = prompt(`Entre "Chocotorta", "Oreo", "Lemonpie" y "Cheesecake", ¿Cuál torta cree que es mi favorita?: `);

function pistasTortaIngresada(tortaIngresada){
    if(tortaIngresada === "Oreo"){
        alert("La torta ingresada no es la correcta. PISTA: La torta correcta lleva una galletita parecida a su nombre.");
    }
    else if(tortaIngresada === "Cheesecake"){
        alert("La torta ingresada no es la correcta. PISTA: La torta no lleva galletitas oreos.");
    }
    else if (tortaIngresada === "Lemonpie"){
        alert("La torta ingresada no es la correcta. PISTA: La torta no es de queso.");
    }
    else{
        alert("Lo ingresado debe encontrarse entre una de las opciones dichas anteriormente.");
    }
}

while(tortaIngresada !== "Chocotorta"){
    pistasTortaIngresada(tortaIngresada);
    tortaIngresada = prompt("Tiene otra oportunidad. Ingrese nuevamente el nombre de la torta: ");
}

alert("FELICIDADES. ADIVINASTE MI TORTA FAVORITA.");