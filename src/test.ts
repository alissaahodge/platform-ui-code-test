// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ListComponent } from './app/list/list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should move provider from unselected to selected list', () => {
    const provider = {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    };
    component.selectCard(provider);
    expect(component.unselectedProviders.length).toEqual(2);
    expect(component.selectedProviders.length).toEqual(1);
  });

  it('should move provider from selected to unselected list', () => {
    const provider = {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    };
    component.selectCard(provider);
    component.unSelectCard(provider);
    expect(component.selectedProviders.length).toEqual(0);
    expect(component.unselectedProviders.length).toEqual(3);
  });

  it('should retain the state of the providers when the app is reloaded', () => {
    const provider = {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    };
    component.selectCard(provider);
    localStorage.setItem('selectedProviders', JSON.stringify(component.selectedProviders));
    localStorage.setItem('unselectedProviders', JSON.stringify(component.unselectedProviders));
    component.ngOnInit();
    expect(component.selectedProviders.length).toEqual(1);
    expect(component.unselectedProviders.length).toEqual(3);
  });
});
