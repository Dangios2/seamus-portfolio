console.log("hello");

if(jQuery) {
    console.log("jquery loaded")
}
else{
    console.log("no jquery")
}
//Splide documentation// 

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
      heightRatio: 0.5,
    } ).mount();
  } );

  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#card-carousel', {
          perPage    : 2,
          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();
  } );

  import Splide from '@splidejs/splide';


new Splide( '.splide' ).mount();

new Splide( '.splide', {
    type   : 'loop',
    padding: '20%',
  } );