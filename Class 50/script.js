// Fixed conversion rates
const conversionRates = {
    USD: { INR: 74.5, EUR: 0.85 },
    EUR: { USD: 1.18, INR: 90.5 },
    INR: { USD: 0.013, EUR: 0.011 },
};

// Function to convert currencies
function convertCurrency() {
    const sourceCurrency = document.getElementById("source-currency").value;
    const targetCurrency = document.getElementById("target-currency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const rate = conversionRates[sourceCurrency][targetCurrency];
    const result = amount * rate;

    document.getElementById("result").textContent = `${amount} ${sourceCurrency} = ${result.toFixed(2)} ${targetCurrency}`;
}

// Function to clear inputs and result
function clearInputs() {
    document.getElementById("source-currency").value = "USD";
    document.getElementById("target-currency").value = "INR";
    document.getElementById("amount").value = "";
    document.getElementById("result").textContent = "";
}

// Event Listeners
document.getElementById("convert-btn").addEventListener("click", convertCurrency);
document.getElementById("clear-btn").addEventListener("click", clearInputs);
































