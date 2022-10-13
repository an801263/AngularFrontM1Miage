import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})

export class AssignmentDetailComponent implements OnInit {
 assignmentTransmis: Assignment | null;
 
  
  constructor(private assignmentsService: AssignmentsService) {

  }
   
  ngOnInit(): void {
  
  }

  onAssignmentRendu() 
  {
    this.assignmentTransmis!.rendu = true;
    this.assignmentsService.updateAssignment(this.assignmentTransmis!).subscribe(message => console.log(message));
  }

  onDelete()
  {
    this.assignmentsService.deleteAssignment(this.assignmentTransmis!).subscribe(message => console.log(message));
  
    this.assignmentTransmis = null;
  }
}
