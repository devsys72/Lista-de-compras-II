import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';
import { AuthService } from '../../services/auth.service';
import { Item } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  userId: number | null = null;

  constructor(private shoppingListService: ShoppingListService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.userId = 1; // Simulação de um usuário logado
        this.loadItems();
      }
    });
  }

  loadItems() {
    if (this.userId) {
      this.shoppingListService.getItems(this.userId).subscribe(items => {
        this.items = items;
      });
    }
  }

  // Métodos para adicionar, editar e excluir itens
}
