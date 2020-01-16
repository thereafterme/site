//Owl Carousel
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        items: 1,
        transitionStyle: "fade"
    });

    $("#client-testi").owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true, 
    });

    $("#testi-two").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2]
    });

    $("#gallery-post").owlCarousel({
        autoPlay: 3000,
        items: 8,
        itemsDesktop : [1024,5],
        itemsDesktopSmall : [900,3],
        itemsTablet: [600,2],
    });

    $("#threepost").owlCarousel({
        autoPlay: 3000,
        items: 3,
        itemsDesktop : [1024,3],
        itemsDesktopSmall : [900,3],
        itemsTablet: [600,1],
    });

    $("#fourpost").owlCarousel({
        autoPlay: 3000,
        items: 4,
        itemsDesktop : [1024,3],
        itemsDesktopSmall : [900,2],
        itemsTablet: [600,1],
    });