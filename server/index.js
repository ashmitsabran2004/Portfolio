require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const { Project } = require('./src/models/Project')
const { Testimonial } = require('./src/models/Testimonial')
const { Post } = require('./src/models/Post')
const { ContactMessage } = require('./src/models/ContactMessage')
const { Certificate } = require('./src/models/Certificate')

const app = express()

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || true,
  }),
)
app.use(express.json({ limit: '1mb' }))

let mongoReady = false

async function connectMongo() {
  const uri = process.env.MONGO_URI
  if (!uri) return
  try {
    await mongoose.connect(uri)
    mongoReady = true
    // eslint-disable-next-line no-console
    console.log('[mongo] connected')
  } catch (e) {
    mongoReady = false
    // eslint-disable-next-line no-console
    console.warn('[mongo] connection failed, running in memory mode')
  }
}

const memory = {
  projects: [
    {
      title: 'Inventory Management System',
      description:
        'Smart inventory web app for small businesses with supplier management, voice input, and threshold alerts. Improved operational efficiency by 40%.',
      tag: 'Development',
      techStack: ['TypeScript', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
      imageUrl: '/project-placeholder.svg',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'LangLeo',
      description:
        'Multilingual chatbot platform with persistent sessions, chat history, and intelligent message flows for real-time interaction.',
      tag: 'Development',
      techStack: ['React.js', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      imageUrl: '/project-placeholder.svg',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'PrepCircle',
      description:
        'Collaborative exam prep platform with video conferencing, group discussions, and progress analytics.',
      tag: 'Development',
      techStack: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Framer', 'Tailwind CSS'],
      imageUrl: '/project-placeholder.svg',
      githubUrl: '#',
      liveUrl: '#',
    },
  ],
  testimonials: [
    {
      name: 'Ayesha K.',
      role: 'Product Manager',
      rating: 5,
      quote:
        'Super clean implementation, great communication, and the final UI looked even better than the mockups.',
    },
  ],
  posts: [
    {
      title: 'Building a scalable MERN API',
      excerpt: 'Patterns for clean routes, validation, and Mongo models that grow with your product.',
    },
  ],
  certificates: [
    {
      title: 'Full Stack Web Development',
      issuer: 'Coding Academy',
      date: '2024',
      description: 'Comprehensive training in modern web development technologies including React, Node.js, and MongoDB.',
      imageUrl: '/certificate-placeholder.svg',
      certificateUrl: '#',
    },
    {
      title: 'JavaScript Advanced Concepts',
      issuer: 'Tech Institute',
      date: '2024',
      description: 'Advanced JavaScript programming, ES6+ features, and modern development practices.',
      imageUrl: '/certificate-placeholder.svg',
      certificateUrl: '#',
    },
    {
      title: 'React.js Professional',
      issuer: 'Web Dev School',
      date: '2023',
      description: 'Professional React development including hooks, state management, and performance optimization.',
      imageUrl: '/certificate-placeholder.svg',
      certificateUrl: '#',
    },
  ],
}

app.get('/api/health', (_req, res) => res.json({ ok: true, mongoReady }))

app.get('/api/projects', async (_req, res) => {
  if (!mongoReady) return res.json(memory.projects)
  const data = await Project.find().sort({ createdAt: -1 }).lean()
  res.json(data)
})

app.get('/api/testimonials', async (_req, res) => {
  if (!mongoReady) return res.json(memory.testimonials)
  const data = await Testimonial.find().sort({ createdAt: -1 }).lean()
  res.json(data)
})

app.get('/api/posts', async (_req, res) => {
  if (!mongoReady) return res.json(memory.posts)
  const data = await Post.find().sort({ createdAt: -1 }).lean()
  res.json(data)
})

app.get('/api/certificates', async (_req, res) => {
  if (!mongoReady) return res.json(memory.certificates)
  const data = await Certificate.find().sort({ createdAt: -1 }).lean()
  res.json(data)
})

const nodemailer = require('nodemailer')

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  // 1. Attempt to send Email Notification directly to your Inbox
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'ashmitsabaran1234@gmail.com', 
        pass: process.env.EMAIL_PASS // You need a Gmail App Password
      }
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.EMAIL_USER || 'ashmitsabaran1234@gmail.com'}>`,
      to: 'ashmitsabaran1234@gmail.com',
      replyTo: email, // If you click "reply" in gmail, it sends back to the person who filled out the form
      subject: `🚀 Portfolio Message from ${name}`,
      text: `Hey Ashmit,\n\nYou just received a new message via your portfolio's contact form:\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message:\n${message}\n\n---\nSent from your FullStack.Dev Portfolio`
    });
    console.log('[contact] Email successfully sent to ashmitsabaran1234@gmail.com');
  } catch (err) {
    console.error('[contact] Warning: Could not send email. Did you set up the EMAIL_PASS App Password? Error:', err.message);
  }

  // 2. Save identically to Memory or MongoDB
  if (!mongoReady) {
    // eslint-disable-next-line no-console
    console.log('[contact]', { name, email, message })
    return res.status(201).json({ ok: true })
  }

  await ContactMessage.create({ name, email, message })
  res.status(201).json({ ok: true })
})

connectMongo();

// We only start the server directly if we are not running inside Netlify Functions
if (!process.env.NETLIFY) {
  const port = Number(process.env.PORT || 5000)
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`[server] listening on http://localhost:${port}`)
  })
}

module.exports = app;


