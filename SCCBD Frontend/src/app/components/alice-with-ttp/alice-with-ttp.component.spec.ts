import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliceWithTtpComponent } from './alice-with-ttp.component';

describe('AliceWithTtpComponent', () => {
  let component: AliceWithTtpComponent;
  let fixture: ComponentFixture<AliceWithTtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliceWithTtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliceWithTtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
