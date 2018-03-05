import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

   method = [
     {id:"1",value:"america"},
     {id:"2",value:"russia"},
   ];

  constructor() { }

  validate(abc)
  {
    console.log(abc);
  }
  ngOnInit() {
  }

}
