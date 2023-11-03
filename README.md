# Encoder 

The **Encoder React project** is a simple web application that allows users to encode typed text by shifting each character in the input text by +3 ASCII values. Additionally, the application provides word and character count statistics and lists all the typed words.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
## Features

1. **Text Encoding:** Users can type or paste text into the input field, and the application will encode it by shifting each character's ASCII value by +3 positions. This encryption is based on the Caesar cipher with a fixed shift value of 3.

2. **Word and Character Count:** The application displays the number of words and characters in the original TextArea.

3. **Word List:** The application lists all the words present in the original input text.

## Getting Started

To get started with the Encoder React project, follow these steps:

1. **Clone the Repository:** Start by cloning the project repository to your local machine using the following command:
   ```shell
   git clone https://github.com/kaydurgu/mid.git
    ```
2. **Install Dependencies:** Navigate to the project directory and install the necessary dependencies using npm or yarn:
    ```shell
    cd mid
    npm install
    ```
3. **Run the Application:** Once the dependencies are installed, you can start the development server by running:

    ```shell
    npm start
    ```
This will launch the application in your default web browser.

## Usage

**Real-time Text Encoding:**

  - Type or paste the text you want to encode into the input field.
  - As you type or paste text, the application will encode it in real-time without the need to click a separate button.
  - The encoded text will be displayed in the output field in real-time as you input or paste new text.

2. **Word and Character Count:**

   - The application will display the number of words and characters in the original TextArea Component below the TextArea Component.

3. **Word List:**

   - All the words in the original input text will be listed in a separate section below the word and character count.
     
## Screenshots

Encoder         

![Encoder Screenshot](https://github.com/kaydurgu/mid/blob/main/screens/all2.PNG) 


Decoder

![Decoder Screenshot](https://github.com/kaydurgu/mid/blob/main/screens/all4.PNG) 

## Contributing

If you would like to contribute to the Encoder React project, please follow these guidelines:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bug fix.
3. **Make your changes** and test them thoroughly.
4. **Submit a pull request** with a clear description of your changes.
