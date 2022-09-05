import { IconProps } from '@/types'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'

export function Icon({ icon: { name, svg } }: { icon: IconProps }) {
  const [state, setState] = useState<'idle' | 'copied' | 'active'>('idle')
  const [activeType, setActiveType] = useState<'svg' | 'jsx' | null>(null)

  function copy(as: 'svg' | 'jsx') {
    if (state === 'copied') return

    let text = svg.replace('aria-hidden="true"', '').replace(/"\/>/g, '" />')

    if (as === 'jsx') {
      text = text
        .replace(/class="/g, 'className="')
        .replace(
          /(\s[a-z]+)-([a-z])/g,
          (_: any, prefix: string, letter: string) =>
            `${prefix}${letter.toUpperCase()}`
        )
        .replace(/="([0-9.]+)"/g, (_: any, value: any) => `={${value}}`)
    }

    navigator.clipboard.writeText(text).then(() => {
      setState('copied')
    })
  }

  function activate() {
    if (state === 'idle') {
      setState('active')
    }
  }

  function deactivate() {
    if (state === 'active') {
      setState('idle')
      setActiveType(null)
    }
  }

  function onKeyDown(e: any) {
    if (['Enter', ' ', 'ArrowUp', 'ArrowDown', 'Escape'].includes(e.key)) {
      e.preventDefault()
    }
    if (state === 'active' && e.key === 'Escape') {
      setState('idle')
      setActiveType(null)
    } else if (
      state === 'idle' &&
      ['Enter', ' ', 'ArrowDown'].includes(e.key)
    ) {
      setState('active')
      setActiveType('svg')
    } else if (activeType === 'svg' && e.key === 'ArrowDown') {
      setActiveType('jsx')
    } else if (activeType === 'jsx' && e.key === 'ArrowUp') {
      setActiveType('svg')
    } else if (
      state === 'active' &&
      activeType &&
      ['Enter', ' '].includes(e.key)
    ) {
      copy(activeType)
    }
  }

  useEffect(() => {
    if (state === 'copied') {
      const handle = window.setTimeout(() => {
        setState('idle')
      }, 1000)
      return () => {
        window.clearTimeout(handle)
      }
    }
  }, [state])

  return (
    <div onMouseEnter={activate} onMouseLeave={deactivate}>
      <div className="relative h-[8.5rem]">
        <button
          type="button"
          onKeyDown={onKeyDown}
          onBlur={() => {
            setTimeout(() => {
              deactivate()
            }, 0)
          }}
          id={`${name}-btn`}
          aria-label={name}
          aria-haspopup="true"
          aria-controls={name}
          aria-expanded={state === 'active'}
          className="absolute inset-0 flex h-full w-full cursor-auto items-center justify-center rounded-xl text-slate-900 ring-1 ring-inset ring-slate-900/[0.08]"
        >
          <span
            dangerouslySetInnerHTML={{ __html: svg }}
            className={clsx(
              'transition-transform',
              state === 'copied'
                ? '-translate-y-3 duration-200 ease-out'
                : 'duration-500 ease-in-out'
            )}
          />
        </button>
        <Transition
          as={Fragment}
          show={state === 'copied'}
          enter="transition-opacity duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <p className="absolute inset-x-0 bottom-10 text-center text-[0.8125rem] font-semibold leading-6 text-violet-500">
            Copied!
          </p>
        </Transition>
        <Transition
          as={Fragment}
          show={state === 'active'}
          enter="transition-opacity duration-100 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            id={name}
            role="menu"
            aria-labelledby={`${name}-btn`}
            aria-activedescendant={
              activeType ? `${name}-${activeType}` : undefined
            }
            className={clsx(
              'absolute inset-0 grid grid-cols-1 grid-rows-2 gap-1 p-1',
              state !== 'active' && 'pointer-events-none'
            )}
          >
            <div
              id={`${name}-svg`}
              role="menuitem"
              className={clsx(
                'flex cursor-pointer items-center justify-center rounded-lg bg-slate-50/[0.94] text-[0.8125rem] font-semibold text-slate-500',
                activeType === 'svg' && 'bg-slate-200/80'
              )}
              onMouseEnter={() => setActiveType('svg')}
              onMouseLeave={() => setActiveType(null)}
              onClick={() => copy('svg')}
            >
              Copy SVG
            </div>
            <div
              id={`${name}-jsx`}
              role="menuitem"
              className={clsx(
                'flex cursor-pointer items-center justify-center rounded-lg bg-slate-50/[0.94] text-[0.8125rem] font-semibold text-slate-500',
                activeType === 'jsx' && 'bg-slate-200/80'
              )}
              onMouseEnter={() => setActiveType('jsx')}
              onMouseLeave={() => setActiveType(null)}
              onClick={() => copy('jsx')}
            >
              Copy JSX
            </div>
          </div>
        </Transition>
      </div>
      <div
        className="mt-3 truncate text-center text-[0.8125rem] leading-6 text-slate-500"
        title={name}
      >
        {name}
      </div>
    </div>
  )
}
