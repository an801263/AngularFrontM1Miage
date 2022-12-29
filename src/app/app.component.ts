import { Component } from '@angular/core';
import { AssignmentsService } from './shared/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Application de Gestion des Devoirs";
  opened = false;

  constructor(private assignmentService: AssignmentsService) {}

  initialiserLaBaseAvecDonneesDeTest() {
    this.assignmentService.peuplerBD();
    console.log("initialiserBDD : Data added!!!");
  }
}
