const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()

router.get("/", (req, res) => {
    const query = req.query.s;

    if (query) {
        const data = blogs.filter(blog =>
            blog.title.toLowerCase().includes(query.toLowerCase())
        );

        if (data.length === 0) {
            res.render('noResult', {
                query: query
            });
        } else {
            res.render("home", {
                blogs: data
            })
        }


    } else {
        res.render("home", {
            blogs: blogs
        })
    }
})

router.get("/blog/:slug", (req, res) => {

    data = blogs.filter((e) => {
        if (e.slug == req.params.slug) {
            return e;
        }
    })

    res.render('post', {
        title: data[0].title,
        content: data[0].content,
        author: data[0].author,
        date: data[0].date,
        image: data[0].image,
    })
})

router.get("/services", (req, res) => {
    res.render('services', {
        image: "image.jpeg"
    })
})

router.get("/about", (req, res) => {
    res.render('about')
})

router.get("/contact", (req, res) => {
    res.render('contact')
})

module.exports = router