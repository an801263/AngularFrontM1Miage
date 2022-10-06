import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom: "TP1",
      dateDeRendu: new Date('2022-01-12'),
      rendu: true
    },
    {
      nom: "TP2",
      dateDeRendu: new Date('2022-03-06'),
      rendu: false
    },
    {
      nom: "TP3",
      dateDeRendu: new Date('2022-05-15'),
      rendu: false
    }
  ]

  constructor() { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    return of('Assignment ajouté');
  }

  updateAssignment(assignment: Assignment):Observable<string> {
    return of("Assignment service: assignment modifié!");
  }

}
