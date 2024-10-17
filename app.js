const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Import routes
const devicesRouter = require('./routes/devices');
const scanningRouter = require('./routes/scanning');
const stationsRouter = require('./routes/stations');

// Use routes
app.use('/devices', devicesRouter);
app.use('/scanning', scanningRouter);
app.use('/stations', stationsRouter);

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'AIOT Demo' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
