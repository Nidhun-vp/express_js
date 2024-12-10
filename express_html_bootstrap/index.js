
//basic setup
const express=require('express');
const path=require('path');
var app=express();

app.get('/',(req,res)=>{
    res.send('Express sample project')
});

app.use(express.static(path.join(__dirname,"public")));



app.get('/home',(req,res)=>{
    const object1={
        name:"nidhun",
        place:"kottakkal",
        salary:12000          
            
    }
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
<ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="container">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="images/ocean.jpg" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
    <p>helloo world--Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque repellat qui ab ad, aspernatur perspiciatis
    explicabo accusantium illum dolorem tempora praesentium nemo sint similique, iusto, eveniet ratione deleniti.
    Repellendus quidem id aliquam! Quas, qui numquam ex dicta officia similique repellendus iusto nulla. Voluptate debitis,
    neque eveniet perferendis voluptatem asperiores est sed, ipsum temporibus quae reprehenderit inventore pariatur impedit
    deserunt velit. Culpa corrupti maxime possimus ut tempore at voluptate autem commodi vel animi accusamus, rerum totam
    ipsa earum beatae dolorum quam pariatur nobis temporibus itaque reprehenderit? Vitae repellat sit qui. Voluptatibus odit
    dolorum obcaecati velit accusamus, consequuntur possimus nisi quae?</p>
    <h1>loreum sample</h1>
    <div class="container">
  <img src="./images/image.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
</body>
</html>`)
})
app.listen(3000)


