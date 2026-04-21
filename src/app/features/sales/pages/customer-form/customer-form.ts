import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesService } from '../../sales.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.html',
  styleUrls: ['./customer-form.scss'],
  standalone: false
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private salesService: SalesService
  ) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      this.salesService.saveCustomer(this.customerForm.value).subscribe({
        next: (res) => {
          console.log('Cliente salvo!', res);
          // Aqui você pode redirecionar para a lista ou mostrar um toast de sucesso
        },
        error: (err) => console.error('Erro ao salvar cliente', err)
      });
    }
  }
}