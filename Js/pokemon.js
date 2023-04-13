function tbubble(some) {
    const container = document.createElement("div");
    container.setAttribute("class", "text-bubble");
    document.getElementById("mess").appendChild(container);
    container.appendChild(some);
}

function myFunction(){
    const x=document.getElementById("textbox").value;
    const textnode = document.createTextNode(x);
    const para= document.createElement("p");

    para.setAttribute("class", "mtex");
    para.appendChild(textnode);
    tbubble(para);
}
