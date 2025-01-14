export interface TeamProps {
  name: string,
  score: number,
}

export interface Match {
  homeTeam: TeamProps,
  awayTeam: TeamProps,
  createdAt: number,
}
