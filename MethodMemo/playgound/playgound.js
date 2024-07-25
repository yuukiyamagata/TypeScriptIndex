
let element = document.getElementById("div-03").previousElementSibling;
document.write("<p>Sibling of div-03</p><ol>");
while(element){
  document.write("<li>"  + element.nodeName + " "  + element.textContent + "</li>")
  element = element.previousElementSibling;
}
document.write("</ol>");