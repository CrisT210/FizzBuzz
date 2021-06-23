let arr = [];
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        arr.push("FizzBuzz");
        console.log("FizzBuzz");
    }else if( i % 3 == 0){
        arr.push("Fizz");
        console.log("Fizz");
    }else if(i % 5 == 0){
        arr.push("Buzz");
        console.log("Buzz");
    }else{
        arr.push(i);
        console.log(i);
    }
}

function agregarLista(){
    let lista = document.querySelector("#lista");
    arr.forEach((data, idx)=>{
        let li = document.createElement("li");
        li.className = "list-group-item text-center border rounded-0 col-lg-1";
        let contenido = document.createTextNode(data);
        lista.appendChild(li);
        li.appendChild(contenido);
    })
}
agregarLista();





