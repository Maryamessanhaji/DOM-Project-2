// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the color-box and change-color-btn elements
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    // Function to generate a random color in hexadecimal format
    function getRandomColor() {
        // Generate random values for red, green, and blue components
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        // Convert to hexadecimal format
        const hexColor = '#' + r.toString(16).padStart(2, '0') + 
                               g.toString(16).padStart(2, '0') + 
                               b.toString(16).padStart(2, '0');
        
        return hexColor;
    }
    
    // Add event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Change the background color of the box to a random color
        const newColor = getRandomColor();
        colorBox.style.backgroundColor = newColor;
        
        // Optional: Display the color code
        colorBox.textContent = newColor;
    });
    
    // Set an initial random color when the page loads
    colorBox.style.backgroundColor = getRandomColor();
});