import { Component, effect } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { IArticle, ICategory } from '../data.service';
// import { ContentService } from '../content.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

export interface ICategory {
  categoryId: number;
  categoryTitle: string;
}

export interface ISiteMenu {
  siteMenuId: number;
  siteMenuTitle: string;
}

@Component({
  selector: 'app-navrow',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  templateUrl: './navrow.component.html',
  styleUrl: './navrow.component.scss'
})
export class NavrowComponent {

  componentName = this.constructor.name.replace('_', '');
  navbarName: string = "Navigation"

  navMenuItems1: ISiteMenu[] = [
    {siteMenuId: 1, siteMenuTitle: 'Home'},
    {siteMenuId: 2, siteMenuTitle: 'About'},
    {siteMenuId: 3, siteMenuTitle: 'Contact'},
  ];


  navMenuItems2: ICategory[] = [ 
    {categoryId: 1, categoryTitle: 'Category 1'},
    {categoryId: 2, categoryTitle: 'Category 2'},
    {categoryId: 3, categoryTitle: 'Category 3'},
    {categoryId: 4, categoryTitle: 'Category 4'},
    {categoryId: 5, categoryTitle: 'Category 5'},
  ];



  // dashToggle(): void {
  //   console.log('>===>> ' + this.componentName + 'dashToggle clicked!');
  // }

  itemSiteMenuClicked(category: ISiteMenu): void {
    console.log('>===>> ' + this.componentName + ' - itemClicked', category);
    // this.contentService.getCategoryArticles(category.categoryId);
  }

  itemCategoryClicked(category: ICategory): void {
    console.log('>===>> ' + this.componentName + ' - itemClicked', category);
    // this.contentService.getCategoryArticles(category.categoryId);
  }



}
