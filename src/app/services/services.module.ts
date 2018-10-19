import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CommonUtilityService } from './common-utility-service'

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        CommonUtilityService
    ],
})
export class ServicesModule { }
