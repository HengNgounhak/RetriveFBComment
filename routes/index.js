const express = require('express');
const router = express.Router();
const home = require('../controllers/home');

router.get('/', home.home);
router.post('/user', home.getUser);

router.get('/price', (req, res) => {
    res.render('price');
});

router.get('/page', (req, res) => {
    if (req.session.user) {
        res.render('page');
    } else {
        res.redirect('/')
    }
});

router.get('/livecomment', (req, res) => {
    if (req.session.user) {
        res.render('livecomment');
    } else {
        res.redirect('/')
    }
});

router.get('/url', (req, res) => {
    if (req.session.user) {
        res.render('tableurl');
    } else {
        res.redirect('/')
    }
});

router.get('/comment', (req, res) => {
    if (req.session.user) {
        res.render('tablecomment');
    } else {
        res.redirect('/')
    }
});

router.get('/user', (req, res) => {
    if (req.session.user) {
        res.render('tableuser');
    } else {
        res.redirect('/')
    }
});

router.get('/tablepage', (req, res) => {
    if (req.session.user) {
        res.render('tablepage');
    } else {
        res.redirect('/')
    }
});

router.get('/getSession', (req, res) => {
    res.send(req.session.user)
})

router.get('/logout', (req, res) => {
    // clear session
    req.session.destroy();
    res.send('success');
})

router.post('/appID', (req, res) => {
    res.send(process.env.CLIENTID);
})
module.exports = router;