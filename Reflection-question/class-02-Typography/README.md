
THEORY 

QUESTION 1 

<em> is a semantic tag that tells search engines and screen readers that the text inside the <em> tags carry more emphasis compared to the other words in the output. 

On the other hand <i> is a direct styling for italics, making it stand out a bit visually. This can be useful for highlighting foreign words.

Example 

<em>: I am <em>very</em> mad at you
<i>: The ship sailed across the <i>Mediterranean Sea</i>

QUESTION 2 

3 HTML elements with special screen reader
1. <img> Elements : When an image contains an alt attribute, screen readers announce it as a graphic and read the descriptive text aloud but when theres no alt attribute the screen reader may read a raw image file and it might create a confusing experience. 

2. Heading Elements (h1 - h6): Screen reader announces the text as the heading with the hierarchy level (h1 - h6). It provides the core information about the page and makes it easier for user to navigate to the section they want. 

3. List Elements: this allows users to understand the context and length of a series of related items before committing to listening to all of them. it hels for categorizing content. 

QUESTION 3

Aria-label: The aria-label attribute provides an accessible name for an element. It is especially useful for interactive elements like buttons or form controls that might not have visible text.

Example: Using div as a button 

<div aria-label="Submit Form" onclick="submitForm()">
  Click Me
</div>


Fix HTML instead using Smantic tags 

<button type="submit" onclick="submitForm()">
  Submit Form
</button>

ACCESSIBILITY REFLECTION 

https://nationalpopulation.gov.ng/

i scan through the website above to test its accessibility which i check for various things. Below is those thing i checked for:

Tabbing through the pages: Pressing the Tab key seamlessly moves focus forward, and Shift + Tab moves it backward through all actionable items. Examples: moving from home to about us to 2023 census and all 

Visibiity of form labels: When i clicked on the contact us button, it gives me the form showing to input email which the input label is visible, same thing for name and and other form requirements. 

clear focus state o buttons: While scrolling through the page the arrow is showing like a I sign but when it reaches where the buttons is it changes automatically to arrow sign indicating the button state. 


PRODUCT THINKING 

<h1>: A page should have only one h1 tage which contains the main page tittle and since we are working on technical API Documentation page it can be the page tittle. 

<h2>: this should contain the Introduction and Overview which explains the product overview, authentication and versioning. 

<h3>: h3 should have something like ApI reference like the endpoints which decribes HTTP Mehod and path, description, Request Path, Request header and request body. 


