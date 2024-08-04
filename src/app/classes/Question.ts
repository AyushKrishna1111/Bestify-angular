export class Question{
    quesId:number;
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    correctAnswer:string;

    constructor(){
        this.quesId=0;
        this.question="";
        this.option1="";
        this.option2="";
        this.option3="";
        this.option4="";
        this.correctAnswer="";
    }

    reset(){
        this.quesId=0;
        this.question="";
        this.option1="";
        this.option2="";
        this.option3="";
        this.option4="";
        this.correctAnswer="";
    }
    
}