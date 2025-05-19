# Regex Data Extraction Tool

A web-based utility for extracting and validating common data patterns using regular expressions.

## Overview

This project provides a simple yet powerful tool to extract various data types from text using regular expressions. It was created as part of the ALU Regex Onboarding Hackathon assignment.

## Features

- **Extract multiple data types** from text input:
  - Email addresses
  - URLs 
  - Phone numbers
  - Credit card numbers
  - Time formats (12-hour and 24-hour)
  - HTML tags
  - Hashtags
  - Currency amounts

- **Validate** individual inputs against pattern requirements
- **User-friendly interface** with sample data loading capability
- **Educational component** displaying the regex patterns used

## Live Demo

You can view a live demo of this project at: [YOUR_GITHUB_PAGES_URL]

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/alu_regex-data-extraction-YOUR_USERNAME.git
   cd alu_regex-data-extraction-YOUR_USERNAME
   ```

2. Open `index.html` in your web browser

No additional dependencies or build steps are required.

## Regex Patterns Explained

### Email Addresses
```regex
\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b
```
- Matches standard email formats like user@example.com and firstname.lastname@company.co.uk
- Handles usernames with dots, underscores, percent signs, plus signs, and hyphens
- Supports domain names with letters, numbers, dots, and hyphens
- Requires a top-level domain with at least 2 characters

### URLs
```regex
https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
```
- Matches URLs like https://www.example.com and https://subdomain.example.org/page
- Supports HTTP and HTTPS protocols
- Handles domains with or without www prefix
- Captures paths, query parameters, and fragments

### Phone Numbers
```regex
(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}
```
- Matches formats like (123) 456-7890, 123-456-7890, and 123.456.7890
- Supports optional country codes (+1)
- Handles various separators (spaces, dots, hyphens)
- Accommodates parentheses around area codes

### Credit Card Numbers
```regex
\b(?:\d{4}[\s-]?){3}\d{4}\b
```
- Matches formats like 1234 5678 9012 3456 and 1234-5678-9012-3456
- Supports spaces or hyphens as separators
- Ensures exactly 16 digits grouped in sets of 4

### Time Formats
```regex
\b([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?\s*(AM|PM|am|pm)?\b
```
- Matches 24-hour format (14:30) and 12-hour format (2:30 PM)
- Handles optional seconds component
- Supports AM/PM indicators in both upper and lower case

## Edge Cases Handled

- **Email Addresses**: 
  - Handles subdomains and multiple TLDs (e.g., example.co.uk)
  - Supports special characters in usernames

- **URLs**:
  - Supports various URL components (protocols, subdomains, paths, query parameters)
  - Handles special characters in URLs

- **Phone Numbers**:
  - Accommodates multiple formatting styles
  - Supports international prefixes

- **Credit Card Numbers**:
  - Handles different separator styles
  - Enforces correct length and grouping

## Future Improvements

- Add support for more data types
- Implement pattern customization options
- Add export functionality for extracted data
- Improve validation with more specific error messages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


## Author
Ruranga Jabes - ALU Software Engineering Student

---

*This project was developed as part of the ALU Regex Onboarding Hackathon assignment.*