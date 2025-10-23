const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async(e) => {
  e.preventDefault();
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });
    if (res.ok) {
      status.textContent = "Thank you! Your message has been sent successfully";
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem submitting your form";
    }
  } catch (error) {
    status.textContent = "Network error. Please try again later."
  }
})