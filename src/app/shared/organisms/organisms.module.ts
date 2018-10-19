import { NgModule } from '@angular/core';

import { ServicesModule } from '../../services/services.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { HeaderOrganismComponent } from './header-organism/header-organism.component';
import { FooterOrganismComponent } from './footer-organism/footer-organism.component';
import { HomeOrganismComponent } from './home-organism/home-organism.component';
import { NotFoundOrganismComponent } from './not-found-organism/not-found-organism.component';

@NgModule({
    imports: [
        ServicesModule,
        MoleculesModule,
        DirectivesModule,
        PipesModule

    ],
    exports: [
        HeaderOrganismComponent,
        FooterOrganismComponent,
        HomeOrganismComponent,
        NotFoundOrganismComponent
    ],
    declarations: [
        HeaderOrganismComponent,
        FooterOrganismComponent,
        HomeOrganismComponent,
        NotFoundOrganismComponent
    ],
    providers: [],
})
export class OrganismsModule { }
