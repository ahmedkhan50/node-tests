const express =require('express');

const app = express();

app.get('/',(request,response)=>{
   response.send('hello');
});

app.get('/error',(request,response)=>{
  response.status(404).send({
      error:'page not found..!!'
  })
});

app.get('/users',(request,response)=>{
    response.status(200).send([
        {name:'ahmed',age:27},
        {name:'khan',age:22}
    ]);
});

app.listen(3000,()=>{
    console.log('server started!!');
});

module.exports.app = app;