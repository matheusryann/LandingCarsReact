import SettingsIcon from '@mui/icons-material/Settings'
import SpeedIcon from '@mui/icons-material/Speed'
import AirIcon from '@mui/icons-material/Air'
import { useState } from 'react'
import './SideBar.css'

const specs = [
  {
    id: 'Engine',
    label: 'V6 ENGINE',
    icon: <SettingsIcon />,
  },
  {
    id: 'HP',
    label: '200 HP',
    icon: <SpeedIcon />,
  },
  {
    id: 'CD',
    label: '0.28 CD',
    icon: <AirIcon />,
  },
] as const

type SpecId = (typeof specs)[number]['id']

export default function SideBar() {
  const [activeSpec, setActiveSpec] = useState<SpecId>('Engine')

  const itemClass = (id: SpecId) =>
    `site-sidebar__item${activeSpec === id ? ' site-sidebar__item--active' : ''}`

  return (
    <aside className="site-sidebar" aria-label="Especificações técnicas">
      <span className="site-sidebar__brand">TECH SPEC</span>
      <ul className="site-sidebar__list">
        {specs.map((spec) => (
          <li key={spec.id} className="site-sidebar__list-item">
            <button
              type="button"
              className={itemClass(spec.id)}
              aria-current={activeSpec === spec.id ? 'true' : undefined}
              onClick={() => setActiveSpec(spec.id)}
            >
              <span className="site-sidebar__icon" aria-hidden="true">
                {spec.icon}
              </span>
              <span className="site-sidebar__label">{spec.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
