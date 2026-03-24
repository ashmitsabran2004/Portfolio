const mongoose = require('mongoose')

const CertificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    imageUrl: { type: String, trim: true },
    certificateUrl: { type: String, trim: true },
  },
  { timestamps: true },
)

module.exports.Certificate = mongoose.model('Certificate', CertificateSchema)
