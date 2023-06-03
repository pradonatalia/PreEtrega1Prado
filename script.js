let frutoSeco = Number(prompt("Bienvenido/a a Tienda Natural \nIngrese el fruto seco que quiere añadir (venta por kg): \n1: Maníes(100$/kg) \n2: Nueces(200$/kg) \n3: Almendras(300$/kg) \n4: Castañas de Cajú (250$/kg) \n0: para finalizar su compra"))
let total = 0
let kilos = 0

function pedido(num1, num2) {
    return num1 + num2
}

while (frutoSeco !== 0) {
    if (frutoSeco === 1) {
        total = pedido(100, total)
        kilos = pedido(1, kilos)
        frutoSeco = Number(prompt("Presione el valor deseado para continuar su compra:\n1: Maníes(100$/kg) \n2: Nueces(200$/kg) \n3: Almendras(300$/kg) \n4: Castañas de Cajú (250$/kg) \n0: para finalizar su compra"))
    } else if (frutoSeco === 2) {
        total = pedido(200, total)
        kilos = pedido(1, kilos)
        frutoSeco = Number(prompt("Presione el valor deseado para continuar su compra:\n1: Maníes(100$/kg) \n2: Nueces(200$/kg) \n3: Almendras(300$/kg) \n4: Castañas de Cajú (250$/kg) \n0: para finalizar su compra"))
    } else if (frutoSeco === 3) {
        total = pedido(300, total)
        kilos = pedido(1, kilos)
        frutoSeco = Number(prompt("Presione el valor deseado para continuar su compra:\n1: Maníes(100$/kg) \n2: Nueces(200$/kg) \n3: Almendras(300$/kg) \n4: Castañas de Cajú (250$/kg) \n0: para finalizar su compra"))
    } else if (frutoSeco === 4) {
        total = pedido(250, total)
        kilos = pedido(1, kilos)
        frutoSeco = Number(prompt("Presione el valor deseado para continuar su compra:\n1: Maníes(100$/kg) \n2: Nueces(200$/kg) \n3: Almendras(300$/kg) \n4: Castañas de Cajú (250$/kg) \n0: para finalizar su compra"))
    } else {
        frutoSeco = Number(prompt("Opción Incorrecta. Presione el valor deseado para continuar su compra:\n1: Maníes(100$/kg) \n2: Nueces(200$/kg) \n3: Almendras(300$/kg) \n4: Castañas de Cajú (250$/kg) \n0: para finalizar su compra"))
    }
}

alert("Su total por " + kilos + "kg de frutos secos es de " + total + "$. Gracias por su compra")
