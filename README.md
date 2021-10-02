# **[Show Me The Surf]()**

# **Project Description**

This project has been developed for my second Milestone project assignment following the Code Institute course that I am currently completing. I have chosen an idea that was given from the list give in the assessment criteria of "Create a site that calls an API to help the user choose a holiday based on their needs"

From this I have decided to create a website that allows the user to search for a holiday based on where would have the best surf (tidal data) for their chosen dates. To do this I have looked at suitable APIs that have this information available, I will manipulate their data and evaluate the information that has been returned.

For this project I have had to make some of the following assumptions. The website itself does not provide travel packages but will instead operate through partner websites instead.

From these assumptions and the information, I have gathered I am using the 5 planes of UX methodology that has been explained within the course to; identify the user needs, the features are needed in the design, how the information is structured and logically grouped. These have then been used to produce a wireframe to show how this is implemented and a basis for what the project will look like on completion.

# **Index**

- [Project Description](#project-description)
- [UX](#ux)
  - [Project Goals](#project-goals)
  - [User Goals](#user-goals)
  - [Developer and Business Goals](#developer-and-business-goals)
  - [User Stories](#user-stories)
  - [Opportunities arising from User Stories](#opportunities-arising-from-user-stories)
  - [Design choices](#design-choices)
    - [UI Styling](#ui-styling)
  - [Wireframes](#wireframes)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features left to Implement](#features-left-to-implement)
- [Logic Walkthrough](#logic-walkthrough)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
  - [GitHub Pages](#github-pages)
  - [How to run this project locally](#how-to-run-this-project-locally)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)
  - [Code](#code)
  - [Acknowledgements](#acknowledgements)

# **UX**

## Project Goals

---

The main objective for this project is to create a fully responsive website for all screen sizes and is fully interactive using javascript and APIs. It will also follow good UX Design theories and make the interaction as enjoyable as possible for the user whilst also meeting the business goals that will be further outlined below.

[Back to Index](#index)

## User Goals

---

The goal for the end user is to find the best holiday based on their input locations that will best suit their requirements for a certain day. The target audience of these customers will be surfing enthusiasts, or other sea activity based enthusiasts, so styling and images will be chosen with this in mind.

[Back to Index](#index)

## Developer and Business Goals

---

The website must be fully responsive for all platforms with a design that adjusts to each device to ensure the best UX. It must be fully responsive and allow the users to interact with it in a way that will manipulate the data displayed, calling external APIs.

[Back to Index](#index)

## User Stories

---

With the target audience that has been outlined above, and the needs of both the site owner and the end users in mind. I have identified the below user stories for consideration:

1. As a user, the intentions of the application must be very clear just by looking at the information that is displayed.

1. As a user, I will easily be able to navigate the site

1. As a user, it is clear what information I need to enter, and where it needs to be entered.

1. As a user, the results must be clearly displayed with minimal clutter on the screen.

1. As a user, I must be able to easily see which location is the best for the selected date, but also be able to see in depth detail if wanted.

1. As a user, I would like to see relevant information about the location that has been selected e.g. places of interest, other activites, accomodation etc.

The following have also been identified from the owners perspective.

1. As the owner, it must be easy to display all information from partnered sites to the user.

[Back to Index](#index)

## Opportunities arising from User Stories

---

|                         Opportunities                          | Importance | Feasibility/Viability |
| :------------------------------------------------------------: | :--------: | :-------------------: |
|                **Clean, and simple interface**                 |     5      |           5           |
|              **Purpose of the website is clear**               |     5      |           5           |
|       **Search meets the needs of the user effectively**       |     5      |           5           |
| **Search must be easy to use, minimal instructions required**  |     5      |           5           |
|        **Results are easy to see and clearly outlined**        |     5      |           5           |
|          **Places are shown for suggested location**           |     4      |           4           |
| **~~Check bookings facilities at location for availability~~** |     2      |           2           |

[Back to Index](#index)

## **Design Choices**

---

I have decided on the following design choices for the website based on the information that I have outlined above.

These aspects will be **shared** site wide:

- No navigation tabs/panels will be needed for this website, given the purpose of the application only a link back to the home page with the icon for this.
- The bottom of each page will hold copyright information, and also a disclaimer for the accuracy of the information that has been provided.

I have outlined the below to hold on the **Home Page**:

- Introduction statement, at the top of the page with information on what is needed to complete the search.
- Search function to submit data to API for results to be shown.

The **Results Page** will hold the following information:

- Quick glance view of the best location for the date chosen.
- Map including points of interest near the best location given.
- Detailed explanation of results towards the bottom of the page.

[Back to Index](#index)

### **UI Styling**

I have decided on the following styling choices to suit the needs and create an appropriate asthetic for the website.

### **Colous**

I have looked a few different colour palettes that have been created based around surfing. I have decided to use lots of whitespace, and grey scales to compliment the colour palette that I have chosen from icolorpalette.com (Full accreditation links in the acknowledments below). I feel this colours best convey the message that the site is suited for and will compliment the content of the site greatly.

### **Styling**

Considering the needs of the user and the device that they will most likely be viewing the website from I have opted for a **mobile first** philosophy as I believe the majority of users will be viewing the site from this device. It will be fully responsive and the design will adapt to the device it is displayed to offer the best UX as possible for all users.

I will make the design as clean and minimal as possible, whitespacing is very important for this as I would like it to display everything as well as possible, there are only 2 pages so the information can easily be spread out over the two without concern of the entire site appearing too cluttered.

[Back to Index](#index)

## Wireframes

---

All wireframes used for this project were created using Figma. These will be used for the basis of design and development of the website, however these are subject to change.

- [Home Page]()
- [Results Page]()

[Back to Index](#index)

# **Features**

## Existing Features

---

[Back to Index](#index)

## Features left to Implement

---

- Tidal Data - Currently the API call for the tidal data does not function, I have read through the documentation for the API and
  have asked for additional help on the matter but I am still getting a 401 error. I have opened a ticket with the API support
  and asked a question on the forums to see if there are other issues with this. If/When I have a response I would like to
  come back and implement this as it is a huge portion of the project that is unfortunately unable to work.

[Back to Index](#index)

# **Logic Walkthrough**

Below is a walkthrough of how the application intends to handle data, the DOM manipulations that it requires to make, and any calculations that may occur.

- User selects a date and enters desired locations to be checked. This will use Google Places API to get location data, and provide the searchbox functionality.
- Once the locations have been chosen, the information will be passed through other functions to retrieve the data that is needed.
- The place name of the locations will be passed through the Admirality API to check if there is a valid station within the area.
- If the tidal station exists, the information for the chosen day will be added to the dayData object to be used later. Otherwise an error will be displayed to show no valid station has been selected.
- Open Weather One Call API will then be used to call the weather information for all locations. Returning the temperature, rain, cloud, wind, etc.
- When all information has been gathered, it will then be passed through a series of functions that will calculate which location is the best on the given day.
- Once decided, this shall be stored to the local-device memory to be recalled when it goes onto the results page
- The results for the location shall be displayed at a glance, with the option to go more in-depth if wanted.

[Back to Index](#index)

# **Technologies Used**

- [Figma](https://figma.com) Used to produce all wireframes for this project.
- [VS Code](https://code.visualstudio.com/) Used to develop this website.
- [GitBash](https://git-scm.com/downloads) Used for Git version control and pushing to GitHub.
- [Lazysizes](https://github.com/aFarkas/lazysizes?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library) was used to optimise loading of images.
- [Bootstrap](https://getbootstrap.com/) - Used for styling and utility classes.
- [Google WebP](https://developers.google.com/speed/webp/docs/using) - Library used to convert png files to webp files.
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) - Used to locate desired places for comparison by user.
- [Admirality API](https://admiraltyapi.portal.azure-api.net/docs/services/uk-tidal-api/operations/Stations_GetStation) - Used to get tidal information for desired places.
- [Open Weather API](https://openweathermap.org/api) - Used to get weather data for locations

[Back to Index](#index)

# **Testing**

[Back to Index](#index)

# **Deployment**

## GitHub Pages

---

[Back to Index](#index)

## How to run this project locally

---

[Back to Index](#index)

# **Credits**

## Content

---

- [House of Surf](https://houseofsurf.co/best-surf-conditions-for-beginners/) - Reference for best surfing conditions and explanations as to why.

[Back to Index](#index)

## Media

---

- [icolorpallete](https://icolorpalette.com/palette-by-themes/surfing) - Used to find colour palette to use.
- [Pexels](https://pexels.com) - Resource for copyright free images, all images are individually creditied with links within the code.
- [Hatchful](https://hatchful.shopify.com/) - Used to generate the logo and favicon for the website.

[Back to Index](#index)

## Code

---

- [MDN](https://developer.mozilla.org/en-US/) - Learning resource.
- [Bootstrap Docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/) - Learning resource.
- [Google Place API Docs](https://developers.google.com/maps/documentation/places/web-service/overview) - Learning resource.
- [Admirality API Docs](https://admiraltyapi.portal.azure-api.net/docs/services/uk-tidal-api/operations/Stations_GetStation) - Learning resource.
- [Open Weather One Call API Docs](https://openweathermap.org/api/one-call-api) - Learning resource.

[Back to Index](#index)

## Acknowledgements

---

- Thank you to the tutor support that I have recieved when I have had difficulties.

[Back to Index](#index)
