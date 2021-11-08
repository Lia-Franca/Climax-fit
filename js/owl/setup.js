$('.carousel-customers').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    center: true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
            margin:150,
        }
    }
})


// $('.carousel-customers').owlCarousel({
//     items: 1,
//     loop:true,
//     margin:-10,
//     nav:true,

//     responsive:{
//         0:{
//             items:1
//         },
//     }
// })


// $('.carousel-customers').owlCarousel({
//     items: 3,
//     loop:true,
//     margin:10,
//     nav:true,
//     center: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         1000:{
//             items:1
//         },

//     }
// })

$('.owl-carousel').owlCarousel({
    items: 4,
    loop:false,
    margin:18,
    merge:true,
    center: true,
    nav: true,
    responsive:{
        600:{
            mergeFit:true,
            nav:true,
            // items: 2,
            
        },
        1000:{
            mergeFit:false,
            nav:true,

        }
    }
})

$('.carousel-bonus').owlCarousel({
    items: 4,
    loop:false,
    margin: 0,
    merge:true,
    center: true,
    nav: true,
    responsive:{
        600:{
            mergeFit:true,
            nav:true,
            // items: 2,
            
        },
        1000:{
            mergeFit:false,
            nav:true,

        }
    }
})

