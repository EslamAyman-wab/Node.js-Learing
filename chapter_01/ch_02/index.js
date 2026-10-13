const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{
    res.send('<h1>this is the home page </h1>')
    next();
})

app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
  `);
});

app.post('/product', (req, res) => {
  console.log(req.body.title);

//   res.send('Product received!');
res.redirect('/');
});

app.listen(3000);