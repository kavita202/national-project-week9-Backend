import LocalStrategy from "passport-local";
import bycrpt from "bycrpt";
function initialize(passport, getUserByEmail, getUserById) {
  // call done when you are done authenticating user: 1st arg is the error, 2nd is user, 3rd: message
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email);
    // cant find a user
    if (user == null) {
      return done(null, false, { message: "user not found in system" });
    }
    // check passwords match
    try {
      if (await bycrpt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserById(id));
  });
}

export default initialize;
