$(function () {
    
    var hidden = true;
    
    $("header .top-search-link a").on("click", function(){
        if(hidden) {
            hidden = false;
            $(this).find("img").attr("src","../images/close-icon.png");
            $("#search-panel").slideDown();
        }
        else {
            hidden = true;
            $(this).find("img").attr("src","../images/search-icon.png");
            $("#search-panel").slideUp();
        }
                                
    });
});