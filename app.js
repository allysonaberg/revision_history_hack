const express = require('express')
const app = express()
const port = 3000

//***********   SIMPLE-GIT STUFF ****************//
const simpleGit = require('simple-git')
const git = simpleGit();
const simpleGitPromise = require('simple-git/promise')();

const repo = 'splunk_hackathon_TEST';
const userName = 'allysonaberg';
const password = 'Bunny-7897';
const githubURL = `https://${userName}:${password}@github.com/${userName}/${repo}`;

git.addConfig('user.email', 'allya7897@gmail.com');
git.addConfig('user.name', 'Allyson Aberg');

git.addRemote('origin', githubURL);

require('simple-git')()
    .init()
    .add('./*')
    .commit("first commit!")
    .addRemote('origin', githubURL)
    .push('origin', 'master');

//simpleGitPromise.add('/test.xml')
//    .then(
//        (addSuccess) => {
//            console.log(addSuccess);
//        }, (failedAdd) => {
//            console.log('adding files failed');
//    });
//// Commit files as Initial Commit
//simpleGitPromise.commit('Intial commit by simplegit')
//    .then(
//        (successCommit) => {
//            console.log(successCommit);
//        }, (failed) => {
//            console.log('failed commmit');
//        });
//// Finally push to online repository
//simpleGitPromise.push('origin', 'master')
//    .then((success) => {
//        console.log('repo successfully pushed');
//    }, (failed) => {
//        console.log('repo push failed');
//    });

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


//***********  BITBUCKET STUFF ****************//
//const { Bitbucket } = require('bitbucket')
//const bitbucket = new Bitbucket()

//const clientOptions = {
//    auth: {
//        token: 'NjQ5OTkwNDM3NjE2OuH2FPZjF1/dZTUnYhJc948FtCYp',
//    },
//}

//const bitbucket = new Bitbucket(clientOptions)

//app.get('/', async (req, res) => {

//    // PUSH CONTENT
//    ghrepo.createContents('test2.xml', 'creating test 2', 'this is my content', (err) => {
//        if (err == null) {
//            console.log("complete");
//        }
//        else {
//            console.log("error");
//        }
//    });

//    //GET LOG


//    // GET DIFF

//    // REVERT


//})


app.listen(port, () => console.log('listening at 3000'))