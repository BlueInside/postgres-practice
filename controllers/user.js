const db = require('../db/queries');

async function getUsernames(req, res) {
    const { search } = req.query
    console.log(search)
    let usernames;
    if (search)
        usernames = await db.getAllUsernames(search);
    else
        usernames = await db.getAllUsernames();

    console.log(`Usernames: ${usernames.map(u => u.username).join(", ")}`);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
    res.render('./form')
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    console.log(username)
    await db.insertUsername(username);
    res.redirect("/");
}

async function deleteUsernames(req, res) {
    console.log('Deleting usernames');
    await db.deleteUsernames();
    console.log('Done');
    res.redirect('/');
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    deleteUsernames
};