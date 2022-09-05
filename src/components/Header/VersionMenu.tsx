import { Menu } from '@headlessui/react'
import { clsx } from 'clsx'
import Link from 'next/link'

const VersionMenu = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        aria-label="Version"
        className="flex items-center rounded-full border border-slate-700/10 bg-slate-100 py-1.5 pl-2.5 pr-3 text-xs font-semibold text-slate-500 transition hover:border-slate-700/20"
      >
        v2.0.0
        <svg viewBox="0 0 6 3" className="ml-2 w-1.5 overflow-visible">
          <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute top-full mt-1 w-40 rounded-lg bg-white py-2 text-sm font-semibold leading-6 text-slate-700 shadow ring-1 ring-slate-900/5">
        <Menu.Item disabled>
          <span className="flex items-center justify-between px-3 py-1 text-violet-500">
            v2.0.0
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                d="m7.75 12.75 2.25 2.5 6.25-6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href="https://v1.heroicons.com"
              className={clsx(
                'block px-3 py-1',
                active && 'bg-slate-50 text-slate-900'
              )}
            >
              v1.0.6
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default VersionMenu
