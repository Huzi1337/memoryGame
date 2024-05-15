import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FetchToDoService } from './fetch-to-do.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  providers: [FetchToDoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'testProject';
  count = 0;
  testResidents = ['billy', 'helly'];

  constructor(private fetchToDo: FetchToDoService) {}

  ngOnInit(): void {
    this.fetchToDo
      .getToDo('pending', 2)
      .subscribe(([toDo]) => console.log(toDo));
  }

  add() {
    this.count++;
  }
}
