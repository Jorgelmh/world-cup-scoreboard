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
})
