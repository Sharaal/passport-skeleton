require('dotenv').config({ silent: true });

const connectEnsureLogin = require('connect-ensure-login');
const ensureLoggedIn = connectEnsureLogin.ensureLoggedIn();
const ensureLoggedOut = connectEnsureLogin.ensureLoggedOut();

const User = require('./models/User')();

const app = require('express')();

app.use(require('./routers/authenticate')({ ensureLoggedOut, User }));
app.use(require('./routers/home')());
app.use(require('./routers/profile')({ ensureLoggedIn }));

app.listen(process.env.PORT);
