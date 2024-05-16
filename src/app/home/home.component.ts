import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  videoPlaybackRate = 1;

  @Input() homeResidents!: string[];

  switchPlaybackRate() {
    this.videoPlaybackRate = -this.videoPlaybackRate;
  }
}
