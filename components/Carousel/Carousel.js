class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = document.querySelector('.left-button');
    this.rightButton = document.querySelector('.right-button');
    this.images = document.querySelectorAll('img[src^="./assets/carousel"]');

    this.images.addEventListener('click', (photo) => this.currentIndex(photo));

  }


  currentIndex(photo) {
    this.images.style.backgroundImage = (`${photo}`);

  }


}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);


// section.style.backgroundImage = "url("+slika+")";
//         document.getElementById("slikaa").style.visibility = "hidden";



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
