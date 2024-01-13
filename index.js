let precio = 400000

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");

let btnAdd = document.querySelector(".btn-add");
let btnRemove = document.querySelector(".btn-remove");

btnAdd.addEventListener("click", function () {
    let cantidadSpanLimpia = Number(cantidadSpan.innerHTML);
    let acumulador = cantidadSpanLimpia + 1;
    cantidadSpan.innerHTML = acumulador;
    totalSpan.innerHTML = acumulador * precio;
});

btnRemove.addEventListener("click",function (){
    let cantidadSpanLimpia = Number(cantidadSpan.innerHTML);
    let acumulador = cantidadSpanLimpia - 1;
    cantidadSpan.innerHTML = acumulador;
    totalSpan.innerHTML = acumulador * precio;
});