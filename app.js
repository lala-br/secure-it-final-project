const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); 

const app = express();

//Configuring the View Engine (EJS) and the Views folder
app.set('view engine', 'ejs');
app.set('views', 'Views');

// Importing Routes
const authRoutes = require('./Routes/auth');
const progressRoutes = require('./Routes/progress');
const platformsRoutes = require('./Routes/platforms');
const adminRoutes = require('./Routes/admin');

// Middleware for handling data from forms and static files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'Public')));

// Session definition
app.use(session({
    secret: 'my cyber security secret',
    resave: false,
    saveUninitialized: false
}));

// Passing a Connection Setting Variable to All Views
app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn || false;
    next();
});

// Using routes
app.use(authRoutes);
app.use(progressRoutes);
app.use(platformsRoutes);
app.use(adminRoutes);

// router to homepage
app.get('/', (req, res) => {
    res.render('index', { pageTitle: 'Home', isAuthenticated: req.session.isLoggedIn || false });
});

// Handling a 404 error (page not found)
app.use((req, res, next) => {
    res.status(404).render('Platforms/file_not_found', { pageTitle: 'Not Found', isAuthenticated: req.session.isLoggedIn || false });
});

//Running the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});