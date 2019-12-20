import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Name', 'Generation', 'Types', 'Total Attack(s)', 'Details'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  rowOver;

  constructor(private api: ApiService,
              private router: Router) { }

  ngOnInit() {
    // only filter by name
    this.dataSource.filterPredicate = (data, filter): boolean => {
      return data.Name.toLowerCase().includes(filter);
    };
    // retrieve list from api
    this.api.getPokemonData().subscribe(data => {
      this.dataSource.data = data.filter((value: any[]) => Object.keys(value).length !== 0);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  doFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  goToDetail(id: number) {
    this.router.navigateByUrl(`/${id}`);
  }

}
