const carritoDeCompras = {
    productos: [],
    agregarProducto(nombre, precio) {
        this.productos.push({ nombre, precio });
        alert(`${nombre} se ha añadido al carrito.`);
    },
    mostrarCarrito() {
        if (this.productos.length === 0) {
        alert("El carrito de compras está vacío.");
        } else {
        const listaProductos = this.productos.map((producto, index) =>
        `${index + 1}. ${producto.nombre} - $${producto.precio}`
        ).join('\n');
        alert(`Carrito de Compras:\n${listaProductos}`);
    }
    },
    calcularTotal() {
        const total = this.productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        return total;
    },
};

function interactuarConUsuario() {
    while (true) {
        const opcion = prompt(`Selecciona una opción:
1. Agregar producto
2. Mostrar carrito
3. Calcular total
4. Salir`);

    switch (opcion) {
        case "1":
        const nombreProducto = prompt("Ingresa el nombre del producto:");
        const precioProducto = parseFloat(prompt("Ingresa el precio del producto:"));
        carritoDeCompras.agregarProducto(nombreProducto, precioProducto);
        break;

        case "2":
            carritoDeCompras.mostrarCarrito();
            break;

        case "3":
            alert(`El total de la compra es: $${carritoDeCompras.calcularTotal()}`);
            break;

        case "4":
            alert("Gracias por usar el carrito de compras.");
            return;

        default:
            alert("Opción no válida. Por favor, elige una opción válida.");
        }
    }
}

interactuarConUsuario();

