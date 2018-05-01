const expect = require('expect');
const rewire = require('rewire');
var app = rewire('./app');
describe('App',()=>{
    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db',db);

  it('check spy',()=>{
     var spy = expect.createSpy();
     spy();
     expect(spy).toHaveBeenCalled();
  });
  it('it should call getUser',()=>{
    var email = 'nabeel.khan50@gmail.com';
    var password = '123456';
    app.handleSignUp(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email:email,password:password});
  });
});