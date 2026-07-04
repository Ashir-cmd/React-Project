  Hotel Booking React Project

A simple Hotel Booking web application built with **React.js**, **React Router**, and **CSS**. This project fetches hotel data from an external API and allows users to browse hotels, view detailed information, and simulate user authentication before accessing hotel details.

---

##  Features

- Display list of hotels from an API
- Show hotel thumbnail, name, price, and location
- Short description on the home page
- "View Details" page for each hotel
- Full hotel description with rating
- Login check before accessing hotel details
- Add to Wishlist button with alert message
- Responsive card layout using CSS
- Client-side routing using React Router

---

##  Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6)
- HTML5
- CSS3
- Fetch API
- Git & GitHub

---

##  Project Structure

```
src/
│── App.jsx
│── HotelDetails.jsx
│── Login.jsx
│── App.css
│── main.jsx
│── index.css
```

---

##  Home Page

Displays:

- Hotel Image
- Hotel Name
- Price
- Location
- Short Description
- View Details Button

---

##  Hotel Details Page

Displays:

- Hotel ID
- Hotel Thumbnail
- Hotel Name
- Price
- Location
- Rating
- Full Description
- Add to Wishlist Button

---

##  Login Flow

- User clicks **View Details**
- If logged in:
  - Opens Hotel Details page
- If not logged in:
  - Redirects to Login page
- After login:
  - User can access hotel details

---

## 🌐 API Used

```
https://demohotelsapi.pythonanywhere.com/hotels/
```
##  Author

**Ashir**

GitHub: https://github.com/Ashir-cmd

---

##  License

This project is created for learning purposes and academic use.
