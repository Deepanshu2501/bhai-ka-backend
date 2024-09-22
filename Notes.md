Express.js
it is used to send and accept request between server and host/computer

// how to write / use express.js

// require('dotenv').config() 
// const express = require('express')
// const app = express()
// const port = 5000

// to send data in form of json on url
// const githubData = {
//     "login": "Deepanshu2501",
//     "id": 175596052,
//     "node_id": "U_kgDOCndiFA",
//     "avatar_url": "https://avatars.githubusercontent.com/u/175596052?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Deepanshu2501",
//     "html_url": "https://github.com/Deepanshu2501",
//     "followers_url": "https://api.github.com/users/Deepanshu2501/followers",
//     "following_url": "https://api.github.com/users/Deepanshu2501/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Deepanshu2501/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Deepanshu2501/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Deepanshu2501/subscriptions",
//     "organizations_url": "https://api.github.com/users/Deepanshu2501/orgs",
//     "repos_url": "https://api.github.com/users/Deepanshu2501/repos",
//     "events_url": "https://api.github.com/users/Deepanshu2501/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Deepanshu2501/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 0,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 2,
//     "created_at": "2024-07-15T08:13:07Z",
//     "updated_at": "2024-08-09T07:27:03Z"
// }

// app.get('/github', (req, res) => {
//     res.json(githubData)
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.get('/instagram', (req, res) => {
//     res.send('deepanshu_')
// });  

// app.get('/login', (req,res) => {
//     res.send('<h1>Please login at deepanshu.com</h1>')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// here after starting this, code does not terminate as doing before when we are simply doing console.log this is server
// to check it simply go to localhost as it is not porting


// Mongoose
it is used to write data models which tells about the input/data fields used in the page

Syntax or example to create data model:
1. import mongoose from "mongoose"
2. create schema which contains two objects, one for types of data fields stored in database and another is to define timestramps(createdAt,updatedAt):
const userSchema = new mongoose.Schema({
a =>  username: String,
      email: String,
      unique: Boolean
b =>
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
// to connect two models, use two keywords: type, ref
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "name" , here we give name of model which we want to connect and name given inside model while exporting
    }
},{timestramp: true})
3. export const User = new mongoose.model("for what","on what basis")
Ex: export const User = new mongoose.model("User","userSchema")


// git file/folder pushing optimization
to push any empty folder on git, we need to create a file inside that folder named '.gitkeep'
to make new files using commands, use this syntax:
       cd fn; dir; New-Item fileN


// Project Setup
1. first create package.json file
2. add git repository
3. create index.js file
4. install nodemon(for server updation)
5. then modify package.json file(addtype,script(dev))



** In js, importing is done in two ways: modules(import) and common.js(require)

** We use Nodemon to stop the method of stop/starting of server again and again
syntax: 1.npm i -D nodemon
        2.And change scripts(dev:nodemon filepath(src/index.js))

** Difference b/w main dependency and dev dependency is that it(dev) use in development not in production