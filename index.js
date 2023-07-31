let textf = document.querySelector('#textf');
let list = document.querySelector("#list");

textf.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addItem(this.value)
        this.value= ""
    }
})

let addItem = (textf) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${textf}<i></i>`;
    
    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })

    list.appendChild(listItem);
}

