import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernartsComponent } from './modernarts.component';

describe('ModernartsComponent', () => {
  let component: ModernartsComponent;
  let fixture: ComponentFixture<ModernartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
