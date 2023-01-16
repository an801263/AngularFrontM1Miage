import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
  providers: [FilterPipe]
})

export class AssignmentsComponent implements OnInit {
  titre = 'Gestion des assignments';
  ajoutActive = false;
  nomDevoir:string = "Ici mettre le nom du devoir";
  dateRendu:Date = new Date();
  assignementSelectionne!:Assignment;
  formVisible = false;
  assignments: Assignment[];  
  searchTerm: string;


  constructor (private assignmentService:AssignmentsService) {}
  
  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  getColor(a: any) {
     return a.rendu ? 'green' : 'red';
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }

  onAddAssignmentBtn() {
    //this.formVisible = true;
  }

  /*onNouvelAssignment(event:Assignment) {
   //this.assignments.push(event);
    this.assignmentService.addAssignment(event).subscribe();
    this.formVisible = false;
  }*/
  
}
