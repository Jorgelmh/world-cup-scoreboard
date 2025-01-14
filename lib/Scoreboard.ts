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

  /**
   * Completes a match by removing it from the list of active matches
   * and returning the match details.
   * @param homeTeam - The name of the home team.
   * @param awayTeam - The name of the away team.
   * @returns The finished match object, or null if no match is found.
   */
  public finishMatch(homeTeam: string, awayTeam: string) : Match | null {
    const index = this.matches.findIndex((val) => val.homeTeam.name === homeTeam && val.awayTeam.name === awayTeam)
    if (index < 0) {
      return null
    }

    /* Alter matches in memory and return the one matched */
    const match = this.matches.splice(index, 1)
    return match.pop()
  }

  public updateMatch(homeTeam: TeamProps, awayTeam: TeamProps) : Match | null {
    return null
  }

  public getMatches() : Match[] {
    return this.matches
  }
}
