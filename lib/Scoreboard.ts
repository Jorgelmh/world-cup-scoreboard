import { Match, TeamProps } from './types/Match'

export class Scoreboard {
  private matches: Match[] = []

  /**
   * Creates a new match with the specified home and away teams, initializes their scores to 0,
   * and assigns a unique timestamp based on the number of existing matches.
   * @param homeTeam - The name of the home team.
   * @param awayTeam - The name of the away team.
   * @returns The newly created match object.
   */
  public addMatch(homeTeam: string, awayTeam: string) : Match {
    /* create new match data structure */
    const newMatch : Match = {
      homeTeam: {
        name: homeTeam,
        score: 0,
      },
      awayTeam: {
        name: awayTeam,
        score: 0,
      },
      /* Add length as otherwise Date.now() will be the same when running the tests */
      createdAt: Date.now() + this.matches.length,
    }
    this.matches.push(newMatch)
    return newMatch
  }

  public finishMatch(homeTeam: string, awayTeam: string) : Match | null {
    return null
  }

  public updateMatch(homeTeam: TeamProps, awayTeam: TeamProps) : Match | null {
    return null
  }

  public getMatches() : Match[] {
    return this.matches
  }
}
