const ModifyCustomStore_General = {
    data: {},

    methods: {
        init() {},

        init_load() {},

        mounted() {
            return this.methods.init();
        },

        loaded() {
            return this.methods.init_load();
        },
    },
};

jQuery(() => {
    ModifyCustomStore_General.mounted();
});

window.ModifyCustomStore_General = ModifyCustomStore_General;

window.lazyFunctions = {
    lazyScripts() {
        document.querySelectorAll('.e-lazy-script').forEach((script) => {
            script.src = script.getAttribute('data-src');
        });
    }
};

$(document).ready(function() {
    $('.e-main-banner__banner-list.e-desktop').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button class="slick-prev custom-prev"><</button>',
        nextArrow: '<button class="slick-next custom-next">></button>'
    });

    $('.product-carousel').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        autoplay: false,
        prevArrow: '<button class="slick-prev custom-prev"><</button>',
        nextArrow: '<button class="slick-next custom-next">></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
      
});