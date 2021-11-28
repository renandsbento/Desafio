let img = document.querySelector('img');
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");


let contador = 0;



btn1.addEventListener('click', () => {
    if (contador == 0){
        img.src = "predio2.jpg";
        contador +=1
    }
    else if (contador == 1){
        img.src = "predio3.jpg";
        contador +=1
    }
    else if (contador == 2){
        img.src = "predio4.jpg";
        contador += 1
    }
    else if (contador == 3){
        img.src = "predio1.jpg";
        contador = 0
    }
})

btn2.addEventListener('click', () => {
    if (contador == 0){
        img.src = "predio4.jpg";
        contador = 3
    }
    else if (contador == 1){
        img.src = "predio1.jpg";
        contador = 0
    }
    else if (contador == 2){
        img.src = "predio2.jpg";
        contador = 1
    }
    else if (contador == 3){
        img.src = "predio3.jpg";
        contador = 2
    
    }
    
})