import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: "exercise1",
        loadChildren: () => import('./exercise1/exercise1.module').then( hijo => hijo.Exercise1PageModule)
      },
      {
        path: "exercise2",
        loadChildren: () => import('./exercise2/exercise2.module').then( hijo => hijo.Exercise2PageModule)
      },
      {
        path: "exercise3",
        loadChildren: () => import('./exercise3/exercise3.module').then( hijo => hijo.Exercise3PageModule)
      },
      {
        path: "exercise4",
        loadChildren: () => import('./exercise4/exercise4.module').then( hijo => hijo.Exercise4PageModule)
      },
      {
        path: "exercise5",
        loadChildren: () => import('./exercise5/exercise5.module').then( hijo => hijo.Exercise5PageModule)
      },
      {
        path: "",
        redirectTo:"exercise1",
        pathMatch:"full"
      },
    ]
  },
  {
    path:"",
    redirectTo:"tabs/exercise1",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
