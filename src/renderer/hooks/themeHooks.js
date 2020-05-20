import { useEffect, useState } from 'react'

import { ipcRenderer } from 'electron'

export function useDarkColors () {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    ipcRenderer.invoke('should-use-dark-colors').then(setIsDarkMode)

    const onUpdate = (_, shouldUseDarkColors) => setIsDarkMode(shouldUseDarkColors)
    ipcRenderer.on('should-use-dark-colors-updated', onUpdate)
    return () => ipcRenderer.removeListener('should-use-dark-colors-updated', onUpdate)
  }, [])
  return isDarkMode
}
