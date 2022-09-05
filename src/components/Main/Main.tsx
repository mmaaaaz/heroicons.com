import IconsContainer from '@/components/Main/IconsContainer'
import useIcons from '@/hooks/use-icons'
import { IconTypes } from '@/types'
import { Suspense, useState } from 'react'
import IconsGroup from './IconsGroup'
import SearchBar from './SearchBar'

const Main = () => {
  const [query, setQuery] = useState('')
  const [iconGroup, setIconGroup] = useState<IconTypes>('Outline')
  const icons = useIcons(iconGroup, query)

  return (
    <main>
      <Suspense fallback={null}>
        <SearchBar
          query={query}
          setQuery={setQuery}
          iconGroup={iconGroup}
          setIconGroup={setIconGroup}
        />
      </Suspense>

      <Suspense fallback={null}>
        <IconsGroup iconGroup={iconGroup} setIconGroup={setIconGroup} />
      </Suspense>

      <Suspense fallback={null}>
        <IconsContainer icons={icons} query={query} />
      </Suspense>
    </main>
  )
}

export default Main
