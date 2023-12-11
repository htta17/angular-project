import { Component , OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ 
    MatSelectModule, 
    MatRadioModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

	ngOnInit(): void {

	}

}
