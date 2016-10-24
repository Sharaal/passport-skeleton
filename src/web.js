require('dotenv').config({ silent: true });

const ensureLoggedIn = require('./middlewares/ensureLoggedIn')();
const ensureLoggedOut = require('./middlewares/ensureLoggedOut')();

const User = require('./models/User')();

const app = require('express')();

app.use(require('./routers/authenticate')({ ensureLoggedOut, User }));
app.use(require('./routers/home')());
app.use(require('./routers/profile')({ ensureLoggedIn }));

app.listen(process.env.PORT);
