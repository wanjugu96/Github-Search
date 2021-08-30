import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { FormsModule } from '@angular/forms';
import { UppercaseCountPipe } from './uppercase-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    UppercaseCountPipe
  ],
  imports: [
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
