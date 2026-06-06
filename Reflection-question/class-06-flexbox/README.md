THEORY 

QUESTION 1

Flex grow controls how items takes extra space. 
flex shrink controls how items when space s small. 
flex basis set inial starting before grow and shrink 

Smple Analogy. 
when we want to pack our clothes inside a suitcase or travelling bag the size of the bad is how the flex basis set the intial start and when we pack all our clothes but still remain some space the works of flex grow is to espand the clothes to taks the etra space 

but in a situation whereby the travelling bag cannot contain the clothes flex shrink controls on ho to manage the space to contain all the clothes. 

QUESTION 2 

The align-items: stretch property will not work as expected if the flex container has a height that evaluates to default.

HTML
<div class="flex-container">
  <P>Short Text</P>
  <P>Taller Content</P>
</div>

.flex-container {
  display: flex;
  align-items: stretch; 
  border: 2px solid black;
  gap: 10px;
  margin-bottom: 20px;
}


ENGINEERING THINKING 

QUESTION 1 

HTML 
<nav class="navbar">
  <div class="logo">CompanyLogo</div>
  
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

  <button class="sign-in-btn">Sign In</button>
</nav>

CSS
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo, 
.sign-in-btn {
  flex: 1;
}

.logo {
  text-align: left; 
}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1; 

}

.sign-in-btn {
  display: flex;
  justify-content: flex-end;
  border: none;
  background: none;
}


display: flex and justify-content: space-between: These core properties on the parent container spread out the immediate child elements.

flex: 1: This rule is the magic that ensures your navigation stays centered. By applying flex: 1 to the .logo on the left, the .nav-links in the center, and the .sign-in-btn on the right, you divide the available horizontal space into three perfectly equal sections.

QUESTION 2 

Documenting the Thinking

I chose Flexbox over Grid here because the header is one-dimensional simply aligning items along a horizontal axis. 

HTML Structure: We separate the header into three main sections: the Logo, the Navigation Links (ul), and the Icons/Hamburger wrapper. This keeps the DOM semantic.

Flexbox Layout:The main <nav> has display: flex; with justify-content: space-between; to push the logo to the far left and the menu items to the right.The navigation <ul> itself acts as a sub-flex container holding the "Home, Search, etc." items evenly spaced on desktop screens.

Responsiveness: Desktop: The <ul> displays horizontally (flex-direction: row). The hamburger icon and search bar right-side icons get hidden (display: none).Mobile: A @media query (triggered at 768px) reverses this logic. The navigation <ul> is hidden. Instead, a hamburger menu icon becomes visible on the right. Tapping it would theoretically toggle an active class to show a mobile dropdown.

<header class="main-header">
  <div class="nav-container">
        <div class="logo">Instagram</div>

    
    <div class="search-bar">
      <input type="text" placeholder="Search">
    </div>

    <nav class="nav-links">
      <button class="menu-toggle" aria-label="Open Menu">☰</button>
      <ul class="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">Reels</a></li>
        <li><a href="#">Notifications</a></li>
        <li><a href="#">Create</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </nav>
  </div>
</header>

CSS: 

.nav-container {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  max-width: 975px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 22px; 
}

.menu-toggle {
  display: none; 
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .search-bar {
    display: none; 
  }

  .nav-list {
    display: none; 
  }

  .menu-toggle {
    display: block; 
  }
}

