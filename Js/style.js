// -----------JAVASCRIPT SLIDESHOW--------------//
//start point
let i = 0;
let sliding_images = [];
let time = 5000;

//Images list
sliding_images[0]='Images/slider1.jpg';
sliding_images[1]='Images/slider2.jpg';

//Changing Images
function changeimg()
{
    document.slide.src=sliding_images[i];

    if(i < sliding_images.length - 1)
    {
        i++;
    }
    else
    {
        i=0;
    }

    setTimeout("changeimg()",time);
}
window.onload = changeimg();