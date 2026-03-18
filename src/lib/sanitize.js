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

/**
 * Sanitizes all fields in a form data object
 * @param {Object} formData 
 * @returns {Object} clean form data
 */
export const sanitizeForm = (formData) => {
  const clean = {}
  Object.keys(formData).forEach(key => {
    clean[key] = sanitizeInput(formData[key])
  })
  return clean
}
