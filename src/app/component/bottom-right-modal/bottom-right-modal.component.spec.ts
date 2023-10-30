import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightModalComponent } from './bottom-right-modal.component';

describe('BottomRightModalComponent', () => {
  let component: BottomRightModalComponent;
  let fixture: ComponentFixture<BottomRightModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomRightModalComponent]
    });
    fixture = TestBed.createComponent(BottomRightModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
