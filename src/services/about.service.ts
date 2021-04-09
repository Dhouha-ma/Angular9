import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  info = {
    nom: 'med',
    email: 'med@gmail.com',
    tel: '0654268'
  };
  comments = [
    {date: new Date(), message: 'A'},
    {date: new Date(), message: 'B'},
    {date: new Date(), message: 'C'}
  ];

  addComment(c){
    c.date = new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

  getInfo(){
    return this.info;
  }
}
