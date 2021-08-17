const express = require('express');
const router = express.Router();
const { Post, User } = require('../../db/models')

router.get('/', (req, res) => {
  res.render('sign-in');
});

router.get('/:username', async (req, res) => {
  const dbPosts = await Post.findAll({
    include: {
      model: User
    }
  }).catch((err) => {
    res.status(500).json('unable to find posts');
  });

  const posts = dbPosts.map((post) =>
  post.get({ plain: true })
  );

  res.render('homepage', {
    posts,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
