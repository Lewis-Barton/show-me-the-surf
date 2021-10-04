# **Show Me The Surf Testing**

[Back to README](README.md)

# **Contents**

- **[HTML](#html)**
  - [index.html](#index)
  - [results.html](#results)
  - [404.html](#404)
- **[CSS](#css)**
  - [index.css](#index.css)
  - [results.css](#results.css)
  - [utilities.css](#utilities.css)
- **[JS](#js)**
  - [index.js](index.js)
  - [results.js](results.js)

# **HTML**

## **Index**

Initial check for errors in code done using [W3C Markup Validation Service](https://validator.w3.org/)

- `<a>` must not appear as a descendant of the `<button>` element.
  - I was able to resolve this by removing the link and button and adding in an input element and then adding the form action to redirect to the next page.
- **Warning**

  - Section Two does not have a header element, this is not an issue in this case.

The page was then checked for spelling mistakes using Word.

---

**Browser testing**

I tested this page using the built in function of Safari to check between multiple devices and different browser software.

Because I have used SCSS for this site, it has already adapted the CSS files to ensure that it is all displayed correctly.

I have also done multiple media queries to ensure that the website looks and functions as it should on all devices, keeping in mind that it has been developed as a mobile first site.

[Back to index](#contents)

## **Results**

Initial check for errors in code done using [W3C Markup Validation Service](https://validator.w3.org/)

- No `<p>` element in scope, but `</p>` seen
  - This was an error from development that meant there was a closing tag left when it should have been removed. This was removed and the error is resolved.

The page was then checked for spelling mistakes using Word.

---

**Browser testing**

I tested this page using the built in function of Safari to check between multiple devices and different browser software.

As with the index page, the site was developed with SCSS so the browser compatibility properties were already added so very little else was needed to ensure it displayed correctly. Media queries were also used

[Back to index](#contents)

## **404**

Initial check for errors in code done using [W3C Markup Validation Service](https://validator.w3.org/)

- No issues were found on checking.

The page was then checked for spelling mistakes using Word.

---

**Browser testing**

I tested this page using the built in function of Safari to check between multiple devices and different browser software.

As with the index page, the site was developed with SCSS so the browser compatibility properties were already added so very little else was needed to ensure it displayed correctly. Media queries were also used

[Back to index](#contents)

# **CSS**

## **Index.css**

Initially this file was checked with [W3C CSS Validation Service Jigsaw](https://jigsaw.w3.org/css-validator/)

The documnet passed validation as CSS Level 3 + SVG, the only warnings that were produced are for the vendor extensions, which are not cause for concern.

The page functions and looks as expected.

[Back to index](#contents)

## **Results.css**

Initially this file was checked with [W3C CSS Validation Service Jigsaw](https://jigsaw.w3.org/css-validator/)

The documnet passed validation as CSS Level 3 + SVG, the only warnings that were produced are for the vendor extensions, which are not cause for concern.

The page functions and looks as expected.

[Back to index](#contents)

## **Utilities.css**

Initially this file was checked with [W3C CSS Validation Service Jigsaw](https://jigsaw.w3.org/css-validator/)

The documnet passed validation as CSS Level 3 + SVG, the only warnings that were produced are for the vendor extensions, which are not cause for concern.

The page functions and looks as expected.

[Back to index](#contents)

# **JS**

## **Index.js**

[Back to index](#contents)

## **Results.js**

[Back to index](#contents)
