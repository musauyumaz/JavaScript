var sayi1 = 10;
sayi1 = "Musa Uyumaz"
//console.log(sayi1);
let student = {id:1, name:"Musa"}


function save(puan=10,ogrenci) {
    //console.log(ogrenci.name + " : " + puan)
}

save(undefined,student);

//rest
//params
//varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts);
//showProducts(10,"Elma","Armut","Karpuz");

//spread
console.log(Math.min(20,52,45,6))