import DOMPurify from 'dompurify'

/**
 * Sanitizes input string to prevent XSS attacks
 * @param {string} dirtyInput 
 * @returns {string} clean HTML/text
 */
export const sanitizeInput = (dirtyInput) => {
  if (!dirtyInput) return ''
  return DOMPurify.sanitize(dirtyInput, {
    ALLOWED_TAGS: [], // Strip all HTML tags, we just want text
    ALLOWED_ATTR: []
  })
}
