var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
 articleOne : {
     title : 'Article One | Sanyam Agarwal',
     heading : 'Article One',
     date:'September 21 ,2016',
     content : '  Welcome to article one . '
    
},
 articleTwo : { 
     title : 'Article Two | Sanyam Agarwal',
     heading : 'Article One',
     date:'September 21 ,2016',
     content : '  Welcome to article one . '
     
 },
     
     
 articleThree : { 
     title : 'Article Three | Sanyam Agarwal',
     heading : 'Article One',
     date:'September 21 ,2016',
     content : '  Welcome to article one . '
     
 }
 
};

function createTemplate(data){
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
        var htmlTemplate = 
            `
            <html>
            <head>
             <title>
                 ${title}
             </title>  
             
             <link href ="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
                <div class = "container">
                    <div>
                        <a href='/'> HOME </a>
                    </div> 
                    
                    <hr/>
                    
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                       ${date}
                        
                    </div>
                    <div>
                        <p>
                          ${content}
                        </p>    
                    </div>
                </div>    
                
            </body>    
        
           </html>
         `;
    return htmlTemplate;    
    
}
app.get('/:articleName', function(req,res){articleName;
    
    var articleName = req.param.
   res.send(createTemplate(articles[articleName]));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
