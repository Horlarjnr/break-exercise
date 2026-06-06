THEORY 

QUESTION 1 

Client-side validation gives immediately after typo error because of the input type which email and served as localized feedback. The browser will recognize the invalid email, highlighting it and prevent it for submission. 

Server-side validation catches the error only after the user submits the form, result to reloading of a page and a delayed error message. 

we need both because:
Client side serves the experience for user by providing immediate guidance so the user can fix the typographical error before submitting the form while Server-Side serves Security and authentication by acting as the final, gatekeeper you cant bypass to protect databases from malicious attacks. 

QUESTION 2 

The HTML autocomplete attribute lets web developers specify any permission the user has to provide automated assistance in filling out form field values, as well as guidance to the browser as to the type of information expected in the field and it available on input elements. 

off
when the browser is not permitted to automatically enter or select a value for this field.

on 
The browser is allowed to automatically complete the input

username
A username or account name.

country
A country or territory code.

cc-number
A credit card number or other number identifying a payment method, such as an account number.


PRODUCT THINKING 

QUESTION 1 

To handle the internet outage gracefully i will prioritized the client side more than the server side.

Progress saving: Using localstorage to save data so that we can avoid data loss on having internet issues 

Validation Strategy: i will lock the final "Submit Application" button on the last step until the connection is restored.

Error Messaging: it should display a persistent, non-blocking message stating: "You are offline. Your progress is saved locally."

QUESTION 2

Native <select> performs better
When using a native you are trading simplicity and speed for flexibility and control. I always opt for speed and simplicity over the ability to add little flag icons to a drop down that looks and behaves the same regardless of device it's on. it also excels on mobile devices and takes minimal efforts 

Drop down Menu 
The main problem with using a drop down control is that data is hidden until the user interacts with it. This may not be avoided when you have a variable sized list of choices and limited space. We can just make sure that there really are no other options before using this control. it is very difficult for accesibility, often problematic and requires a high efforts. it might be best for edge cases. 

ENGINEERING BEST PRACTICE

<input 
    type="password" >

Strength meter: 
ARIA Semantics: Utilizes role="meter" with aria-valuemin, aria-valuemax, and aria-valuenow.

Assistive Tech Feedback: aria-valuetext updates with a descriptive string (e.g., "Strength: Strong") and communicates state using aria-live="polite"

Requirement Checklist:

<input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}">

Show Toggle:

<label class="password-toggle-btn">
  <input type="checkbox" id="toggle-password" />
  <span>Show</span>
</label>

