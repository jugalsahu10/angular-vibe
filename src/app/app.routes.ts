import { Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';

export const routes: Routes = [
    { path: 'material', component: AngularMaterialComponent },
    { path: 'navigation', component: NavigationComponent },
    { path: 'address-form', component: AddressFormComponent },
    { path: 'table', component: TableComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tree', component: TreeComponent },
    { path: '', redirectTo: '/material', pathMatch: 'full' },
];