import { Component, Input } from '@angular/core';
import { NgOptimizedImage, NgIf } from '@angular/common';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() imageURL!: string;
  @Input() gameControl!: GameControlService;

  constructor() {}
  isShown = false;
  isCompleted = false;

  hide() {
    this.isShown = false;
  }
  show() {
    if (!this.gameControl.controlsDisabled) {
      this.isShown = true;
      this.gameControl.selectCard(this);
    }
  }
  markCompleted() {
    this.isCompleted = true;
  }
}
