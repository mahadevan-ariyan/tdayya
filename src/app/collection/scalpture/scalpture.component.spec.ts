import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalptureComponent } from './scalpture.component';

describe('ScalptureComponent', () => {
  let component: ScalptureComponent;
  let fixture: ComponentFixture<ScalptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
