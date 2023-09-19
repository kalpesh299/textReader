# Text Reader

This repository contains a simple web application that allows users to convert text into speech. It's built using HTML, CSS, and JavaScript, and utilizes the Web Speech API for speech synthesis.

## Features

- **Convert Text to Speech:** Transform written text into spoken words.
- **Adjustable Speech Rate:** Customize the speed of speech to suit individual preferences.
- **Variety of Voices:** Choose from a diverse range of available voices.
- **Predefined Phrases:** Access a collection of common phrases, each accompanied by an associated image for easy selection.
- **Intuitive Interface:** User-friendly design with clickable buttons for effortless navigation.

## Usage

### Quick Start

1. Click on predefined phrases with icons to hear them spoken.
2. Use the dropdown to select a preferred voice.
3. Click the "Read" button to have the text in the input box spoken aloud.
4. Toggle the text input box by clicking the "Change Voice" button.
5. Close the text input box by clicking the "Close" button.

### Custom Text Input

For custom text input:

1. Click the "Change Voice Button" button to reveal the text input box.
2. Enter your desired text in the input box.
3. Click the "Read Text" button to have the text spoken aloud.

## Hosted Link

https://kalpesh299.github.io/textReader/textReader.html

## JavaScript Functionality Used

### DOM Manipulation:

- Used `document.querySelector`, `document.getElementById`, and `document.createElement` to interact with the DOM elements.
- Created and appended elements to the main element.

### Event Handling:

- Added event listeners to various elements like buttons and boxes to trigger actions on user interaction.
- Responded to click events using `addEventListener`.

### Speech Synthesis API:

- Utilized the Speech Synthesis API to convert text into speech.
- Created a SpeechSynthesisUtterance object for setting properties like rate and text.

### Looping and Iteration:

- Used a `forEach` loop to iterate over the data array and create boxes with predefined phrases.

### Array Manipulation:

- Created and manipulated arrays to store and retrieve voices available in the browser.

### Conditional Statements:

- Employed conditional statements to check if a voice matches the selected option.

### Template Literals:

- Used template literals to generate HTML markup for the boxes.

### Arrow Functions:

- Used arrow functions for concise event handler definitions.

### Asynchronous Event Handling:

- Utilized the `voiceschanged` event to ensure voices are loaded before populating the dropdown menu.

### Speech Synthesis:

- Utilized the SpeechSynthesis interface to control the text-to-speech functionality, including setting voices, text, and speaking.

These functionalities collectively enable the Text-To-Speech application to function as described in the README.md.

##SCreenSHots

- HomePage
 ![image](https://github.com/kalpesh299/textReader/assets/72344646/39c5b642-797a-4eff-a459-782309d11b72)
- Change Voice Button Window
 ![image](https://github.com/kalpesh299/textReader/assets/72344646/bdbad06a-332e-47ce-ac2f-8d2cac680d66)


