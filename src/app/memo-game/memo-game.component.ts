import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor, NgIf } from '@angular/common';
import { GameControlService } from '../game-control.service';

@Component({
  selector: 'app-memo-game',
  standalone: true,
  imports: [CardComponent, NgFor, NgIf],
  templateUrl: './memo-game.component.html',
  styleUrl: './memo-game.component.scss',
})
export class MemoGameComponent {
  constructor(public gameControl: GameControlService) {}
}
