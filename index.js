const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");
const keys = require("./config/keys");

const PORT = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(PORT);

// feedadmin
// KNXwD5ukOtpoLpBJ

// mongodb+srv://feedadmin:KNXwD5ukOtpoLpBJ@cluster0.ynlta.mongodb.net/feedback2u?retryWrites=true&w=majority
