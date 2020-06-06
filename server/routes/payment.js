const express = require('express')
const router = express.Router()
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`)

router.get('/secret', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'gbp',
      metadata: {integration_check: 'accept_a_payment'}
    })
    res.status(200).json({
      client_secret: paymentIntent.client_secret
    })
  } catch (e) {
    res.json({
      success: false
    })
  }
  
})

module.exports = router