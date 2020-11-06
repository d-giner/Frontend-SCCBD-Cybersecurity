import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliceWithRsaComponent } from './alice-with-rsa.component';

describe('AliceWithRsaComponent', () => {
  let component: AliceWithRsaComponent;
  let fixture: ComponentFixture<AliceWithRsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliceWithRsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliceWithRsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
