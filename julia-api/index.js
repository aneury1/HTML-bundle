const express= require('express');
const app = express();
const port = 8989;


app.get('/',(req,res)=>{
  res.header({'content-type':'html'});
  res.end(`<b>Invalid endpoint, required a valid endpoint and token.</b>`);
});

app.post('/products', function(req, res){

});


app.get('/products', function(req, res){
  res.header({'content-type':'application/json'});
  res.end('[]');
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})