const theme = {
    dark : {"color" : "white", "btnbackgroundColor" :"white" ,"backgroundColor" :"black" , "left" : "auto" , "right" : "5px" },
    light : {"color" : "black","btnbackgroundColor" :"black" , "backgroundColor" :"white" , "left" : "5px" , "right" : "auto" }
}
let button = document.querySelector(".button");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let toggleButton = document.querySelector(".toggleButton");
toggleButton.addEventListener("click",()=>{
    let prev = button.style.left;
    let mode = prev == "5px" ? "dark":"light";
    button.style.right = theme[mode].right;
    button.style.left = theme[mode].left;
    button.style.backgroundColor = theme[mode].backgroundColor;
    toggleButton.style.backgroundColor = theme[mode].btnbackgroundColor;
    body.style.backgroundColor = theme[mode].backgroundColor;
    h1.style.color = theme[mode].color;
    // button.style. = ;
    
});