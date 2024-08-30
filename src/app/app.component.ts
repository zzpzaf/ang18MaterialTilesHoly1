import { Component, inject, OnInit, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AddCompDynDirective } from './add-comp-dyn.directive';
import { HeaderComponent } from './header/header.component';
import { NavrowComponent } from './navrow/navrow.component';
import { LeftpaneComponent } from './leftpane/leftpane.component';
import { MainComponent } from './main/main.component';
import { RightpaneComponent } from './rightpane/rightpane.component';
import { FooterComponent } from './footer/footer.component';

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  color: string;
}

interface DynLayOutComponentsType {
  [key: string]: Type<any>;
}

export const DynLayOutComponents: DynLayOutComponentsType = {
  header: HeaderComponent,
  navrow: NavrowComponent,
  leftpane: LeftpaneComponent,
  main: MainComponent,
  rightpane: RightpaneComponent,
  footer: FooterComponent,
};




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatGridListModule,
    HeaderComponent,
    NavrowComponent,
    LeftpaneComponent,
    MainComponent,
    RightpaneComponent,
    FooterComponent,
    AddCompDynDirective,
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
    { text: 'header', cols: 12, rows: 2, color: 'dodgerblue' },
    { text: 'navrow', cols: 12, rows: 2, color: 'lightblue' },
    { text: 'leftpane', cols: 2, rows: 16, color: 'lightpink' },
    { text: 'main', cols: 9, rows: 16, color: 'lightgray' },
    { text: 'rightpane', cols: 1, rows: 16, color: 'lightgoldenrodyellow' },
    { text: 'footer', cols: 12, rows: 2, color: 'lightseagreen' },
  ];

  private tilesMedium: Tile[] = [
    { text: 'header', cols: 12, rows: 2, color: 'dodgerblue' },
    { text: 'navrow', cols: 12, rows: 2, color: 'lightblue' },
    { text: 'leftpane', cols: 2, rows: 14, color: 'lightpink' },
    { text: 'main', cols: 10, rows: 14, color: 'lightgray' },
    { text: 'rightpane', cols: 12, rows: 2, color: 'lightgoldenrodyellow' },
    { text: 'footer', cols: 12, rows: 2, color: 'lightseagreen' },
  ];

  private tilesSmall: Tile[] = [
    { text: 'header', cols: 12, rows: 3, color: 'dodgerblue' },
    { text: 'navrow', cols: 12, rows: 2, color: 'lightblue' },
    { text: 'leftpane', cols: 12, rows: 4, color: 'lightpink' },
    { text: 'main', cols: 12, rows: 10, color: 'lightgray' },
    { text: 'rightpane', cols: 12, rows: 2, color: 'lightgoldenrodyellow' },
    { text: 'footer', cols: 12, rows: 2, color: 'lightseagreen' },
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
