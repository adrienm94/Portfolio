// When the user clicks on the button, scroll to the top of the document
function goToTop() {

    console.log("btn cliqué");
    document.body.scrollTop = 0;
    
}


function scrollReveal() {

    ["s-right", "s-left", "s-top", "s-bottom"].forEach((className) => {
        ScrollReveal().reveal(`.${className}`, {
            delay: 100,
            duration: 1000,
            distance: "5%",
            origin: className.replace("s-", ""),
            reset: true
        });
    });

}
