// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { AvaliacaoEditComponent} from './pages/avaliacao-edit/avaliacao-edit.component';
import { AvaliacaoListComponent} from './pages/avaliacao-list/avaliacao-list.component';
import { CursoEditComponent} from './pages/curso-edit/curso-edit.component';
import { CursoListComponent} from './pages/curso-list/curso-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'avaliacaos/:id',  loadChildren: './pages/avaliacao-edit/avaliacao-edit.module#AvaliacaoEditModule' , canActivate: [AuthGuard] },
    { path: 'avaliacaos',  loadChildren: './pages/avaliacao-list/avaliacao-list.module#AvaliacaoListModule' , canActivate: [AuthGuard] },
    { path: 'cursos/:id',  loadChildren: './pages/curso-edit/curso-edit.module#CursoEditModule' , canActivate: [AuthGuard] },
    { path: 'cursos',  loadChildren: './pages/curso-list/curso-list.module#CursoListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
