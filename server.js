var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var ContentOfPages = {
    'page1' : {
        title: "Page 1 | Himesh Nayak",
        nameme: "Himesh Nayak",
        postme: "Student",
        content: 
            `
                Contents are here.Contents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are hereContents are here.        `
        },
       
    'page2' : { 
        title: "Page 2 | Himesh Nayak",
        nameme: "Himesh Nayak",
        postme: "Student",
        content: 
            `
            Contents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are hereContents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are here. Contents  for page 2 are here.
            `
        },
};

function showtemplete (data) {
    var nameme = data.nameme;
    var postme = data.postme;
    var title = data.title;
    var content = data.content;
    var templete = `
        <html>
            <head>
                <title>${title}</title>
                <meta view = "viewport" content = "with=content-width, initial-scale = 1" >
            </head>
            <body>
            <div>
                <h1>Hi, this page one</h1>
                <div class = "content">
                    Name : ${nameme}<br>
                    Post: ${postme}<br>
                    ${content}
                </div>
            </div>
            </body> 
        </html>
    `;
    return templete;
}

app.get('/:PageName', function (req, res) {
    var PageName = req.params.PageName;
  res.send(showtemplete(ContentOfPages[PageName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
