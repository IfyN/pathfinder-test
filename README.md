# 🧭 Pathfinder Career Quiz

A responsive, dynamic questionnaire that helps users discover career paths aligned to their motivations and personality.

When a first-time visitor arrives, they answer 24 statements on a 5-point Likert scale, one at a time, with live progress feedback.  
Upon completion (or on returning), they see a “See your results” card confirming submission.

---

## 🚀 Table of Contents

1. [Features](#features)
2. [Tech Stack & Why](#tech-stack--why)
3. [Getting Started](#getting-started)
4. [Challenges](#challenges)
5. [Future Improvements](#future-improvements)
6. [License](#license)

---

## ✨ Features

- **Dynamic Questions** fetched in real-time from a remote API
- **One-at-a-time Quiz Flow**: click a dot to record your answer and advance
- **Progress Indicator**: percentage + pill-shaped bar keeps you motivated
- **Persistent Results**: returning users skip directly to the “See your results” card
- **In-place Completion Card**: immediate feedback, “See your results” button

---

## 🛠 Tech Stack & Why

| Technology                        | Purpose & Rationale                                                     |
| --------------------------------- | ----------------------------------------------------------------------- |
| **React**                         | Component-based UI, declarative rendering, hook-powered state logic.    |
| **styled-components**             | Scoped, theme-friendly CSS-in-JS keeps styles co-located with markup.   |
| **Fetch API**                     | Native browser HTTP client for RESTful calls—no extra dependencies.     |
| **React Router**                  | (Optional) Clean route definitions for future multi-page support.       |
| **Component-Driven Architecture** | Reusable React components that improve maintainability and consistency. |
| **Node.js & npm**                 | Standard JavaScript tooling and package management.                     |

> **Why these?**  
> React and styled-components enable rapid, maintainable UI development without global CSS conflicts.  
> Fetch gives us control over request pipelines and error handling.  
> React Router readies the app for future expansion (e.g. a dedicated results page).

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** (>=14) & **npm**
- A terminal / command prompt

### Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/pathfinder-test.git
   cd pathfinder-test

   ```

2. **Install dependencies**

   ```npm install

   ```

3. **Start the development server**

   ```npm run dev

   ```

### Configuration

- The app expects a REST API at `https://fhc-api.onrender.com`.

---

## 🚧 Challenges

1. **Prop‐mismatch errors**  
   Early on, passing props with slightly different names between the quiz container and presentational components led to runtime crashes that were tricky to trace.

2. **Styled‐components alignment**  
   Achieving pixel‐perfect gutters and overlay text alignment required balancing padding vs. margin and absolute positioning in a responsive context.

3. **Dynamic data loading**  
   Building the entire quiz flow in “static” mode first, then swapping in real API calls, helped isolate bugs but added complexity in scaffolding.

---

## 🌱 Future Improvements

- **Automated Testing**: Add unit and integration tests (Jest, React Testing Library) to safeguard component logic.
- **Internationalization & Accessibility**: Support multiple languages and ensure WCAG‐compliant interactions.
