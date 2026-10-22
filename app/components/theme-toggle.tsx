'use client';

import { useTheme } from "@/app/providers/theme-provider";
import { Icon } from "@iconify/react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} className='px-3 py-1 fixed top-4 right-4 z-50'>
      {theme === 'dark' ? <Icon icon="meteocons:clear-day-fill" width="40" /> : <Icon icon="meteocons:clear-night-fill" width="40" />}
    </button>
  )
}