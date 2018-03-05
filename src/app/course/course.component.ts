import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  name1 :string;
  text1 :string;
  sushu= "sushuuu";
  bushu = ["bushu1","bushu2","bushu3"];
  isActive : boolean;
  isfinval ;

  constructor() { }
 
   btnclick($event)  {
    this.isActive = !this.isActive;
    console.log($event);
   }

   onKeyup(){
    console.log(this.name1);
     this.text1 = this.name1;
   
  }

  onfinishclick(isfinished)
  {
    this.isfinval = isfinished;
    console.log(isfinished);
  }

  ngOnInit() {
    console.log(name);

  }

}
