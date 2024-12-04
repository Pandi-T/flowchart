import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FC_NODE_COMPONENT_CONFIG, NgxFlowchartModule } from 'ngx-flowchart';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    /*providers: [
      {
        provide: FC_NODE_COMPONENT_CONFIG,
        useValue: {
          nodeComponentType: TestFcNodeComponent
        }
      }
    ],*/
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxFlowchartModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
