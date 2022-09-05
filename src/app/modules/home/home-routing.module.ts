import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'favoritos',
        loadChildren: () =>
          import('../favorites/favorites.module').then(
            (m) => m.FavoritesModule
          ),
      },
      {
        path: 'recomendados',
        loadChildren: () =>
          import('../recommended/recommended.module').then(
            (m) => m.RecommendedModule
          ),
      },
      { path: '', redirectTo: 'recomendados', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
