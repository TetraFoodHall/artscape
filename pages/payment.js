// Payment Section Interactivity & Validation
document.addEventListener('DOMContentLoaded', function () {
  const paymentRadios = document.querySelectorAll('input[name="paymentType"]');
  const gatewaySelect = document.getElementById('gatewaySelect');
  const cardDetails = document.getElementById('cardDetails');
  const paymentForm = document.getElementById('paymentForm');
  const payBtn = document.getElementById('payBtn');
  const paySpinner = document.getElementById('paySpinner');
  const btnText = payBtn ? payBtn.querySelector('.btn-text') : null;
  // Error fields
  const cardNumber = document.getElementById('cardNumber');
  const expiry = document.getElementById('expiry');
  const cvv2 = document.getElementById('cvv2');
  const notRobot = document.getElementById('notRobot');
  const cardNumberError = document.getElementById('cardNumberError');
  const expiryError = document.getElementById('expiryError');
  const cvv2Error = document.getElementById('cvv2Error');
  const captchaError = document.getElementById('captchaError');

  function showOnlineFields(show) {
    if (show) {
      gatewaySelect.style.display = '';
      cardDetails.style.display = '';
    } else {
      gatewaySelect.style.display = 'none';
      cardDetails.style.display = 'none';
    }
  }

  // Initial state
  showOnlineFields(paymentRadios[0].checked);

  paymentRadios.forEach(radio => {
    radio.addEventListener('change', function () {
      showOnlineFields(this.value === 'online');
    });
  });

  // Simple validation helpers
  function validateCardNumber(num) {
    // Accepts 16 digits, with or without spaces
    return /^\d{4} ?\d{4} ?\d{4} ?\d{4}$/.test(num.replace(/-/g, ''));
  }
  function validateExpiry(val) {
    // MM/YY, simple check
    return /^\d{2}\/\d{2}$/.test(val);
  }
  function validateCVV2(val) {
    return /^\d{3,4}$/.test(val);
  }

  function clearErrors() {
    cardNumberError.textContent = '';
    expiryError.textContent = '';
    cvv2Error.textContent = '';
    captchaError.textContent = '';
  }

  paymentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    let valid = true;
    if (paymentRadios[0].checked) {
      // Online payment validation
      if (!validateCardNumber(cardNumber.value)) {
        cardNumberError.textContent = 'کارت نامعتبر است';
        valid = false;
      }
      if (!validateExpiry(expiry.value)) {
        expiryError.textContent = 'تاریخ نامعتبر است';
        valid = false;
      }
      if (!validateCVV2(cvv2.value)) {
        cvv2Error.textContent = 'کد CVV2 نامعتبر است';
        valid = false;
      }
      if (!notRobot.checked) {
        captchaError.textContent = 'لطفا تیک من ربات نیستم را بزنید';
        valid = false;
      }
    }
    if (!valid) return;
    // Simulate payment process
    payBtn.disabled = true;
    if (btnText) btnText.style.display = 'none';
    paySpinner.style.display = 'inline-block';
    setTimeout(() => {
      payBtn.disabled = false;
      if (btnText) btnText.style.display = '';
      paySpinner.style.display = 'none';
      alert('سفارش شما با موفقیت ثبت شد!');
      paymentForm.reset();
      showOnlineFields(true);
    }, 2000);
  });

  // Billing summary: fake discount logic (for demo)
  const discountRow = document.getElementById('discountRow');
  const discount = document.getElementById('discount');
  const subtotal = document.getElementById('subtotal');
  const shipping = document.getElementById('shipping');
  const finalTotal = document.getElementById('finalTotal');
  // Example: if subtotal > 2,000,000, show discount
  function updateSummary() {
    // Demo: if subtotal > 2,000,000, show 100,000 discount
    let sub = 2000000, ship = 50000, disc = 0;
    if (sub > 2000000) disc = 100000;
    subtotal.textContent = sub.toLocaleString('fa-IR') + ' تومان';
    shipping.textContent = ship.toLocaleString('fa-IR') + ' تومان';
    if (disc > 0) {
      discountRow.style.display = '';
      discount.textContent = disc.toLocaleString('fa-IR') + ' تومان';
    } else {
      discountRow.style.display = 'none';
    }
    finalTotal.textContent = (sub + ship - disc).toLocaleString('fa-IR') + ' تومان';
  }
  updateSummary();
});
