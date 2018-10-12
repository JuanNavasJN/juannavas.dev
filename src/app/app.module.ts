import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ExamplesModule } from './examples/examples.module';
import { HttpModule } from '@angular/http';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactmeService } from './examples/contactme/contactme.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        ExamplesModule,
        HttpModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [ContactmeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
