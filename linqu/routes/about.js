import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About',
    menu: 'about'
  });
});

export default router;
