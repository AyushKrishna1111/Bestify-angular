import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
// import { puzzle } from 'src/app/classes/puzzle';
import { Router } from '@angular/router';
import { PuzzlesService } from 'src/app/services/puzzles.service';
import { puzzle } from 'src/app/classes/puzzles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-puzzle-add',
  templateUrl: './puzzle-add.component.html',
  styleUrls: ['./puzzle-add.component.scss']
})
export class PuzzleAddComponent implements OnInit {
  puzzle = new puzzle();

  // used by modal
  closeResult: string | undefined;

  // used by modal
  @ViewChild('modalcontent', { read: TemplateRef })
  modalcontent!: TemplateRef<any>;

  constructor(private puzzleService: PuzzlesService, private route: Router, private modalService: NgbModal) { }
  
  ngOnInit(): void {
    
  }

  addpuzzle() {
    // console.log("Puzzle name : ", this.puzzle.puzzle_name);
    // console.log("Puzzle Question : ", this.puzzle.puzzle_question);
    // console.log("Puzzle Answer : ", this.puzzle.puzzle_answer);
    // console.log("Puzzle Exmplaination : ", this.puzzle.puzzle_explanation);

    this.puzzleService.postPuzzle(this.puzzle).subscribe((reponse) => {
      // console.log(reponse);
      // this.route.navigate(['admin']);
      this.openVerticallyCentered(this.modalcontent);
    });
  }

  openVerticallyCentered(content:any) {
    // console.log(content);
    this.modalService.open(content, { size: 'sm' });
  }

}
