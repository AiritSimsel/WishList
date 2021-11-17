const date = require('../getDate.js');
const mongoose = require('mongoose');

const WishFromMongo = mongoose.model('Wish');

const Wish = require('../models/wish');

exports.getMainPage = (req, res) => {
    let today = date.getTodayDateLong();
    WishFromMongo.find((error, wishes) => {
        if(!error) {
            res.render('index.ejs', {date: today, myWish: wishes});
        } else {
            console.log(error);
        }
    });
};

exports.getAdminPage = (req, res) => {
    let today = date.getTodayDateLong();
    WishFromMongo.find((error, wishes) => {
        if(!error) {
            res.render('admin.ejs', {date: today, myWish: wishes});
        } else {
            console.log(error);
        }
    });
};

exports.postNewWish = (req, res) => {
    const userWish = req.body.newWish;
    let newWish = new WishFromMongo();
    newWish.item = userWish;  

    newWish.save((error, response) => {
        if(!error) {
            console.log(response);
            res.redirect('/admin');
        } else {
            console.log(error);
        }
    });  

};

exports.deleteWish = (req, res) => {
    const checkedWishId = req.body.checkbox;

    WishFromMongo.findByIdAndDelete(checkedWishId, (error) => {
        if(!error){
            res.redirect('/admin');
        } else {
            console.log("Failed to delete");
        }
    });
};