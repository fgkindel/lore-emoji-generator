# Lore-to-Emoji Generator

This is a simple web application that allows users to enter a short lore sentence and generate an emoji based on the text. It's a static site designed for easy deployment, for example, on Netlify. This project is part of the AI Soul Project.

## Features

- Input field for lore text.
- "Forge Emoji" button to trigger emoji generation.
- Display area for the resulting emoji.
- Simple keyword-based emoji logic (e.g., "fire" -> 🔥).
- Dark mode theme for comfortable viewing.
- Includes a link to join the AI Soul Project email list.

## Folder Structure

- `index.html`: The main HTML file with the form input and result display.
- `styles.css`: Contains the CSS for dark mode and layout.
- `script.js`: Handles user input and the emoji generation logic.
- `emojis/emojiMap.json`: An optional JSON file for mapping keywords to emojis (currently, the logic in `script.js` uses a hardcoded map for simplicity, but this file is provided for future expansion).
- `README.md`: This file, explaining the project.
- `netlify.toml`: Basic configuration for Netlify deployment.

## How to Run Locally

1.  Clone this repository (if you haven't already).
2.  Navigate to the project directory in your file explorer.
3.  Open the `index.html` file in your web browser (e.g., Chrome, Firefox, Safari).

That's it! You should be able to interact with the application locally.

## How to Deploy to Netlify

Netlify makes deploying static sites very easy.

1.  **Push to a Git Repository:**
    *   Ensure your project is pushed to a GitHub, GitLab, or Bitbucket repository.

2.  **Sign up or Log in to Netlify:**
    *   Go to [netlify.com](https://www.netlify.com/) and sign up or log in.

3.  **Create a New Site:**
    *   Click on "Add new site" -> "Import an existing project".
    *   Connect to your Git provider (GitHub, GitLab, Bitbucket).
    *   Select the repository for this project.

4.  **Deployment Settings:**
    *   **Branch to deploy:** Usually `main` or `master`.
    *   **Build command:** Leave this blank, as there's no build step for this simple static site.
    *   **Publish directory:** Set this to `/` (or leave as default if it points to the root of your repository, which is where `index.html` is). The `netlify.toml` file also specifies this.
    *   Click "Deploy site".

Netlify will then build and deploy your site. You'll get a unique URL for your live application.

## Callout

Near the footer, there's a callout:
<p>Want updates? <a href="https://form.jotform.com/jsform/222925585171157" target="_blank">Join our email list</a></p>
