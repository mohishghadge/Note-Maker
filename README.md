# Note Maker Application

This project is a simple Note Maker application that allows users to create, save, and delete notes. The notes are stored in the browser's local storage, so they persist even after refreshing the page.

## Features
- **Add Note**: Click the "Add Note" button to create a new note.
- **Save Note**: Save notes automatically when you click outside the textarea or manually by clicking the save icon.
- **Delete Note**: Delete notes with a smooth drop-down animation by clicking the trash icon.
- **Persistent Storage**: Notes are saved in the browser's local storage.
- **Animations**: Smooth animations for adding and deleting notes, and rotating the add button icon on hover.

## Demo
Include a screenshot or link to a demo of the application if available.

## File Structure
- `index.html`: The main HTML file that structures the application.
- `index.css`: The CSS file that styles the application and includes animations.
- `index.js`: The JavaScript file that contains the functionality for adding, saving, and deleting notes.

## Detailed Description

### index.html
The `index.html` file sets up the basic structure of the application, including:
- Linking to the CSS and JavaScript files.
- Adding a header with the title "Note Maker".
- Adding a button to create new notes.
- Setting up the main container where notes will be displayed.

### index.css
The `index.css` file styles the application and includes animations:
- Basic styling for the header, main container, and notes.
- Custom scrollbar styling.
- **Animations for adding notes (`fromTop`) and deleting notes (`toBottom`).**
- **Hover effect for the add button icon to rotate 360 degrees.**
- Hover effects for the tool icons.

### index.js
The `index.js` file provides the core functionality of the application:
- Functions to add, save, and delete notes.
- Event listeners for the add, save, and delete buttons.
- Logic to store notes in the local storage and retrieve them on page load.

## Animations
The application includes several animations to enhance user experience:
- **Adding Notes**: Notes smoothly slide down from the top when added, using the `fromTop` animation.
- **Deleting Notes**: Notes smoothly slide down and fade out when deleted, using the `toBottom` animation.
- **Add Button Icon**: The "+" icon inside the add button rotates 360 degrees on hover, adding a playful interaction.

### Keyframes
- **fromTop**:
  ```css
  @keyframes fromTop {
      0% {
          transform: translateY(-50px);
          opacity: 0;
      }
      100% {
          transform: translateY(0);
          opacity: 1;
      }
  }


# Usage

To use this application:

1. Clone the repository to your local machine.
2. Open `index.html` in your browser.
3. Click the "Add Note" button to create a new note.
4. Write your note in the textarea and click outside to save or use the save icon.
5. Click the trash icon to delete the note with a smooth animation.

# Installation

If you want to run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository_url>

2. Navigate to the project directory:
```bash
cd <note-maker>



