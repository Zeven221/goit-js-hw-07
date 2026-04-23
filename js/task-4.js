const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const elements = new FormData(form);
  if (
    elements.get('email').trim().length === 0 ||
    elements.get('password').trim().length === 0
  ) {
    alert('All form fields must be filled in');
  }
  const values = {
    email: elements.get('email').trim(),
    password: elements.get('password').trim(),
  };
form.reset()

});
