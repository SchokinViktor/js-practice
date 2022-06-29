// Burger menu
const navOpener = document.querySelector('.nav-opener'),
    header = document.querySelector('.header');

navOpener.addEventListener('click', () => {
    header.classList.toggle('active');
})

//SWIPER


//slide generation
const slides = [
    {
        title: "SIMPLE & MODERN",
        subtitle: "WE MAKE THE WORLD BEAUTIFUL EVERYDAY",
        bgImage: "src/img/viktor/bg-img.png"
    },

    {
        title: "cool & stylish",
        subtitle: "WE MAKE THE WORLD stylish EVERYDAY",
        bgImage: "src/img/viktor/pattern-1.png"
    },

    {
        title: "Innovative & fresh",
        subtitle: "WE MAKE THE WORLD Innovative EVERYDAY",
        bgImage: "src/img/viktor/pattern-2.png"
    },

    {
        title: "Ecstatic & BEAUTIFUL",
        subtitle: "WE MAKE THE WORLD gorgeous EVERYDAY",
        bgImage: "src/img/viktor/pattern-3.png"
    },
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

slides.forEach(item => {
   
    swiperWrapper.innerHTML += `
    
    <div class="swiper-slide" style ="background: center no-repeat url(${item.bgImage}), linear-gradient(243.43deg, #7E5AFF 16.9%, #55B7FF 83.27%); background-size: cover;">
        <div class="hero-title-holder">
            <h1 class="title title-hero">${item.title}</h1>
            <strong class="subtitle subtitle-hero">${item.subtitle}</strong>
        </div>
    </div>
    `
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 3000,
      },
    speed: 1000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
});

// Slick Seghii

$('.column-list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Anna's part 
  let map;

  function initMap() {
      console.log('Console');
      map = new google.maps.Map(document.getElementById('map'), {
          center: { 
              lat: 40.650806682595785,
              lng: -73.90617094258538
          },
          zoom: 13,
          disableDefaultUI: true,
      });
  
      const ourPosition = new google.maps.LatLng(40.67950905072382, -73.89666501245208);
      const image = 'src/img/anna/pin.svg';
  
      new google.maps.Marker({
          position: ourPosition,
          map: map,
          icon: image,
      });
  
      let styles = [
          {
            "stylers": [
              {
                "color": "#e0dfd7"
              }
            ]
          },
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "color": "#e0dfd7"
              },
              {
                "visibility": "simplified"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      
      map.setOptions({styles: styles});
  }

  //Stanislav
  let build = document.getElementById('main');
  let buildings = [
    {
        image: '../img/stanislav/galery1.jpg',
    },
    {
        image: '../img/stanislav/galery2.jpg',
    },
    {
        image: '../img/stanislav/galery3.jpg',
    },
    {
        image: '../img/stanislav/galery4.jpg',
    },
    {
        image: '../img/stanislav/galery5.jpg',
    },
];

for (let i = 0; i < buildings.length; i++ ) {
    const block = `
        <a href="${buildings[i].image}" data-fancybox="gallery startIndex=2">
            <img class="zoom" src="src/img/zoom.svg" alt="zoom">
        </a>
    `;
    build.insertAdjacentHTML("beforeend", block);
};
  

  
