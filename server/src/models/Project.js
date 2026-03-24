const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tag: { type: String, required: true, trim: true },
    techStack: [{ type: String, trim: true }],
    imageUrl: { type: String, trim: true },
    githubUrl: { type: String, trim: true },
    liveUrl: { type: String, trim: true },
  },
  { timestamps: true },
)

module.exports.Project = mongoose.model('Project', ProjectSchema)

