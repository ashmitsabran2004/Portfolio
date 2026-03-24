import { Container } from '../shared/Container'

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <Container>
        <div className="text-center text-xs text-black/50">
          © {new Date().getFullYear()} Ashmit Sabran. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

