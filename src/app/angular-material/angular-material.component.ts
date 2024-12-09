import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { AddressFormComponent } from "../address-form/address-form.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-angular-material',
  standalone: true,
  imports: [RouterModule, MatSlideToggleModule, NavigationComponent],
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.css'
})
export class AngularMaterialComponent {

}
