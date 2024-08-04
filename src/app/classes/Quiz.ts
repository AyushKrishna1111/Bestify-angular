import { Question } from "./Question"

export class Quiz{
    questions:Question[];
    quiz_name:string;
    quiz_cat_id:any;
    quiz_time:number;
    hr:number;
    min:number;
    sec:number;
    description:string;

    constructor(){
        this.hr=0;
        this.min=0;
        this.sec=0;
        this.questions=[];
        this.quiz_name='';
        this.quiz_cat_id="";
        this.quiz_time=0;
        this.description="";
    }

    reset(){
        this.hr=0;
        this.min=0;
        this.sec=0;
        this.questions=[];
        this.quiz_name='';
        this.quiz_cat_id="";
        this.quiz_time=0;
        this.description="";
    }
}