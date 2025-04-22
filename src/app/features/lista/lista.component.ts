import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  
  products : any[] = []
  
  httpClient = inject(HttpClient);

  ngOnInit(){
    this.httpClient.get<any>('/api/products').subscribe((products) => {
      this.products = products ; 
    })
  }

}
