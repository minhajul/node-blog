const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('../firebase-adminsdk.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio-401c6.firebaseio.com",
});

exports.index = async (req, res) => {
    const posts = await getPosts().then(snap => snap);

    res.render('blog/index', {
        posts
    })
};

exports.details = async (req, res) => {
    res.render('blog/details', {
        blog : blogs[req.params.id - 1]
    })
};

async function getPosts(){
    const ref = firebaseAdmin.database().ref('posts');
    const query = ref.orderByKey().limitToFirst(10);

    return query.once('value').then(snap => snap.val());
}
