import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routerDeclarer : Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'page',
    },{
        path:'page',
        // pathMatch:'full',
        outlet:'primary',
        loadChildren:'./page/page.module#PageModule'
    },{
        path: '**',
        redirectTo: '404'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routerDeclarer)],
    exports: [RouterModule]
})
export class routerModule {}