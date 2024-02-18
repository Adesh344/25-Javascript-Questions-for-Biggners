const user ={
    username:"Adesh",
    password:"1234",
    age:21,


    welcomeMessage:function(){
        console.log("Welcome "+this.username);
    }
}

user.welcomeMessage();