var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  const customer = customerData[firstName]
  var greeting = '';
	
  if (!customer) {
    greeting = 'Welcome! Is this your first time?'
  } else {
    const { visits } = customer

    if (visits === 1) {
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`
    } else {
      greeting = `Welcome back, ${firstName}! So glad to see you again!`
    }
  }
	
  return greeting;
}
