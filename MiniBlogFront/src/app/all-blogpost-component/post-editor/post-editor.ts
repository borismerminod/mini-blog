import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogPost } from '../../services/blog-post';


@Component({
  selector: 'app-post-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-editor.html',
  styleUrl: './post-editor.scss',
})
export class PostEditor {

  protected title : string
  protected content : string
  protected createdAt : string


  constructor()
  {
    this.title = '';
    this.content = '';
    this.createdAt = new Date().toISOString().substring(0, 10);
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
