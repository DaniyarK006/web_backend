# BMI Calculator Web Application  
Node.js & Express

## Project Overview

This project is a **BMI (Body Mass Index) calculator web application** developed using **Node.js and Express** as part of an academic assignment. The application demonstrates how to build a simple web service that handles HTTP requests, processes user input on the server side, and returns calculated results to the client

The main focus of this project is understanding **Express routing**, **GET and POST request handling**, **server-side validation**, and **basic frontend–backend integration**

## Objective

The objective of this assignment was to:
- Learn how Node.js handles HTTP requests using Express
- Implement routing for different request types
- Process and validate user input on the server
- Calculate BMI based on user-provided data
- Display results dynamically on a web page

## Application Functionality

The application runs on an Express server listening on **port 3000** and includes the following routes:

- **GET /**  
  Renders a simple HTML form where users can enter their height and weight

- **POST /calculate-bmi**  
  Receives the submitted data, validates the input, calculates the BMI, determines the BMI category, and returns the result to the user

### BMI Calculation

The BMI is calculated using the standard formula:

**BMI = weight (kg) / height^2 (m)**

Based on the calculated value, the application classifies the result into one of the following categories:
- **Underweight** (BMI < 18.5)
- **Normal weight** (18.5 ≤ BMI < 24.9)
- **Overweight** (25 ≤ BMI < 29.9)
- **Obese** (BMI ≥ 30)

## Input Validation

To ensure accurate results, the application performs server-side validation:
- Weight and height must be positive numeric values
- Invalid input returns a clear error message
- BMI is calculated only when valid data is provided

## Technologies Used

- **Node.js**
- **Express.js**
- **HTML5**
- **CSS3**
- **JavaScript**

## Project Structure

```

Web_Back/
├── public/            # Static files (CSS)
├── views/             # HTML files
│   └── index.html
├── server.js          # Express server and routes
├── package.json       # Project configuration and dependencies
├── package-lock.json  # Dependency lock file
├── .gitignore         # Ignored files and folders

```

## How to Run the Project

1. Install dependencies:
```

npm install

```
2. Start the server:
```

npm start

```
3. Open a browser and go to:
```

[http://localhost:3000](http://localhost:3000)

```

## Learning Outcome

Through this project, I gained practical experience with:
- Setting up an Express server
- Implementing GET and POST routes
- Handling and validating user input
- Performing server-side calculations
- Structuring a Node.js project following best practices
