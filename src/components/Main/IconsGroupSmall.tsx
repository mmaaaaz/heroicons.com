import { IconTypes } from '@/types'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

const IconsGroupSmall = ({
  iconGroup,
  setIconGroup,
}: {
  iconGroup: IconTypes
  setIconGroup: Dispatch<SetStateAction<IconTypes>>
}) => {
  return (
    <RadioGroup
      value={iconGroup}
      onChange={setIconGroup}
      className="grid grid-cols-3 gap-0.5 rounded-lg bg-slate-400/10 text-center text-[0.8125rem] font-semibold leading-6 text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/5"
    >
      {['Outline', 'Solid', 'Mini'].map((type, typeIndex, types) => {
        const isSelected = type === iconGroup

        return (
          <RadioGroup.Option
            value={type}
            key={type}
            className={clsx(
              'py-2 px-6 transition select-none cursor-pointer focus:z-10 [&:not(:focus-visible)]:focus:outline-none',
              typeIndex === 0 && 'rounded-l-lg',
              typeIndex === types.length - 1 && 'rounded-r-lg',
              isSelected
                ? 'bg-slate-50 text-violet-500'
                : 'bg-white hover:bg-slate-50 hover:text-slate-700'
            )}
          >
            {type}
          </RadioGroup.Option>
        )
      })}
    </RadioGroup>
  )
}

export default IconsGroupSmall
