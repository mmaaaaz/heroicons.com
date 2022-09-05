import { IconProps } from '@/types'
import Link from 'next/link'
import Container from '../Container'
import { Icon } from './Icon'

const IconsContainer = ({
  icons,
  query,
}: {
  icons: IconProps[]
  query: string
}) => {
  return (
    <Container>
      {icons.length === 0 ? (
        <NoIconsFound query={query} />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-8 pt-10 pb-16 sm:pt-11 md:pt-12">
          {icons.map((icon) => (
            <Icon key={icon.name} icon={icon} />
          ))}
        </div>
      )}
    </Container>
  )
}

export default IconsContainer

const NoIconsFound = ({ query }: { query: string }) => (
  <div className="flex flex-col items-center py-20 text-sm leading-6 text-slate-600 md:py-32 lg:py-40">
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8">
      <path
        d="m13 13 6 6m0-6-6 6m15-3c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <p className="mt-6">
      We’re sorry we don’t have icons for{' '}
      <span className="font-semibold text-slate-900">{`“${query}”`}</span>.
    </p>
    <p className="mt-1">
      If you can’t find what you’re looking for{' '}
      <Link
        href="https://github.com/tailwindlabs/heroicons/discussions/new?category=ideas"
        className="font-semibold text-violet-600"
      >
        make a suggestion on GitHub.
      </Link>
    </p>
  </div>
)
