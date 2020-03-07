const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const cors = require('cors');
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

admin.initializeApp();

app.post('/newMessage', (req, res) => {


    admin.firestore().collection('Messages').add(req.body).then(result => {
        return res.json(result);
    }).catch(err => {
        return res.json(err);
    });
});

app.post('/updatePageViews', (req, res) => {

    let update = {
        numOfVisits: admin.firestore.FieldValue.increment(1),
        lastVisit: Date.now
    }
    admin.firestore().collection('Stats').doc('visits').update(update).then(result => {
        return res.json(result)
    }).catch(err => {
        return res.json(err);
    });


});

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
