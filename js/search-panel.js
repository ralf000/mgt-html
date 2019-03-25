var isSearchHidden = true;
var isMenuHidden = true;

function slideToggleSearch(){
    if(isSearchHidden) {
        isSearchHidden = false;
        $('header .top-search-link a').find('img').attr('src','../images/search-icon-close1.png');
        $('#search-panel').slideDown();
    }
    else {
        isSearchHidden = true;
        $('header .top-search-link a').find('img').attr('src','../images/icons/icon_search.png');
        $('#search-panel').slideUp();
    }
};

function slideToggleMenu(){
    if(isMenuHidden) {
        isMenuHidden = false;
        $('header .top-menu-link a').find('img').attr('src','../images/burger-menu-close.png');
        $('#menu-panel').slideDown();
    }
    else {
        isMenuHidden = true;
        $('header .top-menu-link a').find('img').attr('src','../images/burger-menu.png');
        $('#menu-panel').slideUp();
    }
};

function addHandlers() {
    $('header .top-search-link a').on('click', function(e){
        e.preventDefault();
        if(!isMenuHidden){
            slideToggleMenu();
            setTimeout(slideToggleSearch, 300);
        } else slideToggleSearch();
    });

    $('header .top-menu-link a').on('click', function(e){
        e.preventDefault();
        if(!isSearchHidden) {
            slideToggleSearch();
            setTimeout(slideToggleMenu, 300);
        } else slideToggleMenu();
    });
}

$(function () {
    addHandlers();
});