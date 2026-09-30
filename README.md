# Short Story Generator
***
An interactive web application that generates short stories from customizable templates - swap individual words to reshape a sentence,
roll a brand-new story, or write your own.
I built this as a hands-on project to deepen my JavaScript and React skills, working through every file by hand rather than copy-pasting,
so I understood each piece as it came together. The result is a small app designed to be a method for individuals to occupy their time.
***
## Features
- Pick a story - choose from several built-in templates across different genres.
- Swap words inline - click any underlined word in a story to cycle through alternatives and reshape the sentence.
- Generate - roll new word choices, an entirely new story, or both at once, with lock toggles to keep the story or the words fixed while changing the other.
- Create your own - write a custom story using {placeholder} syntax, define a list of words for each placeholder, and add it to your collection to play with.
## Built with
- React - component-based UI, with state managed via hooks (useState, useMemo).
- Vite - build tooling and local dev server.
- lucide-react - icon set.
***
The app is organized into small, focused components (StoryPicker, StoryText, StoryControls, StoryBuilder),
with story data and helper functions kept in separate files for clarity.
***
## Built with a pair-programming partner
***
I developed this project alongside Claude (Anthropic's AI assistant) as 
a pair-programming partner - typing and studying every file myself to learn React,
state management, and Vite from the ground up, rather than copying finished output.
***
## Running locally
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```
***
Then open the local URL Vite prints in your terminal (usually http://localhost:5173).
***