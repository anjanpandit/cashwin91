function sendOTP() {
  const phone = document.getElementById('phoneInput').value;
  if (phone.length !== 10) {
    alert("Enter a valid 10-digit phone number.");
    return;
  }
  localStorage.setItem("userPhone", phone);
  document.getElementById('otpSection').style.display = 'block';
}

function verifyOTP() {
  const otp = document.getElementById('otpInput').value;
  if (otp === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Incorrect OTP. Try 1234 for testing.");
  }
}
