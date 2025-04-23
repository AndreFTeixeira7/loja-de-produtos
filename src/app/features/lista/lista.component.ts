import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../shared/services/produtos.service';
import { Products } from '../../shared/interface/produto.interface';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  
  products : Products[] = []
  
  produtosService = inject(ProdutosService);

  ngOnInit(){
    this.produtosService.getAll().subscribe((products) => {
      this.products = products ; 
    })
  }

}
