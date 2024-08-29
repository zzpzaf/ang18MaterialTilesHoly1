import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  // styleUrls: ['../app.component.scss', './header.component.scss']
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    headerTitle = 'Angular18 - A Holy-Grail layout Implementation, based on Material Grid List';
}
