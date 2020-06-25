require('dotenv').config();

const express = require('express')
const app = express()
const port = 3000


//*********** OCTONODE STUFF ****************//
var github = require('octonode')

var client = github.client(process.env.GIT_KEY);
var ghme = client.me();
var ghrepo = client.repo('allysonaberg/splunk_hackathon');

app.get('/', async (req, res) => {

    // *** PUSH CONTENT **** //
    //ghrepo.createContents('test223.xml', 'creating test 2', 'this is my content BUT UPDATED', (err) => {
    //    //err handling here?
    //});

    // *** LOG CONTENT **** //
    //LOG -> how do we get the actual xml out of this????
    // get commits

    ghrepo.commits((err, commits) => {
        console.log(process.env.GIT_KEY);
        console.log(commits);
    });

    //ghrepo.commit('973c7e6a94c26013bbda97a2566e81c1f06157c9', (err, contents) => {
    //    console.log(contents);
    //});
    //path


    // *** DIFF CONTENT **** //
    //octonode can only compare branches...., we'll need to use another external diff library


    // *** LOG CONTENT **** //
    //grab the data from the chosen commit, send it back

});

//***********   SIMPLE-GIT STUFF ****************//
//const simpleGit = require('simple-git')();

//const simpleGitPromise = require('simple-git/promise')();


app.listen(port, () => console.log('listening at 3000'))