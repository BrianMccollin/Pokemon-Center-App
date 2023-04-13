
function displayDetails (a) {
    const location=document.getElementById(a).getAttribute("data-src");
    document.getElementById("detail-img").setAttribute("src", location);
}
