import { NgModule } from '@angular/core';

import { ServicesModule } from '../../services/services.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    imports: [
        ServicesModule,
        DirectivesModule,
        PipesModule

    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class MoleculesModule { }
