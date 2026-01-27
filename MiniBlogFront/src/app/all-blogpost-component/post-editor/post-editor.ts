import { Component, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../../services/blog-post';


@Component({
  selector: 'app-post-editor',
  imports: [],
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
