import { IconProps, IconTypes } from '@/types'
import { importIcons } from '@/utils/import-icons'
import { matchSorter } from 'match-sorter'
import { useMemo } from 'react'

const iconsMap = {
  Outline: importIcons(
    require.context(`heroicons/24/outline/`, false, /\.svg$/),
    'class="w-6 h-6"'
  ),
  Solid: importIcons(
    require.context(`heroicons/24/solid/`, false, /\.svg$/),
    'class="w-6 h-6"'
  ),
  Mini: importIcons(
    require.context(`heroicons/20/solid/`, false, /\.svg$/),
    'class="w-5 h-5"'
  ),
}

const useIcons = (iconsGroup: IconTypes, query: string) => {
  return useMemo(() => {
    const icons: IconProps[] = iconsMap[iconsGroup]

    const filteredIcons: IconProps[] = query
      ? matchSorter(icons, query, { keys: ['name', 'tags'] })
      : icons

    return filteredIcons
  }, [iconsGroup, query])
}

export default useIcons
