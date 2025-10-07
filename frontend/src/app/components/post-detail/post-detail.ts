import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, DatePipe } from '@angular/common'; // <-- Add DatePipe here

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [HttpClientModule, NgIf, DatePipe], // <-- And add it here
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css']
})
export class PostDetailComponent implements OnInit {

  private routeSub: Subscription = new Subscription();
  private id: number = 0;
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.initData();
    });
  }

  initData(): void {
    this.http.get<Post>("https://localhost:7136/api/post/" + this.id)
      .subscribe({
        next: (data: Post) => {
          this.post = data;
          console.log(this.post);
        }
      });
  }
}