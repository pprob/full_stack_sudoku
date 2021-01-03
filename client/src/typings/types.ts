export interface BoardState {
  cellValues: any,
  solvedCellValues: any,
  difficulty: number,
  inPlay: boolean,
  gameOver: boolean,
  usedSolver: boolean,
  gameDifficulty: number
}

export interface State {
  boardState: object
  infoState: object
  playerScoresState: object
  signUpState: object
}

export type Row = [number, number, number, number, number, number, number, number, number]

export type Board = [Row, Row, Row, Row, Row, Row, Row, Row, Row]