import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'schools',
    loadChildren: () =>
      import('./school/school.module').then((m) => m.SchoolModule),
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./class/class.module').then((m) => m.ClassModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
