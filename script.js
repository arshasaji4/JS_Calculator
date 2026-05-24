const display = document.getElementById("display");

// Select all buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        let value = button.innerText;

        // Clear display
        if (value === "C") {
            display.value = "";
        }

        // Delete last character
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        // Calculate result
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        // Add button value to display
        else {
            display.value += value;
        }
    });
});