import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { CoursesSingleComponent } from './courses-single/courses-single.component';
import { CoursesInfoComponent } from './courses-info/courses-info.component';
import { GradesComponent } from './grades/grades.component';
import { AssignmentatComponent } from './assignmentat/assignmentat.component';
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'notifications', component:  NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'attendance-sheet', component: AttendanceSheetComponent  },
  { path: 'courses-single', component:   CoursesSingleComponent},
  { path: 'courses-info', component:  CoursesInfoComponent },
  { path: 'grades', component:  GradesComponent },
  { path: 'assignmentat', component: AssignmentatComponent   },
  { path: 'login', component:  LoginComponent  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BackgroundComponent,
    HomeComponent,
    CoursesComponent,
    ProfileComponent,
    AttendanceComponent,
    NotificationsComponent,
    AttendanceSheetComponent,
    CoursesSingleComponent,
    CoursesInfoComponent,
    GradesComponent,
    AssignmentatComponent,
    LoginComponent,
 
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CoursesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'notifications', component:  NotificationsComponent },
      { path: 'attendance-sheet', component: AttendanceSheetComponent  },
      { path: 'courses-single', component:   CoursesSingleComponent},
      { path: 'courses-info', component:  CoursesInfoComponent },
      { path: 'grades', component:  GradesComponent },
      { path: 'assignmentat', component: AssignmentatComponent   },
      { path: 'login', component:  LoginComponent  },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
