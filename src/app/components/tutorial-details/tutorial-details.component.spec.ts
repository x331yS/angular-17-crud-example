// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';
// import { TutorialDetailsComponent } from './tutorial-details.component';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// describe('TutorialDetailsComponent', () => {
//   let component: TutorialDetailsComponent;
//   let fixture: ComponentFixture<TutorialDetailsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       declarations: [TutorialDetailsComponent],
//       schemas: [NO_ERRORS_SCHEMA],
//       providers: [
//         { 
//           provide: ActivatedRoute, 
//           useValue: { 
//             paramMap: of({ get: (str: string) => 'mock-id' }),
//             snapshot: { 
//               paramMap: {
//                 get: (str: string) => {
//                   return 'mock-id';
//                 }
//               }
//             }
//           } 
//         }
//       ]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(TutorialDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });