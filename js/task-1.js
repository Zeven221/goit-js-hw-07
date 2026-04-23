const info = (object) => {
    const allLi = object.querySelectorAll("ul#categories>li")
    console.log("Number of categories:", allLi.length)
    for(const li of allLi){
        console.log(li.firstElementChild.textContent)
        console.log(li.lastElementChild.childElementCount)       
    }
    
}
info(document.querySelector("ul#categories"))