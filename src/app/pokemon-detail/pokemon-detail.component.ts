import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  id: string;
  pokemon: any;

  constructor(public api: ApiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.api.getPokemonByNumber(+this.id).subscribe(data => {
        this.pokemon = data;
        console.log(this.pokemon);
      });
    });
  }

  goToDetail(id: number) {
    this.router.navigateByUrl(`/${id}`);
  }

}