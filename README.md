# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/mobile_solution.png)
![](./images/desktop_solution.png/)


### Links

- Frontend Mentor Solution URL: [monte-dev](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-Ui_Gyi9_1M)
- Live Site URL: [monte-dev](https://monte-dev.github.io/3-intro-component-with-signup-form-FEM/)
- Repo URL: [monte-dev](https://github.com/monte-dev/3-intro-component-with-signup-form-FEM)

### Built with

- Semantic HTML5 markup
- SCSS variables
- Vanilla Javascript
- Flexbox
- Mobile-first workflow


**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this project I focused on practicing media queries and speed of html/css coding.
I have also got valuable experience in styling form elements in different states.




To limit ammount of querySelectors I came upon parentElement method, this allowed me to select a parent element of my input fields to add style to them.

```js
passwordField.parentElement.style.marginBottom = "20px";
```


### Continued development

For my next form type project I will include complete form validation for each field instead of generic error message as in this repository.


### Useful resources

- [How to update placeholder color using JS](https://stackoverflow.com/questions/54749402/how-to-update-placeholder-color-using-javascript) - In this stack overflow I learnt of a way how to change style of css pseudoelements in Javascript. The trick is to use CSS variables and setProperty method.


## Author

- Website - [monte-dev](https://www.github.com/monte-dev/)
- Frontend Mentor - [@monte-dev](https://www.frontendmentor.io/profile/monte-dev)


