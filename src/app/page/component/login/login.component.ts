import { Component } from '@angular/core';

@Component({
    templateUrl:'./login.html',
    styleUrls:['./login.scss']
})
export class loginComponent{
    userName:string;
    userPass:string;
    constructor(){

    }
    login(){
        console.info(this.userName,this.userPass);
    }
}