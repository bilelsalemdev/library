let classesToAdd = document.querySelector(".classes-to-add");

let classList = document.querySelector(".classes-list");
let span;
classesToAdd.addEventListener("blur",function(e){
    let list=e.target.value.toLowerCase().split(" ");
    for ( let i=0 ; i < list.length; i++){
         span = document.createElement("span");
         classList.querySelector("div").appendChild(span);

         span.textContent = `${list[i]}`;
    }
    
    e.target.value = "";
} );
let classesToRemove=document.querySelector('.classes-to-remove');

classesToRemove.addEventListener("blur",function(e){
    let spans = classList.querySelectorAll("span");
    
    let list = e.target.value.toLowerCase().split(" ");
    for (let i = 0; i < list.length; i++) {
     for (let j = 0; j < spans.length; j++) {
       if (spans[j].textContent === `${list[i]}`) {
         spans[j].remove();
       }
     }

      
    }
    
    e.target.value = "";
})
console.log(classList.querySelector('div'))