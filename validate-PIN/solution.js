function validatePIN (pin) {
    fourDigit = /^([0-9]){4}$/g.test(pin)
    sixDigit = /^([0-9]){6}$/g.test(pin)
    return fourDigit || sixDigit
  }
  // Even though Code Wars said I was supposed to use Regex, I half used Regex, and they accepted it.  I saw other solutions that used no Regex.