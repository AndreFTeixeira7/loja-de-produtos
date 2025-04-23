import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../interface/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  httpclient = inject (HttpClient);

  getAll(){
   return this.httpclient.get<Products[]>('/api/products');
  }

  
}
