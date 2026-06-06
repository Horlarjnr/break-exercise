
THEORY 
QUESTON 1 

DNS - 

    HTTP REQUEST (HTML ARRIVES) - 

        PARSE HTML (DOM TREE) - 

            CSS (CSSOM + RENDER TREE) - 

                JAVASCRIPT (VS ENGINE) -

                    LAYOUT - PAINT - COMPOSITE 


DNS Transfer human readable domain names into ip addreess that computer use to find eachother (phonebook for the internet) and it will find the server and connect securely

HTTP REQUEST: It will fetch the HTML page from the server 

PARSE HTML: This will turn the text in HTML file into a live tree structure 

CSS: It will apply styles to every element in the HTML files 

JAVASCRIPT: Parse, complete and fully run the code 

LAYOUT - PAINT: It will finally draws a pixels on screen at 600ps

Understanding all this matters to web developers because it explains how html can be convert from raw text into a strutured representation which is DOM Tree because the browser cannot work with the raw text and it further explain how browser merges DOM and CSSOM into single render file and why certain CSS properties animate smoothly and others cause jank. It gives more details on how javascript works on a browser. 


QUESTION 2 
 
HTTP/3  improves how data is delivered across the internet by using a newer transport protocol called QUIC. QUIC is a transport protocol originally developed by Google and later standardized. It was designed to address some of the limitations of TCP while maintaining strong security and reliability guarantees/
QUIC enables 0-RTT for faster connection establishment, no head of line blocking and it also reduces the number of round trips required to establish a secure connection, which can significantly reduce latency - especially for users connecting over long distances.


QUESTION 3

From my own experience as an internet user, i figure out that this website below does not use semantic tag:
https://candidate.scholastica.ng/
it lacks some semantic tags while inspecting like (main tags, article tags, nav, section and aside) just uses div for everything and it will affect the assesibility of the screen readers to jump from one sction to another. 


PRODUCT THINKING 
QUESTION 1 

Semantic HTML helps search engine to better understand your content’s structure and importance.

<article>: When Google’s crawler encounters an <article> element containing <h1> through <h6> headings in proper hierarchy, it understands the content organization and can rank pages more accurately.

<Header>: it helps search engine by telling or showing that this is headline or headings of a content(Recipes) and it more visible than the body of the content. it can also be wrapped inside article for accurate ranking. 

<main>: This tells the user what the blog all about while its the main focuses of the blog which explain in details about the blog ignoring the <nav>, <aside> and <footer>. it ranks it as the core topic of the blog because there wont be two <main>.

<Aside>:  It separates additional information from the main topic. it also preserve us not to divert from the focus of the page. 


QUESTION 2 

For designing a real-time multiplayer game the edge computing that matters most will be Better Reliability and Reduce Downtime. 

Why:  Even if a central server experiences failure, the entire player base is forced to be offline and frustrating players the Edges nodes can keep serving the content which isolates the failure to a small segment of players while others keep playin seamlessly. 



ENGINEERING BEST PRACTICE 
QUESTION 1

Let me start from my own opinion, I totally disagree with that because you might use div everywhere and work but it will lack in some aspect like accesibility, SEO, Code maintainability and developer collaboration. 

Accessibility: Using div everywhere is a bad practice for accessibility. Html is supposed to use semantic and not rely entirely on visual presentation. Using elements like header, footer, main, nav, section, article etc. It allows vision impaired users to use screen readers and know what each thing on the page is supposed to be.Structuring code in such a way that when someone reads it they shouldn’t have to guess what’s what meant for.

SEO: Semantic helps search engine to understand the structure of your content and rank them according to how important they are 

Code Maintainability: using semantic tags helps you to maintain the code hierarchy, manage the document layout and easier to reference in CSS and Javascript. 

Developer Collaboration: if youre working on a collaboration project using div everywhere will make it difficult for the other developer who are newbies and it wont give a cleaner code for readability. 


