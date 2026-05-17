import SettingsIcon from "@mui/icons-material/Settings";
import PowerIcon from "@mui/icons-material/Power";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useState } from "react";
import "./SideBar.css";

const specs = [
  {
    id: "Engine",
    label: "Motor",
    icon: <SettingsIcon />,
  },
  {
    id: "HP",
    label: "200 HP",
    icon: <PowerIcon />,
  },
  {
    id: "Range",
    label: "500 km",
    icon: <DirectionsCarIcon />,
  },
];

export default function SideBar() {

  const [activeSpec, setActiveSpec] =
    useState<(typeof specs)[number]["id"]>("Engine");

  const itemClass = (id: (typeof specs)[number]["id"]) =>
    `site-sidebar__item${activeSpec === id ? "site-sidebar__item--active" : ""}`;

  function handleSpecClick(id: (typeof specs)[number]["id"]) {
    setActiveSpec(id);
  }

  return (
    <aside className="site-sidebar">
      <span className="site-sidebar__brand">TECH Cars</span>
      <ul>
        {specs.map((spec) => (
          <li key={spec.id} className="site-sidebar__list">
            <button type="button" className={itemClass(spec.id)} onClick={() => handleSpecClick(spec.id)}>
              {spec.icon} aria-current={activeSpec === spec.id ? "page" : undefined}
              <span className="site-sidebar__label">{spec.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
