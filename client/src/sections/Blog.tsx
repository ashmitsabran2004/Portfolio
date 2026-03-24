import { useEffect, useState } from 'react'
import { Card } from '../shared/Card'
import { Button } from '../shared/Button'
import { Container } from '../shared/Container'
import { Section } from '../shared/Section'
import { fetchJson } from '../lib/api'

type Post = {
  _id?: string
  title: string
  excerpt: string
}

const fallbackPosts: readonly Post[] = [
  {
    title: 'Building a scalable MERN API',
    excerpt: 'Patterns for clean routes, validation, and Mongo models that grow with your product.',
  },
  {
    title: 'Tailwind UI that stays maintainable',
    excerpt: 'Utility-first doesn’t mean messy—here’s how I structure components and tokens.',
  },
  {
    title: 'Animations that feel premium',
    excerpt: 'Small motion details that improve UX without hurting performance.',
  },
] as const

export function Blog() {
  const [posts, setPosts] = useState<readonly Post[]>(fallbackPosts)

  useEffect(() => {
    fetchJson<Post[]>('/api/posts')
      .then((data) => {
        if (Array.isArray(data) && data.length) setPosts(data)
      })
      .catch(() => {})
  }, [])

  return (
    <Container>
      <Section id="blog" eyebrow="Blog" title="Notes on building products">
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <Card key={p._id ?? p.title} className="flex h-full flex-col p-6">
              <div className="text-base font-semibold tracking-tight text-[hsl(var(--ink))]">
                {p.title}
              </div>
              <div className="mt-3 text-sm text-black/60">{p.excerpt}</div>
              <div className="mt-5 flex-1" />
              <Button
                variant="ghost"
                className="mt-2 w-full bg-white/80 hover:bg-white"
                onClick={() => {}}
              >
                Read more
              </Button>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  )
}

