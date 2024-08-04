
export class State{
    quiz_id:number;
    user_id:number;
    answers:{quesId:number,ans:string}[];
    timer:number;
    automatic:number;

    constructor(uid:number,qid:number){
        this.answers=[];
        this.quiz_id=qid;
        this.user_id=uid;
        this.timer=-1;
        this.automatic=-1;
    }

    initializeSaveData(questionCount:number){
        for(let i=1;i<=questionCount;i++){
            this.answers.push({quesId:i,ans:""});
        }
    }
}