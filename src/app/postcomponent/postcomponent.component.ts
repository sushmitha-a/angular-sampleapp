import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit {
  
  posts :any;
  private http; 

  constructor(http : Http) {
    this.http = http;
    http.get('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      this.posts = response.json();
    },error=>{ console.log(error)}); 
   }
   createPost(input : HTMLInputElement)
   {
     let po = {title:input.value};

     this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(po)).subscribe(response =>
    {
          po['id']=response.json().id;
          this.posts.splice(0,0,po);
          console.log(response.json());
    });
   }

   deletePost(post)
   {
    this.http.delete('https://jsonplaceholder.typicode.com/posts'+'/'+post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      },
      (error: Response) =>
      {
         if(error.status===404)
         alert("already deleted");
      }
    );
   }
  ngOnInit() {
  }

}
