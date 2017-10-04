(function () {

    var headerTop = document.querySelector(".header-top");

    window.addEventListener("scroll", function(e) {
        if(document.body.scrollTop >= 90 || window.pageYOffset >= 90) {
            headerTop.classList.add("header-top_sticky");
        } else {
            headerTop.classList.remove("header-top_sticky");
        }
    }, false);
    
})();