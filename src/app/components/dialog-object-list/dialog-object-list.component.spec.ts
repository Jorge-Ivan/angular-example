import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogObjectListComponent } from './dialog-object-list.component';

describe('DialogObjectListComponent', () => {
  let component: DialogObjectListComponent;
  let fixture: ComponentFixture<DialogObjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogObjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
