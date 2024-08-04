export class Score {
  user_id: number;
  game_id: number;
  score: number;
  date_played: string;
  constructor(user_id: number, game_id: number, score: number, date_played: string) {
    this.user_id = user_id;
    this.game_id = game_id;
    this.score = score;
    this.date_played = date_played;
  }
}
