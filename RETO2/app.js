// function suma(a,b){
//     console.log(a+b)
// }
// suma(5,4)
// -----
// function suma(a,b){
//     return (a+b)
// }
// let value=suma(5,2)
// console.log(value)
//-----
// const suma=(a,b)=> a+b;
// console.log(suma(2,4))
//----
// const opera=(a,b)=>{
//     return{
//         suma:a+b,
//         resta:a-b

//     }
// }
// console.log(opera(3,4))
//---
//----
// const opera=(a,b)=>(
//     return{
//         suma:a+b,
//         resta:a-b

//     }
// )
// console.log(opera(3,4))
//---
// let persona={
//     nombre:'Shantal',
//     edad:21
// }
// // const {nombre,edad}=persona
// // console.log(nombre,edad)
// const persona2={
//     facultad:'FIS',
// }
// persona={
//     ...persona,
//     ...persona2,
//     hola:'hola',
// }
// console.log(persona)
// let arr1=[1,2,3]
// const arr2=[5,6,7]
// arr1=[...arr1,4,...arr2]
// console.log(arr1);

//PRACTICA DEL  CARRITO

const productos=[
    {
        id:1,
        nombre:'Pizza America',
        precio:25,
    },
    {
        id:2,
        nombre:'Pizza Española',
        precio:30,
    },
    {
        id:3,
        nombre:'Pizza Latina',
        precio:35,
    }
]

let rpt;
let  carrito=[];
const agregarCarrito=(productId,quantity)=>{
    const product=productos.find(product=> product.id==productId);
    carrito=[...carrito,{
        ...product,
        cantidad:quantity,
    }]
}


const calcularTotal=()=>{
    let total=0;
     for(let i=0;i<carrito.length;i++){
        total=carrito[i].cantidad*carrito[i].precio+total; 
    }
    console.log('En total pagará S/.'+total);
}

while(rpt!=0){
    let productId=prompt('ingrese el id del producto: \n1 :Pizza America \n2 :Pizza Española \n3:Pizza Latina');
    let c=prompt('ingrese la cantidad');
    agregarCarrito(productId,c)
    rpt=prompt('Desea continuar:  si=cualquier tecla no=0')
    if(rpt==0){
         calcularTotal()
    }
 }
