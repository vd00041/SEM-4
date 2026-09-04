# SEM-4 — Full Stack Development & Python (Semester 4)

> A comprehensive collection of all Semester 4 coursework covering Python data science, Node.js/Express.js backend development, cookie management, and React.js frontend development.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React.js-JSX-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express.js-5.x-black?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Python](https://img.shields.io/badge/Python-Data%20Science-blue?style=for-the-badge&logo=python)](https://www.python.org/)

---

## Overview

This repository contains all practical exercises, assignments, and projects completed during Semester 4. It is organized into three topic units:

- **T1** — Python Data Science (Pandas, machine learning, real datasets)
- **T2** — Node.js, Express.js, and Cookie Management
- **T3** — React.js Frontend Development

The repository also uses a dedicated `FSD` branch for full-stack development work, managed with pull requests.

---

## Repository Structure

```
SEM-4/
├── T1/                             # Python Data Science
│   ├── pandas.ipynb                # Pandas operations and DataFrame manipulation
│   ├── PBCH1.ipynb                 # Python Basics Chapter 1
│   ├── Unit2.ipynb                 # Unit 2 exercises
│   ├── Unit3.ipynb                 # Unit 3 exercises
│   ├── TASK (1).ipynb              # Assignment notebook
│   └── *.csv                       # Datasets: auto-mpg, IPL matches, loan data,
│                                   # IMDB Top 1000, supermarket sales, etc.
│
├── T2/                             # Node.js, Express.js, Machine Learning
│   ├── Machin learning.ipynb       # Machine learning models and exercises
│   ├── Unit5.ipynb                 # Unit 5 Python exercises
│   ├── *.csv                       # Datasets: insurance, diabetes, cancer, car prices,
│   │                               # churn, advertising, real estate, wind power...
│   ├── CH-4/                       # Node.js and Express.js basics
│   │   ├── 1.js ... Que7.js        # Express server examples and question solutions
│   │   ├── 1.html                  # HTML templates
│   │   └── package.json            # express ^5.2.1 dependency
│   └── CH-5/
│       ├── Cookie/                 # Cookie management with Express
│       │   ├── cookie.js           # Cookie set/get/delete operations
│       │   ├── 1.js, 2.js, 3.js   # Cookie exercises
│       │   └── index.html          # Cookie demo page
│       └── Express/                # Full Express.js backend + HTML frontend
│           ├── BackEnd/            # Express server files
│           ├── frontEnd/           # Frontend HTML/JS files
│           ├── 4.js ... 7.js       # Route handlers and middleware exercises
│           └── package.json        # express ^5.2.1 dependency
│
└── T3/                             # React.js Frontend Development
    ├── App.jsx                     # Main React application with state (useState)
    ├── main.jsx                    # React app entry point
    ├── Myapp.jsx, MyProfile.jsx    # Custom components
    ├── ProductCard.jsx             # Product display component
    ├── ProductList.jsx             # Product list with map rendering
    ├── StudentCard.jsx             # Student card component
    ├── StudentList.jsx             # Student list component
    ├── Filter.jsx                  # Filtering component
    ├── Map.jsx                     # Map rendering using array.map()
    ├── List.jsx, ReactProps.jsx    # Props demonstration components
    ├── Prop1.jsx, Prop2.jsx        # Props and component communication
    ├── Event.jsx, Example.jsx      # Event handling components
    ├── index.css, Myapp.css, MyProfile.css
    └── CH7/
        ├── 7.ipynb                 # Jupyter notebook for Chapter 7
        ├── Unit7.ipynb             # Unit 7 Python exercises
        └── newflipkart.html        # HTML scraping target (web scraping practice)
```

---

## T1 — Python Data Science

Covers Python fundamentals and Pandas-based data analysis using real-world datasets.

**Topics:**
- Pandas DataFrames: reading CSVs, filtering, groupby, aggregation, merging
- Data analysis on real datasets (IPL matches, IMDB Top 1000, loan data, auto MPG, supermarket sales)
- Python basics and exercises

**Datasets used:**
- `auto-mpg.csv`, `car data.csv`, `ipl-matches.csv`, `imdb-top-1000.csv`
- `loan.csv`, `supermarket_sales.csv`, `social_media_engagement.csv`, `production_analysis_dataset.csv`

---

## T2 — Node.js, Express.js, Cookies & Machine Learning

### Express.js (CH-4)
- Creating Express servers and defining routes
- `res.send()`, `res.set()`, HTTP method handling
- Serving HTML responses from Express

### Cookie Management (CH-5/Cookie)
- Setting, reading, and deleting cookies with Express
- Cookie-based state management

### Full Express Application (CH-5/Express)
- Separated BackEnd (Express) and frontEnd (HTML/CSS/JS) structure
- Route handling, middleware usage
- Full request-response cycle

### Machine Learning (Python notebooks)
- `Machin learning.ipynb` — ML model exercises
- `Unit5.ipynb` — Python Chapter 5 exercises
- Datasets: `insurance.csv`, `diabetes_unclean.csv`, `cancer.csv`, `Churn.csv`, `Advertising.csv`, `windpower.csv`, `Real estate.csv`

---

## T3 — React.js Frontend Development

React.js components built with JSX, covering core concepts:

| Component | Concept Demonstrated |
|-----------|---------------------|
| `App.jsx` | `useState`, counter, Vite setup |
| `Myapp.jsx`, `MyProfile.jsx` | Custom components, styling |
| `ProductCard.jsx`, `ProductList.jsx` | Props, component composition |
| `StudentCard.jsx`, `StudentList.jsx` | Reusable list components |
| `Filter.jsx` | Conditional rendering and filtering |
| `Map.jsx` | `Array.map()` for list rendering |
| `Prop1.jsx`, `Prop2.jsx` | Props and component communication |
| `Event.jsx` | Event handling in React |
| `ReactProps.jsx` | Props demonstration |

---

## Git Workflow

This repository uses a branching strategy:
- `main` — stable, merged code
- `FSD` — full-stack development work branch
- Pull Requests used to merge `FSD` → `main`

---

## Running the Node.js/Express Examples

```bash
# Navigate to CH-4 or CH-5/Express
cd T2/CH-4
npm install
node 1.js      # or any specific file

# Cookie examples
cd T2/CH-5/Cookie
npm install
node cookie.js
```

## Running Python Notebooks

```bash
pip install pandas numpy matplotlib scikit-learn jupyter
jupyter notebook
# Open any .ipynb file
```

---

## Author

**Ved Patel** — B.Tech Computer Engineering Student  
[GitHub](https://github.com/VedPatel41) · [LinkedIn](https://www.linkedin.com/in/ved-patel-0bb446376)
