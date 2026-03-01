function strengthChecker() {
  let password = document.getElementById("password").value;
  let strength = 0;
  let feedback = [];
  if (password.length >= 6) {
    strength += 1;
  } else {
    feedback.push("• Password must be at least 6 charcater long!");
  }
  if (/[A-Z]/.test(password)) {
    strength += 1;
  } else {
    feedback.push("• Password must contain an uppercase letter!");
  }

  if (/[a-z]/.test(password)) {
    strength += 1;
  } else {
    feedback.push("• Password must contain a lowercase letter!");
  }

  if (/[0-9]/.test(password)) {
    strength += 1;
  } else {
    feedback.push("• Password must contain a number!");
  }

  if (/[!@#$%^&*()_+=\-{}\[\]:;<>|\\?\/]/.test(password)) {
    strength += 1;
  } else {
    feedback.push("• Password must contain symbols!");
  }
  let result;
  if (strength === 5) result = "✔Strong password!";
  else if (strength >= 3)
    result = `⚠️Medium password!<br><br>${feedback.join("<br>")}`;
  else result = `❌Weak password!<br><br>${feedback.join("<br>")}`;
  document.getElementById("checker").innerHTML = result;
}
