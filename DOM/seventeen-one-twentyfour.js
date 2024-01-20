/*

Window Object :-> the window object represents an open window in a browser. It is browser's object (not javascript) and is automatically created by browser.

->It is a global object with lots of properties and method.

*/

//DOM -> document object model

/*
We access all the elements or tags of HTML in javascript in form of an object and this object is called document and this document is in window object of our javascript.

->So when a webpage is loaded a dom is created for our model by the browser.

->Purpose of dom is to dynamically( mean on run-time) change or manipulate our webpage

*/
/* console.dir(document);
let doc = document.querySelector(".head");
console.log(doc);
console.dir(doc);
console.dir(document.querySelector("ul").innerHTML); */
/*
DOM MANIPULATION :
->tagName : return the name of tags for element nodes.
->innerText : return the text content of the element and all its children.
->innerHTML : return the text and html content both. 
->textContent : returns textual content for hidden element.
*/

/* let head = document.querySelector("h1").innerText;
console.log(head);
document.querySelector("h1").innerText = head + " by Apna College !"; */ 


/* let div = document.querySelectorAll(".box");
console.log(div);
div[0].innerHTML = "hello";
div[1].innerHTML = "Uzaifa";
div[2].innerHTML = "Siddiqui"; */

/// getAttribute to get name of attributes and with setAttribute to change that name.

/* let div = document.querySelector("div");
console.log(div)
let id = div.getAttribute("id");
console.log(id); */

//first get that tag through querySelector and then use style to apply CSS on them through Javascript.

/* div.style.backgroundColor = "dodgerblue";
div.style.fontSize = "5rem"; */


//-> How to enter new element through DOM manipulation.
/*
First create that element :

-> let el = document.createElement("div");

 then can place that elements at different positions.

 1 -> node.append(el) -> adds element at the end of node(inside)

 2 -> node.prepend(el) -> adds at the start of node (inside)

3 -> node.before(el) -> adds before the node (outside)

4 -> node.after(el) -> adds after the node(outside)

*/

let el = document.createElement("div");
el.innerText = "button";
el.style.backgroundColor = "green";
el.style.fontSize = "1rem";
el.style.margin= "1rem";
el.style.paddingLeft = "1rem";
el.style.paddingRight = "1rem";
el.style.display = "inline";


let div = document.querySelector("div");
console.log(div);
 
//div.append(el);
//div.prepend(el);
//div.before(el);
//div.after(el);


/* Was just checking how to combine if conditions and dom together.

 if (el.style.margin === "1rem"){
    el.style.margin = "2rem";
    div.before(el);
} */

 // to delete an element we use node.remove()

 // PRACTICE QUESTIONS;
let button = document.createElement("button");
button.innerText = "click me";
button.style.backgroundColor = "red";
button.style.color = "white";
let body = document.querySelector("body");
body.prepend(button);

let p = document.querySelector("p");
let Class = p.getAttribute("class");

// So we have a problem here because the setAttribute method can only be used to change attributes not add so we can use classList which is a list can be used to add multiple classes in an element .

p.setAttribute("class","paragraph");

p.classList.add("para"); //-> can be used to add another class in exsisting class list.
p.classList.remove("paragraph");