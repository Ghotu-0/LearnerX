import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

  @NgModule({
    imports: [
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatToolbarModule,
      MatSidenavModule,
      MatTabsModule,
      MatRippleModule,
      MatMenuModule,
      MatTooltipModule,
      MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTabsModule,
        MatRippleModule,
        MatMenuModule,
        MatTooltipModule,
        MatCardModule
    ]
  })
  export class MaterialModule {}