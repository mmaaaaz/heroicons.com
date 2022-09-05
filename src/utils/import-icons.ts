import { tags } from '@/data/tags'
import { IconProps } from '@/types'

export const importIcons = (r: any, attrs?: any) => {
  return r
    .keys()
    .filter((fileName: string) => fileName.startsWith('./'))
    .map((fileName: string) => {
      const name: string = fileName.slice(2).replace(/\.svg$/, '')

      const data: IconProps = {
        name,
        tags: tags[name] ?? [],
        svg: r(fileName).replace('>', ` ${attrs}>`),
      }

      return data
    })
}
