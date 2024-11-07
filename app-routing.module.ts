import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shopping-list', component: ItemListComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent } // Rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
