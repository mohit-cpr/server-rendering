import { Routes } from '@angular/router';

import { UserlistComponent } from './userlist/userlist.component';
import { UserDetailsComponent } from './user-details/user-details.component';


export const AppRoutes: Routes = [
  {
      path: '',
      component: UserlistComponent
  },
  {
      path: 'user_list',
      component: UserlistComponent
  },
  {
      path: 'user_details/:userId',
      component: UserDetailsComponent
  },
]
