document.getElementById('registrationForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const dob = new Date(document.getElementById('dob').value);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18 || age > 55) {
        alert('Age must be between 18 and 55 years.');
        return;
      }
      alert('Form submitted successfully!');
    });