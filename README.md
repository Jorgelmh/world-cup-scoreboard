# Sportsradar coding exercise.
The aim of this repo is to create simple library for a Live World Cup Score Board.

## Tech stack
The project was implemented using the following technologies:

- TypeScript: Used for its strong type-checking and enhanced code maintainability.
- Jest: Employed for unit testing when doing Test-driven development.
- ESLint: Configured to enforce consistent coding standards and maintain clean, error-free code. Used my favorite setup that relies on Airbnb's set of rules for TypeScript.

## Project Overview
The library implementation can be found at lib/Scoreboard.ts, I used OOP as I think TypeScript offers good support, and since I had to combine data in the form of an in-memory data store and some functionality then a class seemed like the right option. The Scoreboard implementation offers these features:

- An in-memory data store that hold the current matches with their scores.
- Possibility to add new matches (they'll start 0 - 0).
- Functionality to finish a match and remove it from the data store (if it exists)
- Update match score as long as they have valid values for the new states.
- Get a summary of active matches ordered according to the requirements of the coding task. This data is offered in a data structure that contains all needed data for subsequent display.

More details on the requirements of the library can be found in the [documentation](docs/CodingExercise.pdf)

## Additional code
Added a simple file to hold TypeScript interfaces and types that are used by the Scoreboard class.

## Setup and Running Instructions

### Prerequisites
Ensure you have the following installed on your system:

- Node.js (v14 or higher)
- npm

### Steps to Run the Project

1. Clone the repository:

```console
git clone world-cup-scoreboard
cd world-cup-scoreboard
```

2. Install dependencies:

```console
npm install
```

### Run tests
```console
npm test
```

