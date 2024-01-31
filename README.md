### Description:

This HTML file presents a simple webpage layout displaying quotes from the TV series "Lucifer." Each quote is associated with a card, and upon clicking the "See" button on each card, a random quote from the provided API is displayed dynamically.

### File Structure:

*   **index.html**: This is the main HTML file that structures the webpage layout.
*   **css/style.css**: This file contains custom CSS styles for the webpage.
*   **Js/script.js**: This JavaScript file handles dynamic data fetching and quote display functionality.

### External Dependencies:

*   **Bootstrap CSS**: Imported from a CDN (Content Delivery Network), providing styling and layout components for the webpage.
*   **Bootstrap JS**: Also imported from a CDN, it adds interactivity and functionality to Bootstrap components.

### API Integration:

*   The webpage dynamically fetches quotes from an external API provided by "[https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/quotes](https://65ba3920b4d53c06655256ac.mockapi.io/api/v1/quotes)".
*   Upon page load, a random quote is fetched from the API and displayed on the corresponding card upon clicking the "See" button.

### JavaScript Functionality:

*   The `quotedata` function asynchronously fetches a random quote from the API URL provided.
*   Upon the DOMContentLoaded event, the JavaScript code fetches a random quote and populates the corresponding card's title with the fetched quote and author information.
*   Each card's "See" button is associated with an event listener that updates the quote dynamically upon click.

### Usage:

*   Clone or download the repository containing the HTML, CSS, and JavaScript files.
*   Ensure an active internet connection to fetch quotes from the external API.
*   Open the `index.html` file in a web browser to view the webpage.
*   Click the "See" button on each card to view a random quote from the TV series "Lucifer."

### Notes:

*   Ensure an active internet connection to fetch quotes from the external API.
*   The layout and styling can be customized further by modifying the CSS file (`css/style.css`).
*   Additional features or enhancements can be implemented by extending the JavaScript functionality.

### Author:

This project is authored by \[Balasivam\]. Feel free to reach out for any inquiries or contributions.

### License:

This project is licensed under \[Balasivam\]. See the LICENSE file for details.
