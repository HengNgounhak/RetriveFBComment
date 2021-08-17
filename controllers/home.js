const jwt = require('jsonwebtoken');
const secret = "1234567890";

exports.home = (req, res) => {
    res.render("home");
}

exports.getUser = (req, res) => {
    var myUser = {
        username: req.body.username,
        email: req.body.email
    }

    const token = jwt.sign({
        data: myUser
    }, secret, { expiresIn: 60 * 60 * 4 });

    res.cookie('me', token, { expire: 3600 * 1000 * 24 });
    // store user information to session
    req.session.user = myUser;

    res.send('success');
}