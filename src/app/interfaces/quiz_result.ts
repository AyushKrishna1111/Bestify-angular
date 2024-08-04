export interface quizResult {
    quize_result_id: number;
    quize_id: number;
    user_id: number;
    status: boolean;
    finised: boolean;
    date_played: Date;
    score: number;
    outOff: number;
}