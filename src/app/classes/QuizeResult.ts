export class QuizeResult {
    // quize_result_id:number;
    quiz_id: number;
    user_id: number;
    status: number;
    date_played: Date;
    score: number;
    out_off: number;

    constructor(uid: number, qid: number,) {
        // this.quize_result_id=-1;
        this.quiz_id = qid;
        this.user_id = uid;
        this.status = 0;
        this.date_played = {} as Date;
        this.score = -1;
        this.out_off = -1;
    }

}