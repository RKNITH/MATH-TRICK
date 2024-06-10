const thoughts = [
    "The Shortcut for Multiplying by 11: To multiply a two-digit number by 11, add the two digits together and place the result between the original digits. For example, to find 23 × 11, add 2 and 3 to get 5, so the answer is 253.",
    "The Squaring Trick for Numbers Ending in 5: To square a number ending in 5, multiply the digit before 5 by itself plus 1, and then append 25 to the result. For example, to find 65^2, 6 × (6 + 1) = 42, and append 25 to get 4225.",
    "Divisibility by 11: A number is divisible by 11 if the difference between the sum of the digits in the odd positions and the sum of the digits in the even positions is either 0 or a multiple of 11. For example, for the number 2728, the sum of the digits in the odd positions (2 + 2) is 4, and the sum of the digits in the even positions (7 + 8) is 15. The difference is 15 - 4 = 11, which is a multiple of 11, so 2728 is divisible by 11.",
    "Divisibility by 7: To determine the divisibility of a number with more than three digits by 7, repeatedly apply the rule of taking the last digit, doubling it, and subtracting it from the remaining part of the number until a manageable result is obtained. If the final result is divisible by 7 (including 0), then the original number is also divisible by 7. For example, to check the divisibility of 1617 by 7, start by taking the last digit (7), doubling it to get 14, and subtracting it from the rest of the number (161 - 14 = 147). Repeat the process with 147: take the last digit (7), double it to get 14, and subtract it from the rest of the number (14 - 14 = 0). Since 0 is divisible by 7, 1617 is also divisible by 7.",
    "The formula to calculate the sum of the first 𝑛 natural numbers, where 𝑛 represents the number of terms, is 𝑆 = 𝑛 × (𝑛 + 1) / 2. Here, 𝑆 denotes the sum of the natural numbers from 1 to 𝑛.",
    "The formula for the sum of even numbers up to 𝑛 is derived from the arithmetic series formula and is given by Sum of Even Numbers = 𝑛 × (𝑛 + 1) / 2 × 2, where 𝑛 is the number of even terms.",
    "The formula for the sum of odd numbers up to 𝑛 is also derived from the arithmetic series formula and is expressed as Sum of Odd Numbers = 𝑛 × (𝑛 + 1) / 2, where 𝑛 is the number of odd terms.",
    "For the sum of squares of numbers up to 𝑛, we use the formula Sum of Squares = 𝑛 × (𝑛 + 1) × (2𝑛 + 1) / 6, where 𝑛 represents the number of terms.",
    "The sum of cubes of numbers up to 𝑛 is calculated using the formula Sum of Cubes = (𝑛 × (𝑛 + 1) / 2)^2, where 𝑛 denotes the number of terms.",
    "The sum of fourth powers of numbers up to 𝑛, the formula is Sum of Fourth Powers = 𝑛 × (𝑛 + 1) × (2𝑛 + 1) × (3𝑛^2 + 3𝑛 - 1) / 30, where 𝑛 represents the number of terms.",
    "The sum of fifth powers of numbers up to 𝑛 is calculated using the formula Sum of Fifth Powers = 𝑛^2 (𝑛 + 1)^2 (2𝑛^2 + 2𝑛 - 1) / 12, where 𝑛 represents the number of terms.",
    "The sum of sixth powers of numbers up to 𝑛 is calculated using the formula Sum of Sixth Powers = 𝑛(𝑛 + 1)(2𝑛 + 1)(3𝑛^4 + 6𝑛^3 - 3𝑛^2 - 4𝑛 + 1) / 12, where 𝑛 represents the number of terms.",
]




function displayThoughts() {
    const thoughtContainer = document.getElementById('thought-container');
    thoughts.forEach(thought => {
        const thoughtElement = document.createElement('div');
        thoughtElement.className = 'thought light-mode';
        thoughtElement.textContent = thought;
        thoughtContainer.appendChild(thoughtElement);
    });
}

function toggleColorMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const header = document.querySelector('header');
    header.classList.toggle('dark-mode');
    header.classList.toggle('light-mode');

    const footer = document.querySelector('footer');
    footer.classList.toggle('dark-mode');
    footer.classList.toggle('light-mode');

    const thoughts = document.querySelectorAll('.thought');
    thoughts.forEach(thought => {
        thought.classList.toggle('dark-mode');
        thought.classList.toggle('light-mode');
    });

    const button = document.getElementById('color-mode-toggle');
    button.classList.toggle('dark-mode');
    button.classList.toggle('light-mode');
}

// Call the function to display thoughts when the page loads
window.onload = displayThoughts;
