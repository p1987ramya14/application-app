const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Check if the app is installed (in a real-world scenario, this could be more complex)
    const appIsInstalled = false; // Implement your logic here

    if (appIsInstalled) {
        res.redirect('https://www.amazon.com/Simple-Joys-Carters-Short-Sleeve-Bodysuit/dp/B07GY1RRZF');
    } else {
        res.redirect('https://roastandrelish.store');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
