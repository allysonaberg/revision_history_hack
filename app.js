const express = require('express')
const app = express()
const port = 3000

//***********   SIMPLE-GIT STUFF ****************//
// Simple-git without promise 
const simpleGit = require('simple-git')();
// Shelljs package for running shell tasks optional

const shellJs = require('shelljs');
// Simple Git with Promise for handling success and failure

const simpleGitPromise = require('simple-git/promise')();

// change current directory to repo directory in local
shellJs.cd('~/splunk_hackathon');
// Repo name
const repo = 'splunk_hackathon';  //Repo name
// User name and password of your GitHub
const userName = 'allysonaberg';
const password = 'Bunny-7897';
// Set up GitHub url like this so no manual entry of user pass needed
const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// add local git config like username and email

//simpleGit.addConfig('user.email', 'balvinder294@gmail.com');
//simpleGit.addConfig('user.name', 'Balvinder Singh');

// Add remore repo url as origin to repo

//simpleGitPromise.addRemote('origin', gitHubUrl);

// Add all files for commit

simpleGitPromise.add('.')
    .then(
        (addSuccess) => {
            console.log(addSuccess);
        }, (failedAdd) => {
            console.log('adding files failed');
        });
// Commit files as Initial Commit
simpleGitPromise.commit('Intial commit by simplegit')
    .then(
        (successCommit) => {
            console.log(successCommit);
        }, (failed) => {
            console.log('failed commmit');
        });
// Finally push to online repository
simpleGitPromise.push('origin', 'master')
    .then((success) => {
        console.log('repo successfully pushed');
    }, (failed) => {
        console.log('repo push failed');
    });


app.get('/', async (req, res) => {


});

//***********   GITHUB STUFF ****************//
//var github = require('octonode')

//var client = github.client('e15e4af58f0fd8671e669801b409d7fe2e18d65a');
//var ghme = client.me();
//var ghrepo = client.repo('allysonaberg/splunk_hackathon');

//app.get('/', async (req, res) => {

//    // PUSH CONTENT
//    //ghrepo.updateContents('test2.xml', 'creating test 2 but updating it', 'this is my content UPDATED', 'ddcsdasd7dcs' (err) => {
//    //    if (err == null) {
//    //        console.log("complete");
//    //    }
//    //    else {
//    //        console.log("error");
//    //    }
//    //});

//    ghrepo.createContents('test2.xml', 'creating test 2', 'this is my content BUT UPDATED', (err) => {
//        console.log(err);
//    });



//    //GET LOG


//    // GET DIFF

//    // REVERT


//})


app.listen(port, () => console.log('listening at 3000'))