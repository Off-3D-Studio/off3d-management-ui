import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../sales.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.scss',
  standalone: false
})
export class CustomerListComponent implements OnInit {
  customers: any[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.salesService.listCustomers().subscribe({
      next: (data: any) => this.customers = data,
      error: (err: any) => console.error('Erro ao carregar clientes', err)
    });
  }
}