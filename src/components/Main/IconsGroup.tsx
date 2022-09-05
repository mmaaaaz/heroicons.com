import { IconTypes } from '@/types'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { Dispatch, SetStateAction, useId } from 'react'
import Container from '../Container'

const IconsGroup = ({
  iconGroup,
  setIconGroup,
}: {
  iconGroup: IconTypes
  setIconGroup: Dispatch<SetStateAction<IconTypes>>
}) => {
  return (
    <Container>
      <RadioGroup
        value={iconGroup}
        onChange={setIconGroup}
        className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:pt-12"
      >
        {[
          [
            'Outline',
            '24x24, 1.5px stroke',
            'For primary navigation and marketing sections, with an outlined appearance.',
          ],
          [
            'Solid',
            '24x24, Solid fill',
            'For primary navigation and marketing sections, with a filled appearance.',
          ],
          [
            'Mini',
            '20x20, Solid fill',
            'For smaller elements like buttons, form elements, and to support text.',
          ],
        ].map(([type, details, description]) => {
          const isSelected = type === iconGroup

          return (
            <RadioGroup.Option
              value={type}
              key={type}
              className={clsx(
                'relative cursor-pointer rounded-xl p-6 text-sm leading-6 transition',
                isSelected
                  ? 'shadow-[0_1px_3px_rgba(15,23,42,0.03),0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-600/[0.04]'
                  : 'hover:bg-slate-50'
              )}
            >
              <h2>
                <div className="flex gap-2 transition [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-xl" />
                  <span
                    className={clsx(
                      'font-semibold',
                      isSelected ? 'text-violet-500' : 'text-slate-900'
                    )}
                  >
                    {type}
                  </span>
                  <span className="hidden text-slate-400 lg:block">
                    {details}
                  </span>
                </div>
              </h2>
              <p className="mt-1 text-slate-500">{description}</p>
              <Glow
                className={clsx(
                  'absolute top-full right-0 w-[384px] max-w-[120%] transition',
                  !isSelected && 'opacity-0'
                )}
              />
            </RadioGroup.Option>
          )
        })}
      </RadioGroup>
    </Container>
  )
}

export default IconsGroup

function Glow(props: any) {
  let id = useId()

  return (
    <svg viewBox="0 0 384 12" fill="none" aria-hidden="true" {...props}>
      <mask
        id={`${id}-a`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={48}
        y={0}
        width={269}
        height={4}
      >
        <path
          transform="rotate(180 316.656 4)"
          fill="#C4C4C4"
          d="M316.656 4h268v4h-268z"
        />
      </mask>
      <g filter={`url(#${id}-b)`} mask={`url(#${id}-a)`}>
        <path
          transform="rotate(180 292.656 1)"
          fill={`url(#${id}-c)`}
          d="M292.656 1h220v2h-220z"
        />
      </g>
      <mask
        id={`${id}-d`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={116}
        y={0}
        width={268}
        height={12}
      >
        <path
          transform="rotate(180 384 12)"
          fill="#C4C4C4"
          d="M384 12h268v12H384z"
        />
      </mask>
      <g filter={`url(#${id}-e)`} mask={`url(#${id}-d)`}>
        <path
          transform="rotate(180 360 1)"
          fill={`url(#${id}-f)`}
          d="M360 1h220v2H360z"
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-c`}
          x1="292.656"
          y1={1}
          x2="512.656"
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={`${id}-f`}
          x1={360}
          y1={1}
          x2={580}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <filter
          id={`${id}-b`}
          x="71.656"
          y={-2}
          width={222}
          height={4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
        <filter
          id={`${id}-e`}
          x={131}
          y={-10}
          width={238}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="4.5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
      </defs>
    </svg>
  )
}
