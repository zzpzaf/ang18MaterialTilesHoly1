import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rightpane',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './rightpane.component.html',
  styleUrl: './rightpane.component.scss'
})
export class RightpaneComponent {

}
