import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, DatePipe } from '@angular/common'; // <-- Add DatePipe here

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [HttpClientModule, NgFor, DatePipe], // <-- And add it here
  templateUrl: './list-posts.html',
  styleUrls: ['./list-posts.css']
})
export class ListPostsComponent implements OnInit {

  posts?: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(): void {
    this.http.get<Post[]>('https://localhost:7136/api/post')
      .subscribe({
        next: (data: Post[]) => {
          this.posts = data;
          console.log(this.posts);
        }
      });
  }
}