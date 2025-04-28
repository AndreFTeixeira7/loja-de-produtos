import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../shared/services/produtos.service';
import { Product} from '../../shared/interface/produto.interface';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-lista',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  
  products : Product[] = []
  
  ProdutosService = inject(ProdutosService);

  ngOnInit(){
    this.ProdutosService.getAll().subscribe((products) => {
      this.products = products ; 
    })
  }

}
