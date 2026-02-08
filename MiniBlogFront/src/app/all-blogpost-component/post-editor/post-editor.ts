import { Component, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../../services/blog-post';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-post-editor',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './post-editor.html',
  styleUrl: './post-editor.scss',
})
export class PostEditor {

  protected title : string
  protected content : string
  protected createdAt : Date


  constructor()
  {
    this.title = ""
    this.content = ""
    this.createdAt = new Date()
  }

  @Output() close = new EventEmitter<Event>()

  onCloseClicked(evt: Event)
  {
    this.close.emit(evt)
  }

  onSaveClicked(evt : Event)
  {

  }


}
