let previousButton = null;

for (let i = 1; i <= 24; i++) {
    const button = document.getElementById(`btn${i}`);
    button.addEventListener('click', () => {
        const color = window.getComputedStyle(button).backgroundColor;
        document.getElementById('extraButton').style.backgroundColor = color;
        if (previousButton) {
                previousButton.style.border = 'none';
            }
        button.style.border = '2px solid red';
        previousButton = button;
    });
}

// Assuming you have an input field for height in feet and inches
const heightFeet = parseInt(document.getElementById('heightfeet').value);
const heightInches = parseInt(document.getElementById('heightinches').value);
const totalHeightInInches = heightFeet * 12 + heightInches;

let recommendation = '';

if (totalHeightInInches <= 62) {
   
} else if (totalHeightInInches >= 63 && totalHeightInInches <= 65) {
    recommendation = "Skinny jeans, tops, baggy jeans, tops";
} else {
    recommendation = "Midi dresses, baggy jeans, shirts, t-shirts";
}

// Display or use 'recommendation' as needed
