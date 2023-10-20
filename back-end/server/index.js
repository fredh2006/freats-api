const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db');
const Post = require('./models/Posts')

const app = express();
const PORT = process.env.PORT||3000;

app.use(cors());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }))
app.set('view-engine', 'ejs')
app.set('views', './views')

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/addpost', (req, res)=>{
    res.render('postmaker.ejs')
})

app.post('/addpost', async (req, res)=>{
    try {
        const data = {
          author: req.body.author,
          date: req.body.date,
          title: req.body.title,
          images: req.body.images,
          firstPara: req.body.firstPara,
          content: req.body.content,
          time: req.body.time
        }
        const post = await Post.create(data)
        console.log(req.body)
        console.log(req.body.author);
        console.log(req.body.time)
        console.log(post)
        res.send(post)
      } catch (err) {
        res.status(500).send(err.message)
      }
})

app.get('/api/posts', async (req, res)=>{
    try{
        const posts = await Post.find({})
        res.json (posts);
        console.log(posts);
    }catch(err){
        res.status(500).send(err.message)
    }
})

app.get('/api/posts/:id', async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.json (post);
        console.log(post);
    }catch(err){
        res.status(500).send(err.message)
    }
})