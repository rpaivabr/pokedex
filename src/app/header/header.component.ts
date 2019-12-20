import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,
              private dialog: MatDialog) { }

  ngOnInit() {}

  goHome() {
    this.router.navigateByUrl('/');
  }

  openDialog(): void {
    this.dialog.open(InfoDialogComponent, {
      width: '650px'
    });
  }

}
