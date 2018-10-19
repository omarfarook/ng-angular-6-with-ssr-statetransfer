import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './directives/directives.module';
import { MoleculesModule } from './molecules/molecules.module';
import { OrganismsModule } from './organisms/organisms.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MoleculesModule,
    OrganismsModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: []
})
export class SharedModule { }
