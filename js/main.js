const dataUser = () =>{
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su apellido');
    let dni = prompt('Ingrese su DNI');

    return datosCompletos = (`${nombre} ${apellido}, DNI: ${dni}`);

}

const dolar = { style: 'currency', currency: 'USD' };
const formatNum = new Intl.NumberFormat('en-US', dolar);

function selectingProduct (datosCompletos){
    let totalGasto = 0;
    let seguirComprando = true;

    while(seguirComprando){
        let prodSelect = parseInt(prompt('Seleccione un producto por su numero de identificacion: \n 1: Falcon \n 2: Etios \n 3: Gol \n 4:Camaro \n 5: Mazda'))

        switch(prodSelect){
            case 1:
                totalGasto = totalGasto + 1250
            break;
            case 2:
                totalGasto = totalGasto + 4500
            break;
            case 3:
                totalGasto = totalGasto + 2500
            break;
            case 4:
                totalGasto = totalGasto + 8700
            break;
            case 5:
                totalGasto = totalGasto + 12800
            break;
            default:
                alert('El codigo del producto que ingreso no existe');
            break;
        }
        alert(`Su total es de USD ${formatNum.format(totalGasto)}`);
        let sigueLaCompra = parseInt(prompt('¿Quiere seguir comprando? 1: Sí, 2: No'))
        if(sigueLaCompra !== 1){
            seguirComprando = false
        }
    }
    alert(`Gracias ${datosCompletos}! Usted ha gastado un total de USD ${formatNum.format(totalGasto)}`)
}


window.addEventListener('load', function(){
    let datosCompletos = dataUser();
    selectingProduct(datosCompletos)
})