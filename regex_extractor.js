/**
 * Regex Data Extraction Utility
 * A utility for extracting common data patterns from text using regular expressions
 */

class RegexExtractor {
    constructor() {
        // Initialize regex patterns
        this.patterns = {
            // Email pattern that handles common formats
            email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
            
            // URL pattern that captures http, https, with or without www
            url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,
            
            // Phone number pattern covering formats like (123) 456-7890, 123-456-7890, 123.456.7890
            phone: /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g,
            
            // Credit card pattern covering formats with spaces or dashes
            creditCard: /\b(?:\d{4}[\s-]?){3}\d{4}\b/g,
            
            // Time pattern covering both 12-hour and 24-hour formats
            time: /\b([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?\s*(AM|PM|am|pm)?\b/g,
            
            // HTML tag pattern - improved to better capture HTML tags
            htmlTag: /<\/?[a-zA-Z][a-zA-Z0-9]*(?:\s+[a-zA-Z][a-zA-Z0-9]*(?:="[^"]*")?)*\s*\/?>/g,
            
            // HTML elements pattern - captures both the tags and content between them
            htmlElement: /<([a-zA-Z][a-zA-Z0-9]*)(?:\s+[a-zA-Z][a-zA-Z0-9]*(?:="[^"]*")?)*\s*>([^<]*)<\/\1>/g,
            
            // Hashtag pattern
            hashtag: /#[a-zA-Z0-9_]+\b/g,
            
            // Currency pattern (supports $, €, £, etc.)
            currency: /[$€£¥]([0-9]{1,3}(,[0-9]{3})*|[0-9]+)(\.[0-9]{1,2})?/g
        };
    }

    /**
     * Extract all matches of a specific pattern from input text
     * @param {string} type - The type of data to extract (email, url, etc.)
     * @param {string} text - The text to extract data from
     * @returns {Array} - Array of extracted items
     */
    extract(type, text) {
        if (!this.patterns[type]) {
            throw new Error(`Unsupported extraction type: ${type}`);
        }
        
        // Special handling for htmlElement to capture groups
        if (type === 'htmlElement') {
            const matches = [];
            let match;
            while ((match = this.patterns[type].exec(text)) !== null) {
                matches.push({
                    fullMatch: match[0],
                    tagName: match[1],
                    content: match[2]
                });
            }
            return matches;
        }
        
        return Array.from(text.matchAll(this.patterns[type]), m => m[0]);
    }

    /**
     * Validate if a single string matches a specific pattern
     * @param {string} type - The type of data to validate (email, url, etc.)
     * @param {string} text - The text to validate
     * @returns {boolean} - Whether the text matches the pattern
     */
    validate(type, text) {
        if (!this.patterns[type]) {
            throw new Error(`Unsupported validation type: ${type}`);
        }
        
        // Create a new RegExp object without the global flag for exact matching
        const pattern = new RegExp(`^${this.patterns[type].source}$`.replace(/\\g$/, ''));
        return pattern.test(text);
    }

    /**
     * Get all supported extraction types
     * @returns {Array} - Array of supported extraction types
     */
    getSupportedTypes() {
        return Object.keys(this.patterns);
    }
}

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RegexExtractor;
}