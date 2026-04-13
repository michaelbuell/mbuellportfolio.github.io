/* ===================================================
   contact-form.js
   - Client-side validation with live feedback
   - Submits to Formspree (see SETUP_INSTRUCTIONS.md)
   - Shows success / error status messages
=================================================== */
 
// ============================================================
// ⚠️  REPLACE THIS with your own Formspree endpoint URL
//     See SETUP_INSTRUCTIONS.md for how to get it.
// ============================================================
const FORMSPREE_URL = 'https://formspree.io/f/xzdypqyk';
 
const form       = document.getElementById('contact-form');
const submitBtn  = document.getElementById('submit-btn');
const statusBox  = document.getElementById('form-status');
 
// ===== Validation Rules =====
const validators = {
  name: {
    element: document.getElementById('name'),
    error:   document.getElementById('name-error'),
    validate(val) {
      if (!val.trim())           return 'Name is required.';
      if (val.trim().length < 2) return 'Name must be at least 2 characters.';
      return null;
    }
  },
  email: {
    element: document.getElementById('email'),
    error:   document.getElementById('email-error'),
    validate(val) {
      if (!val.trim()) return 'Email is required.';
      // Simple RFC-style check
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address.';
      return null;
    }
  },
  message: {
    element: document.getElementById('message'),
    error:   document.getElementById('message-error'),
    validate(val) {
      if (!val.trim())            return 'Message is required.';
      if (val.trim().length < 10) return 'Message must be at least 10 characters.';
      return null;
    }
  }
};
 
// ===== Show / clear a single field's error =====
function showFieldError(field, message) {
  const { element, error } = validators[field];
  element.classList.add('invalid');
  element.classList.remove('valid');
  error.textContent = message;
  error.classList.add('visible');
}
 
function clearFieldError(field) {
  const { element, error } = validators[field];
  element.classList.remove('invalid');
  element.classList.add('valid');
  error.classList.remove('visible');
}
 
// ===== Live validation on blur =====
Object.keys(validators).forEach(field => {
  const { element } = validators[field];
 
  // Validate when user leaves the field
  element.addEventListener('blur', () => {
    const msg = validators[field].validate(element.value);
    if (msg) showFieldError(field, msg);
    else      clearFieldError(field);
  });
 
  // Clear error as user types (after it was shown)
  element.addEventListener('input', () => {
    if (element.classList.contains('invalid')) {
      const msg = validators[field].validate(element.value);
      if (!msg) clearFieldError(field);
    }
  });
});
 
// ===== Full form validation =====
function validateAll() {
  let valid = true;
  Object.keys(validators).forEach(field => {
    const { element } = validators[field];
    const msg = validators[field].validate(element.value);
    if (msg) { showFieldError(field, msg); valid = false; }
    else       clearFieldError(field);
  });
  return valid;
}
 
// ===== Form submission =====
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusBox.className = 'form-status'; // reset status
 
  if (!validateAll()) return;
 
  // Disable button and show loading state
  submitBtn.disabled     = true;
  submitBtn.textContent  = 'Sending…';
 
  try {
    const response = await fetch(FORMSPREE_URL, {
      method:  'POST',
      headers: { 'Accept': 'application/json' },
      body:    new FormData(form)
    });
 
    if (response.ok) {
      form.reset();
      // Clear all valid states
      Object.keys(validators).forEach(field => {
        validators[field].element.classList.remove('valid', 'invalid');
      });
      statusBox.textContent  = '✅ Message sent! I\'ll get back to you soon.';
      statusBox.className    = 'form-status success';
    } else {
      const data = await response.json();
      const msg  = data?.errors?.map(err => err.message).join(', ') || 'Something went wrong.';
      throw new Error(msg);
    }
  } catch (err) {
    statusBox.textContent = `❌ Error: ${err.message}. Please try again or email me directly.`;
    statusBox.className   = 'form-status error';
  } finally {
    submitBtn.disabled    = false;
    submitBtn.textContent = 'Send Message';
  }
});