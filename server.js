const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS)
app.use(express.static('public'));

// Route: GET / - Render the BMI calculator form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route: POST /calculate-bmi - Calculate BMI and return result
app.post('/calculate-bmi', (req, res) => {
    const { weight, height } = req.body;
    
    // Validate inputs
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    // Check if inputs are valid positive numbers
    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
        return res.status(400).json({
            error: 'Invalid input',
            message: 'Weight and height must be positive numbers'
        });
    }
    
    // Calculate BMI: BMI = weight (kg) / height² (m)
    const heightInMeters = heightNum / 100; // Convert cm to meters
    const bmi = weightNum / (heightInMeters * heightInMeters);
    
    // Determine BMI category
    let category;
    let categoryClass;
    
    if (bmi < 18.5) {
        category = 'Underweight';
        categoryClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        categoryClass = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        categoryClass = 'overweight';
    } else {
        category = 'Obese';
        categoryClass = 'obese';
    }
    
    // Return result
    res.json({
        bmi: bmi.toFixed(2),
        category: category,
        categoryClass: categoryClass,
        weight: weightNum,
        height: heightNum
    });
});
function incrementValue(fieldId) {
    const input = document.getElementById(fieldId);
    input.value = (parseFloat(input.value) || 0) + 0.1; toFixed(1);
}

// Start the server
app.listen(PORT, () => {
    console.log(`BMI Calculator server is running on http://localhost:${PORT}`);
});

