# 🌤️ React Weather App

A responsive weather application built with **React.js** that allows users to search for a city and view its weather information.

This project was created to practice **React fundamentals and JavaScript logic**, including state, props, event handling, array methods, and conditional rendering.

---

## 🚀 Live Demo

---

## ✨ Features

* 🔍 Search weather by city
* 🌡️ View temperature
* ☀️ View weather condition
* 💧 View humidity
* 💨 View wind speed
* 🌤️ Display weather icons
* ⚠️ Handle empty search input
* ❌ Handle city not found
* 📱 Responsive design
* 🧩 Component-based architecture
* 🎨 Separate CSS for each component

---

## 🛠️ Technologies

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── WeatherApp.jsx
│   ├── WeatherApp.css
│   │
│   ├── SearchBar.jsx
│   ├── SearchBar.css
│   │
│   ├── WeatherInfo.jsx
│   └── WeatherInfo.css
│
├── App.jsx
├── main.jsx
└── index.css
```

### Components

| Component     | Responsibility                   |
| ------------- | -------------------------------- |
| `WeatherApp`  | Main application logic and state |
| `SearchBar`   | City input and search button     |
| `WeatherInfo` | Displays weather information     |

---

## 🧠 Concepts I Practiced

### React

* `useState`
* Props
* Parent → child communication
* Event handling
* Controlled inputs
* Conditional rendering
* Component-based architecture

### JavaScript

* Arrays of objects
* `.find()`
* `.toLowerCase()`
* `.trim()`
* Functions
* State-based logic

---

## 🔄 How It Works

```text
User enters city
       ↓
Input updates cityName state
       ↓
User clicks Search
       ↓
.find() searches the city data
       ↓
City found?
    ↙       ↘
  Yes        No
   ↓          ↓
Save city    Show alert
   ↓
WeatherInfo receives data
   ↓
Weather information is displayed
```

---

## 📌 Example

Searching for:

```text
lahore
```

Displays:

```text
🌤️ Lahore
35°C

Condition: Sunny
Humidity: 65%
Wind Speed: 15 km/h
```

---


## 📚 What I Learned

This project helped me understand how to:

* Manage data using React state
* Pass data and functions through props
* Handle user input and button events
* Search through an array of objects
* Render different content based on state
* Break an application into reusable components
* Organize CSS by component

---

## 🔮 Future Improvements

* [ ] Connect to a real weather API
* [ ] Display live weather data
* [ ] Add more cities
* [ ] Add loading and error states
* [ ] Add current-location weather
* [ ] Add weather forecast
* [ ] Add °C / °F conversion
* [ ] Add dark mode

---

## 📌 Note

This version uses **static weather data** for learning purposes. It is not connected to a live weather API.

---

## 👨‍💻 About

This project is part of my journey to improve my **JavaScript and React.js development skills** by building projects and focusing on understanding the logic behind them.

The goal was to learn how **React components, state, props, JavaScript logic, and CSS** work together to create an interactive application.

⭐ Feel free to explore the repository and check out my other projects.
