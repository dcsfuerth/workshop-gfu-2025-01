import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  standalone: false,

  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnInit, OnChanges, OnDestroy {
  @Input() id: string = '';
  @Input() stars: number = 0;

  @Output() upvoteHappened = new EventEmitter<string>();
  @Output() downvoteHappened = new EventEmitter<string>();

  upvote() {
    console.log('RatingComponentupvote', this.id);
    this.upvoteHappened.emit(this.id);
  }
  downvote() {
    console.log('RatingComponent.downvote', this.id);
    this.downvoteHappened.emit(this.id);
  }

  constructor() {
    console.log('RatingComponent.constructor');
  }
  ngOnDestroy(): void {
    console.log('RatingComponent.ngOnDestroy', this.id);
  }

  ngOnInit(): void {
    console.log('RatingComponent.ngOnInit', this.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('RatingComponent.ngOnChanges', this.id, changes);
  }

}
