let balance = 100;

function predict(choice) {
  const colors = ['red', 'green', 'violet'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const result = colors[randomIndex];

  let message = '';
  if (choice === result) {
    balance += 50;
    message = `🎉 জয়! ${result} সঠিক ছিলো! ₹50 যোগ হলো।`;
  } else {
    balance -= 20;
    message = `😞 ভুল! সঠিক উত্তর ছিল ${result}. ₹20 কেটে নেওয়া হয়েছে।`;
  }

  document.getElementById('balance').textContent = `Balance: ₹${balance}`;
  document.getElementById('result').textContent = message;
}
