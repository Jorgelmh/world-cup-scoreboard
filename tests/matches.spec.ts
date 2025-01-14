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
})
