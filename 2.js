let baga = +prompt('Bagany jaziniz')
let sani = +prompt('Kansha zat alasiz')


function kun(){
    

     if(baga * sani > 5000) {
        return (baga * sani) % 10;
     } else if (baga * sani > 10000) {
        return (baga * sani) % 20;
     } else if (baga * sani > 20000) {
        return (baga * sani) % 30;
     }

}

alert(kun())