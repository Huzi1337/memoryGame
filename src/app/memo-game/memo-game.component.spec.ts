import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoGameComponent } from './memo-game.component';

describe('MemoGameComponent', () => {
  let component: MemoGameComponent;
  let fixture: ComponentFixture<MemoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
