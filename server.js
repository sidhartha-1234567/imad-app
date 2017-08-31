var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
   title :'Article One I am Sidhartha Tripathy ',
   heading :'Article one',
   date :'29 october,2017',
    }

   content :`
           '<p>
           This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
       <p>
       
           This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
       '</p>
           This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
       <p>
           This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
      </p>
     };
     function CreateTemplete (data){ 
     var title=data.title;
     var date=data.date;
     var heading=data.heading;
     var content=dara.cotent;
     
    var html templete =
     <html>
<head>
   <title>
        ${title}
   </title> 
     
     <link href="/ui/style.css" rel="stylesheet"/>
  </head> 
<body>
    <div> 
<div>
    <a href='/'>  Home</a>

   <hr/>
   <h3>
      ${heading}
   </h3>
   <div>
       ${date}
   </div>
  <div class="container">
       ${content}
   </div>
   </div>
</div>
</body>
</html>
  :
return html Templete;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Article-one',function(req,res){
res.send(CreateTemplete(Article one));
});

app.get('/Article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});

app.get('/Article-three',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article three.html'));
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;

app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`});
});

