# vep
Veterans Employment Program

# Getting started
* npm install
* npm start

# Guide
To add new pages, add the following in index.js (restart required)
'''
app.get('/home', function(request, response) {
  response.render('pages/xxx');
});

'''
and add xxx.ejs file in the pages folder.
