import { Scoreboard } from '../lib/Scoreboard'

describe('Scoreboard implementation', () => {
  it('Should add a new entry to the empty new scoreboard', () => {
    const scoreboard = new Scoreboard()
    expect(scoreboard.getMatches().length).toBe(0)

    const { createdAt, ...newObj } = scoreboard.addMatch('Portugal', 'Spain')
    const expectedMatch = {
      homeTeam: {
        name: 'Portugal',
        score: 0,
      },
      awayTeam: {
        name: 'Spain',
        score: 0,
      },
    }
    expect(newObj).toMatchObject(expectedMatch)

    const matches = scoreboard.getMatches()
    expect(matches.length).toBe(1)
    expect(matches[0]).toMatchObject(expectedMatch)
  })

  it('Should finish a match', () => {
    const scoreboard = new Scoreboard()
    const match = scoreboard.addMatch('Portugal', 'Spain')
    expect(match).toBeDefined()

    const removedMatch = scoreboard.finishMatch('Portugal', 'Spain')
    expect(removedMatch).toMatchObject(match)

    expect(scoreboard.getMatches().length).toBe(0)
  })

  it('Should update an existing match', () => {
    const scoreboard = new Scoreboard()
    const match = scoreboard.addMatch('Portugal', 'Spain')
    expect(match).toBeDefined()

    const newMatch = scoreboard.updateMatch({ name: 'Portugal', score: 1 }, { name: 'Spain', score: 2 })
    expect(newMatch).toBeDefined()
    expect(newMatch?.homeTeam.score).toBe(1)
    expect(newMatch?.awayTeam.score).toBe(2)

    const failedUpdate = scoreboard.updateMatch({ name: 'Portugal', score: 0 }, { name: 'Spain', score: 3 })
    /* Decreasing the goals for Portugal should trigger no change in the memory store as this is not allowed */
    expect(failedUpdate).toBeNull()
  })

  it('Should return matches ordered by scores', () => {
    const scoreboard = new Scoreboard()
    /* Mexico 0 - Canado 5 */
    scoreboard.addMatch('Mexico', 'Canada')
    scoreboard.updateMatch({ name: 'Mexico', score: 0 }, { name: 'Canada', score: 5 })
    /* Spain 10 - Brazil 2 */
    scoreboard.addMatch('Spain', 'Brazil')
    scoreboard.updateMatch({ name: 'Spain', score: 10 }, { name: 'Brazil', score: 2 })
    /* Germany 2 - France 2 */
    scoreboard.addMatch('Germany', 'France')
    scoreboard.updateMatch({ name: 'Germany', score: 2 }, { name: 'France', score: 2 })
    /* Uruguay 6 - Italy 6 */
    scoreboard.addMatch('Uruguay', 'Italy')
    scoreboard.updateMatch({ name: 'Uruguay', score: 6 }, { name: 'Italy', score: 6 })
    /* Argentina 3 - Australia 1 */
    scoreboard.addMatch('Argentina', 'Australia')
    scoreboard.updateMatch({ name: 'Argentina', score: 3 }, { name: 'Australia', score: 1 })

    const matches = scoreboard.getMatches()
    expect(matches.length).toBe(5)

    const compareMatches = matches.map(({ homeTeam, awayTeam }) => ({ homeTeam, awayTeam }))
    expect(compareMatches).toEqual([
      {
        homeTeam: {
          name: 'Uruguay',
          score: 6,
        },
        awayTeam: {
          name: 'Italy',
          score: 6,
        },
      },
      {
        homeTeam: {
          name: 'Spain',
          score: 10,
        },
        awayTeam: {
          name: 'Brazil',
          score: 2,
        },
      },
      {
        homeTeam: {
          name: 'Mexico',
          score: 0,
        },
        awayTeam: {
          name: 'Canada',
          score: 5,
        },
      },
      {
        homeTeam: {
          name: 'Argentina',
          score: 3,
        },
        awayTeam: {
          name: 'Australia',
          score: 1,
        },
      },
      {
        homeTeam: {
          name: 'Germany',
          score: 2,
        },
        awayTeam: {
          name: 'France',
          score: 2,
        },
      },
    ])
  })
})
