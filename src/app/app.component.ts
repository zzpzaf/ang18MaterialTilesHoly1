import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
// import { HeaderComponent } from './header/header.component';
// import { NavrowComponent } from './navrow/navrow.component';
// import { LeftpaneComponent } from './leftpane/leftpane.component';
// import { MainComponent } from './main/main.component';
// import { RightpaneComponent } from './rightpane/rightpane.component';
// import { FooterComponent } from './footer/footer.component';


export interface Tile {
  cols: number;
  rows: number;
  text: string;
  color: string;
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatGridListModule,
    // HeaderComponent,
    // NavrowComponent,
    // LeftpaneComponent,
    // MainComponent,
    // RightpaneComponent,
    // FooterComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular18-Holy-Grail-repo1(Grid)';

  tiles: Tile[] = [
    {text: 'Tile 1', cols: 12, rows: 1, color: 'dodgerblue'},
    {text: 'Tile 2', cols: 12, rows: 1, color: 'lightblue'},
    {text: 'Tile 3', cols: 2, rows: 8, color: 'lightpink'},
    {text: 'Tile 4', cols: 9, rows: 8, color: 'lightgray'},
    {text: 'Tile 5', cols: 1, rows: 8, color: 'lightgoldenrodyellow'},
    {text: 'Tile 6', cols: 12, rows: 1, color: 'lightseagreen'},
  ];



}