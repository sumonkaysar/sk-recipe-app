# SK Recipe App

A recipe web application featuring a collection of recipes categorized by country. Users can explore various recipes, learn about different culinary traditions, and get in touch with the team behind the app.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Browse recipes by country categories
- View detailed recipe instructions and ingredients
- User authentication and profile management
- Dashboard with user-specific content
- Contact form to reach out to the team
- Responsive design

## Tech Stack

- **Frontend**: React.js(Vite), Tailwind CSS, DaisyUI, React Toastify, Moment.js
- **Authentication**: Firebase, React Firebase Hooks
- **Routing**: React Router 
- **Icons**: React Icons
- **Fetching**: AXIOS
- **Backend**: JSON-Server

## Installation

1. **Clone the repository**:
    ```bash
    https://github.com/sumonkaysar/sk-recipe-app
    cd sk-recipe-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    npx json-server db.json
    ```

The app should now be running on `http://localhost:5173`.

## Usage

- **Home Page**: Browse the latest and categories based recipes.
- **All Recipes Page**: Browse all therecipes.
- **About Page**: Learn more about the mission and team behind the app.
- **Contact Page**: Get in touch with the team through the contact form.
- **Dashboard**: User-specific content and settings. Access various sections like manage all recipes, add recipes.
