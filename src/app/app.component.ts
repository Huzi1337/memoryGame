import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FetchToDoService } from './fetch-to-do.service';
import { Observable, Subscription, debounceTime, fromEvent } from 'rxjs';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    NgIf,
    NgClass,
    MobileNavigationComponent,
  ],
  providers: [FetchToDoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  private resizeObservable$!: Observable<Event>;
  private resizeSubscription!: Subscription;
  mobileBreakPoint = 500;
  isMobile = window.innerWidth <= this.mobileBreakPoint;

  constructor(private fetchToDo: FetchToDoService) {}

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription = this.resizeObservable$.subscribe(() => {
      this.onResize();
    });
  }
  ngOnDestroy(): void {
    if (this.resizeSubscription) this.resizeSubscription.unsubscribe();
  }

  onResize() {
    this.setIsMobile();
  }
  setIsMobile() {
    this.isMobile = window.innerWidth <= this.mobileBreakPoint;
  }
}
