let dropDown = document.querySelector(".subMneu");
let subNav = document.querySelector("#show-more-menu");

//   console.log(homburgerMenu) 
/* let xB = document.getElementById('x')
 */
dropDown.addEventListener("mouseenter", function(e){
    const ul = e.target.childNodes[3];
   /*  console.log(e.target.childNodes) */
    
    ul.style.display = 'block';
})
dropDown.addEventListener("mouseleave", function(e) {
  const ul = e.target.childNodes[3];
  ul.style.display = 'none'
})

subNav.addEventListener("mouseenter", function(e){
    const drop = e.target.childNodes[3];
/*     console.log(e.target.childNodes) */
    drop.style.display = 'block'
})
subNav.addEventListener("mouseleave", function(e) {
    const drop = e.target.childNodes[3];
    console.log(drop)
    drop.style.display = 'none'
})