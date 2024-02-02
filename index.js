const h1 = document.getElementById("heading1")
const b1 = document.getElementById("b1")

//state default
let color = true


// function toggle(){
//     if(color){
//         h1.style.color="purple"
//         h1.textContent = "Changed"
//         color = false
//     }
//     else{
//         h1.style.color= "red"
//         h1.textContent = "No change!"
//         color = true
//     }
// }

const toggle = () => {
    if(color){
        h1.style.color="purple"
        h1.textContent = "Changed"
        color = false
    }
    else{
       h1.style.color= "red"
        h1.textContent = "No change!"
        color = true
    }
}


console.log(h1)
b1.addEventListener("click",toggle)
//h1.style.color = "blue"
