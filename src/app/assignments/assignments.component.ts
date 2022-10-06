import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})

export class AssignmentsComponent implements OnInit {
  titre = 'Gestion des assignments';
  ajoutActive = false;
  nomDevoir:string = "";
  dateRendu:Date = new Date();
  assignementSelectionne!:Assignment;

  ngOnInit(): void {
    setTimeout(()=> {
      this.ajoutActive = true;
    }, 2000);
  }
  
  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
  }

  assignments:Assignment[] = [
    {
      nom: 'Devoir WebComponents lecteur video',
      dateDeRendu: new Date('2022-11-10'),
      rendu: true
    },
    {
      nom: 'Devoir Angular en binôme',
      dateDeRendu: new Date('2022-08-08'),
      rendu: false
    },
    {
      nom: 'Devoir App Mobile cross platform',
      dateDeRendu: new Date('2022-10-10'),
      rendu: false
    },
  ];
  constructor() {}

  getColor(a: any) {
     return a.rendu ? 'green' : 'red';
  }

  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
  
}
