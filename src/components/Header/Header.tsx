import { getIconsCount } from '@/utils/getIconsCount'
import { clsx } from 'clsx'
import Image from 'next/future/image'
import { ReactNode } from 'react'
import { Button, ShareButton } from '../Buttons'
import { Figmaicon, GithubIcon, Logo } from '../UI/Icons'
import Illustration from '../UI/Illustration'
import VersionMenu from './VersionMenu'

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-slate-50 pt-6">
      <Image
        src={require('../../../public/beams.jpg')}
        alt="decoration-backgound"
        className="absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none"
        priority
        unoptimized
      />

      <div className="absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]" />

      <Container className="relative">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-7" />
            <VersionMenu />
          </div>

          <ShareButton />
        </div>

        <div className="flex justify-center text-center lg:pt-5 lg:pb-7 lg:text-left">
          <div className="flex max-w-[37rem] flex-col py-16 lg:pt-12 lg:pb-11">
            <h1 className="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl">
              Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.
            </h1>
            <div className="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start">
              <p>{`${getIconsCount()} icons`}</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p>MIT license</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p>React &amp; Vue libraries</p>
            </div>
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              <Button href="https://github.com/tailwindlabs/heroicons">
                <GithubIcon />
                Documentation
              </Button>
              <Button href="https://www.figma.com/community/file/1143911270904274171">
                <Figmaicon />
                Get Figma File
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-auto lg:justify-center">
            <Illustration />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header

function Container({
  className,
  children,
  ...props
}: {
  className: string
  children: ReactNode
}) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}
