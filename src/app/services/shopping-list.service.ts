import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:3000/shopping-list';

  constructor(private http: HttpClient) {}

  getItems(userId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}?userId=${userId}`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${item.id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
