import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Generation', 'Types', 'Special Attack(s)', 'Details'];
  dataSource;
  rowOver;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPokemonData().subscribe(data => {
        this.dataSource = data.filter(value => Object.keys(value).length !== 0);
        console.log(this.dataSource);
      });
  }

  mouseover(row) {
    console.log(row);
    this.rowOver = row;
  }

}
