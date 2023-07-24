export const metadata = {
  title: 'Home - JobBoard',
  description: 'Page description',
}
import Hero from '@/components/hero'
import PressLogos from '@/components/press-logos'
import Sidebar from '@/components/sidebar'
import PostsList from './posts-list'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <PressLogos />

      {/*  Page content */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <div className="md:flex md:justify-between" data-sticky-container>

              <Sidebar />

              {/* Main content */}
              <div className="md:grow">
                {/* @ts-expect-error Async Server Component */}
                <PostsList />
                <Testimonials />

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
