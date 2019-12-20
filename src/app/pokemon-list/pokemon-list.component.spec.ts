import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { MaterialModule } from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ PokemonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter by "char" and "cha"', async (done) => {
    fixture.whenStable().then(() => {
      let results = component.dataSource.data.filter(el => el.Name.toLowerCase().includes('char')).length;
      expect(results).toBe(3);
      results = component.dataSource.data.filter(el => el.Name.toLowerCase().includes('cha')).length;
      expect(results).toBe(6);
      done();
    });
  });

  it('should remove empty objects', async (done) => {
    component.api.getPokemonData().subscribe(data => {
      const filteredData = component.removeEmpty(data);
      expect(component.findEmpty(data)).toBeTruthy();
      expect(component.findEmpty(filteredData)).toBeFalsy();
      done();
    });
  });
});
