import { importIcons } from './import-icons'

export const getIconsCount = () =>
  importIcons(require.context(`heroicons/24/outline/`, false, /\.svg$/)).length
