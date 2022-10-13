import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      id: 1,
      nom: "TP1",
      dateDeRendu: new Date('2022-01-12'),
      rendu: true
    },
    {
      id:2,
      nom: "TP2",
      dateDeRendu: new Date('2022-03-06'),
      rendu: false
    },
    {
      id:3,
      nom: "TP3",
      dateDeRendu: new Date('2022-05-15'),
      rendu: false
    }
  ]

  constructor(private loggingService:LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }
  
  getAssignment(id:number):Observable<Assignment> {
    return of(this.assignments.find(a => a.id === id)!);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    this.assignments.push(assignment);
    
    this.loggingService.log(assignment.nom, "Ajouté");
    return of('Assignment ajouté');
  }

  updateAssignment(assignment: Assignment):Observable<string> {
    return of("Assignment service: assignment modifié!");
  }

  deleteAssignment(assignment: Assignment):Observable<string> {
    let pos = this.assignments.indexOf(assignment)
    this.assignments.splice(pos, 1)

    return of("Assignment service : assignment supprimé !")
  }
  
}
