import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOrmComponent } from './type-orm.component';

describe('TypeOrmComponent', () => {
  let component: TypeOrmComponent;
  let fixture: ComponentFixture<TypeOrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeOrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
