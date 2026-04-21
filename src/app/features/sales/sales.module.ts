import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <-- 1. IMPORTANTE PARA O FORM

import { SalesRoutingModule } from './sales-routing.module';
import { CustomerListComponent } from './pages/customer-list/customer-list';
import { CustomerFormComponent } from './pages/customer-form/customer-form';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule // <-- 2. PRECISA ESTAR AQUI NOS IMPORTS
  ]
})
export class SalesModule { }