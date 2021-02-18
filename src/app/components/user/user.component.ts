import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  posts: Post[];

  comment: Comment[];

  constructor(private http: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
  }

  userOfPost(id): void {
    this.http.userOfPosts(id)
      .subscribe(data => this.posts = data);
  }

  postOfComment(postId): void {
    this.postService.commentToPost(postId)
      .subscribe(data => this.comment = data);

    console.log(this.comment);
  }
}
