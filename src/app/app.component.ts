import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
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
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private componentName = this.constructor.name.replace('_', '');
  public title = 'Angular18-Holy-Grail-repo1(Grid)';
  public tiles: Tile[] = [];

  private currentBreakpoint: string = '';

  private tilesLarge: Tile[] = [
    { text: 'Tile 1', cols: 12, rows: 1, color: 'dodgerblue' },
    { text: 'Tile 2', cols: 12, rows: 1, color: 'lightblue' },
    { text: 'Tile 3', cols: 2, rows: 8, color: 'lightpink' },
    { text: 'Tile 4', cols: 9, rows: 8, color: 'lightgray' },
    { text: 'Tile 5', cols: 1, rows: 8, color: 'lightgoldenrodyellow' },
    { text: 'Tile 6', cols: 12, rows: 1, color: 'lightseagreen' },
  ];

  private tilesMedium: Tile[] = [
    { text: 'Tile 1', cols: 12, rows: 1, color: 'dodgerblue' },
    { text: 'Tile 2', cols: 12, rows: 1, color: 'lightblue' },
    { text: 'Tile 3', cols: 2, rows: 7, color: 'lightpink' },
    { text: 'Tile 4', cols: 10, rows: 7, color: 'lightgray' },
    { text: 'Tile 5', cols: 12, rows: 1, color: 'lightgoldenrodyellow' },
    { text: 'Tile 6', cols: 12, rows: 1, color: 'lightseagreen' },
  ];

  private tilesSmall: Tile[] = [
    { text: 'Tile 1', cols: 12, rows: 1, color: 'dodgerblue' },
    { text: 'Tile 2', cols: 12, rows: 1, color: 'lightblue' },
    { text: 'Tile 3', cols: 12, rows: 2, color: 'lightpink' },
    { text: 'Tile 4', cols: 12, rows: 5, color: 'lightgray' },
    { text: 'Tile 5', cols: 12, rows: 1, color: 'lightgoldenrodyellow' },
    { text: 'Tile 6', cols: 12, rows: 1, color: 'lightseagreen' },
  ];

  ngOnInit(): void {
    this.getBreakepoints();
  }

  private getBreakepoints(): void {
    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => this.getTiles());
  }

  private getTiles(): void {
    if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
      this.tiles = this.tilesMedium;
    } else if (
      this.breakpointObserver.isMatched(Breakpoints.Small) ||
      this.breakpointObserver.isMatched(Breakpoints.XSmall)
    ) {
      this.currentBreakpoint = Breakpoints.Small;
      this.tiles = this.tilesSmall;
    } else {
      this.tiles = this.tilesLarge;
    }
    // console.log(
    //   '>===>>> ' + this.componentName + ' Result : ' + this.currentBreakpoint
    // );
  }
}
