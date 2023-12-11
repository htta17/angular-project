import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatSelectModule, 
    MatRadioModule, 
    FontAwesomeModule
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  mapMarker: awesom.IconDefinition;
  building: awesom.IconDefinition;
  mobile: awesom.IconDefinition;
  email: awesom.IconDefinition;
  birthday: awesom.IconDefinition;
  badge: awesom.IconDefinition;
  home: awesom.IconDefinition;

  constructor() {
     this.mapMarker = awesom.faMapMarker;
     this.building = awesom.faCity;
     this.email = awesom.faMailBulk;
     this.mobile = awesom.faMobile;
     this.birthday = awesom.faBirthdayCake;
     this.badge = awesom.faGraduationCap;
     this.home = awesom.faLaptopHouse;

  }

  ngOnInit(): void{
    

  }
}
