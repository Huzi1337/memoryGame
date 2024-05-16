import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [NgClass, RouterLink, NgOptimizedImage],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.scss',
})
export class MobileNavigationComponent {
  currentClasses = {
    navigation__mobile: true,
    active: false,
  };

  constructor(private elementRef: ElementRef) {}

  openMenu() {
    this.currentClasses.active = true;
  }

  @HostListener('document:click', ['$event.target'])
  closeOnClickOutside(target: HTMLElement) {
    if (!this.elementRef.nativeElement.contains(target)) this.closeMenu();
  }

  closeMenu() {
    this.currentClasses.active = false;
  }
}
