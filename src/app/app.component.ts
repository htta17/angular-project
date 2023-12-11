import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule for animations
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    MatButtonModule, 
    MatInputModule, 
    AboutComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',   
})
export class AppComponent {
  title = 'angular-project';
}
