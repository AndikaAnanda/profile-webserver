const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve CSS files
app.use('/styles', express.static('styles'));

// Main rout
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
