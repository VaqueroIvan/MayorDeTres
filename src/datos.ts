const montoLimite: number = 1000;
const porcentajeDescuento: number = 0.1;

let precio = <HTMLInputElement>document.getElementById("precio");
let cantidad = <HTMLInputElement>document.getElementById("cantidad");
let btnEnviar: HTMLElement = <HTMLElement>document.getElementById("btnEnviar");

let precioCompra: number;
let precioProducto: number;
let cantidadProductos: number;
let descuento: number = 0;

btnEnviar.addEventListener("click", () => {
  precioProducto = Number(precio.value);
  cantidadProductos = Number(cantidad.value);

  precioCompra = precioProducto * cantidadProductos;
  if (precioCompra > montoLimite) {
    descuento = precioCompra * porcentajeDescuento;
    precioCompra = precioCompra - descuento;
  }
  console.log("El precio total es $" + precioCompra);
});
