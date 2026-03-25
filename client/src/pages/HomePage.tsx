import { Hero } from '../sections/Hero'
import { Stats } from '../sections/Stats'
import { Achievements } from '../sections/Achievements'
import { Services } from '../sections/Services'
import { Training } from '../sections/Training'
import { Resume } from '../sections/Resume'

export function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Achievements />
      <Services />
      <Training />
      <Resume />
    </div>
  )
}

