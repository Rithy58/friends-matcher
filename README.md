# friends-matcher [![Build Status](https://travis-ci.org/Rithy58/friends-matcher.svg?branch=master)](https://travis-ci.org/Rithy58/friends-matcher) [![codecov](https://codecov.io/gh/Rithy58/friends-matcher/branch/master/graph/badge.svg)](https://codecov.io/gh/Rithy58/friends-matcher) [![Code Climate](https://codeclimate.com/github/Rithy58/friends-matcher/badges/gpa.svg)](https://codeclimate.com/github/Rithy58/friends-matcher)

## About
Project friends-matcher is the complete full-stack web app called **Matches by Rithy58**, an app that allows a facebook user to match their friends together.

Try it by visiting http://Matches.Rithy58.com/

Or get the mobile apps (currently in development at rithy58/matches-mobile)

### History
One night, a little before my Finals Week, I started to browse facebook to distract myself and avoid studying for my finals. Two things happened, I saw a widely shared picture captioned "tag ur friend and their crush to ruin their life" and I discovered a new framework called NodeJS (well new to me anyway). So right at that moment, I went to sleep because it was like 3am. But when I woke up, I had the idea of trying to learn something new and apply it to the idea of creating the app for people to match their friends, a friends-matcher. It started with a lot of diagrams and planning on my whiteboard while trying to learn a ton of APIs and reading a bunch of documentations. I managed to get a simple NodeJS app working so I created a GitHub Repo for it and since I've always wanted to try Heroku, I deployed it there. I added ExpressJS and MongoDB to it and apparently there is a framework called MEAN which utlizes MongoDB, ExpressJS, AngularJS and NodeJS so I figured I might as well use AngularJS for my front-end. There were a lot of roadblocks and tools that I spend a lot of time on but leave out of this "short" history but that's how this project came to be.

### Roadmap
Currently, user can login via the web app front-end and the back-end will authenticate the user via facebook. The next goal is to retrieve user's taggable friends list and allow the user create match. From here, there are many possibilities. The biggest road spit that I haven't decide is whether I want it to be that funny short-live app that will just publicly post the match and make things awkward or be a serious possibly sustainable dating app that will notified the matched-friends privately and have a way for them to anonymously try to match each other. The first is pretty simple and can be done relatively easy. The latter is much more interesting and could be more fun. I could also have the app allows user to join and match or "like" the user's friends. If two users like each other, then the app will notified them. This take a bit of a different turn but the friends-matching feature will still exist as a user can match their friends and notified that they have been matched but not with who(or maybe have a checkbox that would just tell them) and the matched-users will have to somehow like each other, maybe given a choice of 3 other people or something. I'm not sure yet. This is now more of a documentation of my thoughts and planning rather than roadmap but once I have a concrete roadmap, I'll update this section. Writing down thoughts and ideas is a good idea anyway.

#### Tasks List
1. Complete Full Stack Web App
  1. Complete back-end
    1. Database
    1. ~~Facebook authentication~~
    1. Create Match
        1. Check Match
  1. Complete front-end
    1. ~~Login~~
    1. Dashboard
    1. Create New Match
1. Mobile app
  1. ~~Choose cross-platform framework~~
  1. ~~Start it~~
  1. UI
    1. Login Window
    1. Authentication
    1. ~~Side Menu~~
1. Misc
  1. SSL
  1. Facebook Review
  1. Web + Worker Model

##### TODO List
+ Redo Tests
+ Come up with better tasks list
+ Proper Error Handling

### Credits:
+ Heroku - https://heroku.com
+ NodeJS - https://nodejs.org
  + ExpressJS - http://expressjs.com
  + PassportJS - http://passportjs.org
  + Many other dependencies
+ MongoDB - https://www.mongodb.com
+ mLab - https://mlab.com/
+ AngularJS - https://angularjs.org/
  + Angular Material - https://material.angularjs.org
+ Fire Icon - https://www.iconfinder.com/iconeden
