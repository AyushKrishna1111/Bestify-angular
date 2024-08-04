export class puzzleresult {
    user_id: number;
    score: number;
    date_played: string;
    constructor(user_id: number, score: number, date_played: string) {
        this.user_id = user_id;
        this.score = score;
        this.date_played = date_played;
    }

}