const conversionRates = {
    "USD": { "INR": 74.5, "EUR": 0.85 },
    "EUR": { "INR": 90.5, "USD": 1.18 },
    "INR": { "USD": 0.0135, "EUR": 0.0111 },

};

document.getElementById('convertButton').addEventListener('click', function() {
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (amount && conversionRates[sourceCurrency][targetCurrency]) {
        const result = amount * conversionRates[sourceCurrency][targetCurrency];
        document.getElementById('result').textContent = `${amount} ${sourceCurrency} = ${result.toFixed(2)} ${targetCurrency}`;
    } else {
        alert('Invalid amount or conversion rate.');
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('result').textContent = '';
});