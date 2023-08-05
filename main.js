
//PRIMERA PRE- ENTREGA:

// let tortaIngresada = prompt(`Entre "Chocotorta", "Oreo", "Lemonpie" y "Cheesecake", ¿Cuál torta cree que es mi favorita?: `);

// function pistasTortaIngresada(tortaIngresada){
//     if(tortaIngresada === "Oreo"){
//         alert("La torta ingresada no es la correcta. PISTA: La torta correcta lleva una galletita parecida a su nombre.");
//     }
//     else if(tortaIngresada === "Cheesecake"){
//         alert("La torta ingresada no es la correcta. PISTA: La torta no lleva galletitas oreos.");
//     }
//     else if (tortaIngresada === "Lemonpie"){
//         alert("La torta ingresada no es la correcta. PISTA: La torta no es de queso.");
//     }
//     else{
//         alert("Lo ingresado debe encontrarse entre una de las opciones dichas anteriormente.");
//     }
// }

// while(tortaIngresada !== "Chocotorta"){
//     pistasTortaIngresada(tortaIngresada);
//     tortaIngresada = prompt("Tiene otra oportunidad. Ingrese nuevamente el nombre de la torta: ");
// }

// alert("FELICIDADES. ADIVINASTE MI TORTA FAVORITA.");


//SEGUNDA PRE- ENTREGA:

// const tortas = [
//     {nombre: "Chocotorta", precio: 100, stock: 20 },
//     {nombre: "Oreo", precio: 601, stock: 300 },
//     {nombre: "Lemonpie", precio: 1000, stock: 0},
//     {nombre: "Cheesecake", precio: 2000, stock: 50}
// ];

// let tortaIngresada = prompt("Ingrese el nombre de la torta que desea buscar: ");

// const findTorta = tortas.find(item => item.nombre === tortaIngresada);

// function datosTorta(findTorta){
//     alert(`
//     los datos de la torta que usted ingresó son los siguientes: 
//     Nombre: ${findTorta.nombre}
//     Precio: $ ${findTorta.precio}
//     cantidad de stock: ${findTorta.stock} unidades
//     `)
// }

// if(findTorta){
//     datosTorta(findTorta);
// }else{
//     let agregarTorta = prompt("¿Desea agregarla? Si/ No : ");
//     if(agregarTorta === "Si"){
//         class TortaAgregada{
//             constructor(nombreTorta, precioTorta, stockTorta){
//                 this.nombre = nombreTorta;
//                 this.precio = precioTorta;
//                 this.stock = stockTorta;
//             }
//         }

//         let nombreTortaIngresada = prompt("ingrese el nombre de la torta: ");
//         let precioTortaIngresada = parseInt(prompt("ingrese el precio de la torta: "));
//         let stockTortaIngresada = parseInt(prompt("ingrese el stock de la torta: "));

//         const tortaIngreso = new TortaAgregada(nombreTortaIngresada, precioTortaIngresada, stockTortaIngresada);
//         tortas.push(tortaIngreso);

//         const nombresTortas = tortas.map((item) => item.nombre);
//         alert("La torta fue cargada. Todas las tortas hasta ahora: " + nombresTortas);
//     }else{
//         alert("Ok. Hasta luego.");
//     }
// }


const tortas = [
    {nombre: "Chocotorta", precio: 100, stock: 20 },
    {nombre: "Oreo", precio: 601, stock: 300 },
    {nombre: "Lemonpie", precio: 1000, stock: 0},
    {nombre: "Cheesecake", precio: 2000, stock: 50}
];

let comenzar = prompt("¿desea comenzar? Si/ No");

while(comenzar === "Si"){
    let tortaBuscar = prompt("Ingrese el nombre de la torta que desea buscar: ");
    const findTorta = tortas.find(item => item.nombre === tortaBuscar);
    
    function datosTorta(findTorta){
    alert(`
    los datos de la torta que usted ingresó son los siguientes: 
    Nombre: ${findTorta.nombre}
    Precio: $ ${findTorta.precio}
    cantidad de stock: ${findTorta.stock} unidades
    `)
    }
    
    if(findTorta){
        datosTorta(findTorta);
    }else{
        let agregarTorta = prompt("¿Desea agregarla? Si/ No : ");
        if(agregarTorta === "Si"){
            class TortaAgregada{
                constructor(nombreTorta, precioTorta, stockTorta){
                    this.nombre = nombreTorta;
                    this.precio = precioTorta;
                    this.stock = stockTorta;
                }
            }
            
            let nombreTortaIngresada = prompt("ingrese el nombre de la torta: ");
            let precioTortaIngresada = parseInt(prompt("ingrese el precio de la torta: "));
            let stockTortaIngresada = parseInt(prompt("ingrese el stock de la torta: "));
            
            const tortaBuscar = new TortaAgregada(nombreTortaIngresada, precioTortaIngresada, stockTortaIngresada);
            tortas.push(tortaBuscar);

        const nombresTortas = tortas.map((item) => item.nombre);
        alert("La torta fue cargada. Todas las tortas hasta ahora: " + nombresTortas);
    }else{
        alert("Ok. Hasta luego.");
    }
}


}
