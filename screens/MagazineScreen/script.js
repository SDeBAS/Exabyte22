let current = 1;

document.getElementById("slide-1").addEventListener("click", () => {
  if (current == 1) window.open('https://drive.google.com/file/d/1XqJtjzaH5zcznvgvqX62kWh9lpm9EaRb/view?usp=sharing', '_blank');
  current = 1;
});

document.getElementById("slide-2").addEventListener("click", () => {
  if (current == 2) window.open('https://drive.google.com/file/d/1BVvqxp0zb2VbXRFH4G4c-FfPvduCrTwM/view?usp=sharing', '_blank');
  current = 2;
});

document.getElementById("slide-3").addEventListener("click", () => {
  if (current == 3) window.open('https://drive.google.com/file/d/1FgF7E5YSy7e4eICYrGBAdNAYHf1PdxQE/view?usp=sharings', '_blank');
  current = 3;
});


document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        

function getTouches(evt) {
  return evt.touches ||             
         evt.originalEvent.touches; 
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                                                           
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    


    var xDiff = xDown - xUp;

                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            if (current < 3)
              current += 1;
        } else {
            /* left swipe */
            if (current > 1)
              current -= 1;
        }                       
    } 

    xDown = null;
    yDown = null;                                             
};