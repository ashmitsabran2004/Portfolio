const mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    quote: { type: String, required: true, trim: true },
  },
  { timestamps: true },
)

module.exports.Testimonial = mongoose.model('Testimonial', TestimonialSchema)

