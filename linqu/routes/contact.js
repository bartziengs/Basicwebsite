import express from 'express';

const router = express.Router();

/* GET index page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title: 'Contact'
  });
});

export default router;