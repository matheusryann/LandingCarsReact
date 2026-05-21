import './Main.css'
import { useCountUp } from '../hooks/useCountUp'

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCtKxnWB-9sUrhekQTDIp7Vp37jo3vLicttjWnSUuzqt0gwvNICiQ1IPtLkhhKllNfNSpfPk8py1bpkr99p82f3PPrvWTmWP1ZTb1PJJX9mdPeuT7JGxj9DAcgBvpfDdIjrODHivJJ3doGTwrTl9NUiwgOi_MXMVgUpl7rjoTwiiU35lqvlYWirsP6zVDAQF1Z2tSQa9Plkkry54mdEHizZ6Wu5601XMkgGKs2EeirIOMYnZhBWwk6U1d3-GT8jh_-ur-aLkrtc3iUY'

const PROMO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCtKxnWB-9sUrhekQTDIp7Vp37jo3vLicttjWnSUuzqt0gwvNICiQ1IPtLkhhKllNfNSpfPk8py1bpkr99p82f3PPrvWTmWP1ZTb1PJJX9mdPeuT7JGxj9DAcgBvpfDdIjrODHivJJ3doGTwrTl9NUiwgOi_MXMVgUpl7rjoTwiiU35lqvlYWirsP6zVDAQF1Z2tSQa9Plkkry54mdEHizZ6Wu5601XMkgGKs2EeirIOMYnZhBWwk6U1d3-GT8jh_-ur-aLkrtc3iUY'

const MATRIX_LED_IMAGE =
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'

const WHEEL_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCP0TeURjQYH9a96nNyN1bQwQm3joz4lkxKcFP3nmZlOOAQx-lXPEmQnYONwxGZQCBBKSGxxBtH9TLcJiHNxg13D2OyR2K_Xu9Uxe0kML82j_-SjUlAw6l8IbeHgnnafndMQPsPtIjFixYL343K3z7FRR7h8YcwEImw5V4e8elJ5rLuqcu9_i1W8BA1N9L3ShOE7MJKmR8vqPf9UbAz6-tFTUQ40rmbtqqMo_ThI-TFxyLR8r9HxFXaJs2kKRReB4KeiawKcgd_5AqF'

const ENGINEERING_NOTES = [
  'Adaptive air suspension with continuously variable damping.',
  '48V mild-hybrid system for optimized torque delivery.',
  'Acoustic glazing for whisper-quiet cabin dynamics.',
] as const

export default function Main() {
  const weight = useCountUp({ end: 1720, duration: 1400 })
  const acceleration = useCountUp({ end: 5.1, duration: 1200, decimals: 1 })

  return (
    <div className="car-dashboard" aria-label="Audi A6 Sedan showcase">
      <article className="car-dashboard__hero">
        <img
          className="car-dashboard__hero-media"
          src={HERO_IMAGE}
          alt="Audi A6 Sedan em estrada costeira"
        />
        <div className="car-dashboard__hero-copy">
          <p className="car-dashboard__label">vorsprung durch technik</p>
          <h1 className="car-dashboard__title">A6 Sedan</h1>
          <p className="car-dashboard__lead">
            Experience the pinnacle of German engineering. The Audi A6 Sedan
            combines sophisticated design with state-of-the-art technology,
            offering a driving experience that is as precise as it is powerful.
          </p>
        </div>
      </article>

      <div className="car-dashboard__rail">
        <aside className="car-dashboard__metrics" aria-label="Especificações rápidas">
          <article className="car-dashboard__metric">
            <h2 className="car-dashboard__label">Weight</h2>
            <p className="car-dashboard__metric-value">
              {weight.toLocaleString('en-US')} <span className="car-dashboard__metric-unit">KG</span>
            </p>
          </article>
          <article className="car-dashboard__metric">
            <h2 className="car-dashboard__label">Acceleration</h2>
            <p className="car-dashboard__metric-value">
              {acceleration.toFixed(1)}{' '}
              <span className="car-dashboard__metric-unit">SEC</span>
            </p>
          </article>
        </aside>

        <article className="car-dashboard__promo">
          <img
            className="car-dashboard__promo-media"
            src={PROMO_IMAGE}
            alt="Vista traseira do Audi A6"
          />
          <div className="car-dashboard__promo-copy">
            <div className="car-dashboard__promo-heading">
              <h2 className="car-dashboard__promo-title">New Book Every Week</h2>
              <span className="car-dashboard__promo-arrow" aria-hidden="true">
                →
              </span>
            </div>
            <p className="car-dashboard__promo-subtitle">Kinfolk Performance Edition</p>
          </div>
        </article>
      </div>

      <section className="car-dashboard__engineering">
        <p className="car-dashboard__body">
          The engineering behind the Audi A6 reflects decades of dynamic refinement.
          Every aerodynamic curve is meticulously tested in wind tunnels to ensure
          brutal efficiency on European roads.
        </p>
        <button type="button" className="car-dashboard__cta">
          Explore Details
        </button>
      </section>

      <article className="car-dashboard__feature car-dashboard__feature--matrix-led">
        <img
          className="car-dashboard__feature-media"
          src={MATRIX_LED_IMAGE}
          alt="Faróis Matrix LED do Audi A6"
        />
        <div className="car-dashboard__feature-copy">
          <h2 className="car-dashboard__label">Matrix LED Technology</h2>
          <p className="car-dashboard__body">
            Illuminating the path with intelligent precision optics.
          </p>
        </div>
      </article>

      <div className="car-dashboard__stack">
        <article className="car-dashboard__innovation">
        <span className="car-dashboard__innovation-watermark" aria-hidden="true">
          TRAVESSA
        </span>
        <div className="car-dashboard__innovation-copy">
          <p className="car-dashboard__label">Innovation Hub</p>
          <h2 className="car-dashboard__innovation-title">
            Advanced Quattro All-Wheel Drive
          </h2>
        </div>
        <figure className="car-dashboard__innovation-figure">
          <img
            className="car-dashboard__innovation-media"
            src={WHEEL_IMAGE}
            alt="Roda de liga leve Quattro em detalhe"
          />
        </figure>
      </article>

      <aside className="car-dashboard__notes">
        <h2 className="car-dashboard__label">Engineering Notes</h2>
        <ul className="car-dashboard__notes-list">
          {ENGINEERING_NOTES.map((note) => (
            <li key={note} className="car-dashboard__notes-item">
              {note}
            </li>
          ))}
        </ul>
      </aside>
      </div>
    </div>
  )
}
