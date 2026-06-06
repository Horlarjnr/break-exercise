THEORY 

QUESTION 1

First convert the image dimension to the maximum display and convert the PNG format to the best format which is AVIF because its 50% smaller than the PNgG and gives excellent quality at low sizes 

then i will now use srcset for the responsive of the images using the <picture> element to support the AVIF format 



QUESTION 2 

srcset defines the set of images we will allow the browser to choose between, and what size each image is.

it can be used for responsive of our image while doing different view of website. 

<img
    src="img-800.jpg"
    srcset="img-400.jpg 400w, 
            img-800.jpg 800w,
            img-1200.jpg 1200w"
    sizes="(max-width: 600px) 100w, 50xw"
    alt=" Responsive Image " />

Look at screen size, pixel density, zoom level, screen orientation, and network speed.

Work out which media condition in the sizes list is the first one to be true.

Look at the slot size given to that media query.

Load the image referenced in the srcset list that has the same size as the slot. If there isn't an exact match for the display size, the browser will choose the first image that is bigger than the chosen slot size and scale it down to fit.

QUESTION 3 

rel="noopener" Is important when using target="_blank" because when the target open a link in new tab it prevents it gaining the control of the original website redirecting user to fake website. 

It block access to windows.opener and it also prevent tabnabbing. 
while on one tab and youre using target it will open a new tab which act as the original tab opened but when you use noopener. it will prevent hacking into the original website and not to act like the original for the user. 


 ENGINEERING THINKING 

Below is the strategy for the optimization to ensure smooth user experience:

Lazy loading: i will use loading="lazy" to prevent the image loading before the user reach the section 

Format Choice: Using best format like WebP or AVIF for smaller file sizes compared to old JPGs or PNGs without loosing quality.

Responsive Sizing: Using the HTML srcset and sizes attributes will instruct the browser to request exact, scaled-down dimensions based on the user's device screen width and i will also wrap it in a picture element to give support to the format i use. 

CDN (Content Delivery Network): utilize the CDN makes it physically reduces the distance data travels to the user, ensuring rapid delivery. 

