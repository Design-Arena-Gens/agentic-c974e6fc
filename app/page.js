"use client";

export default function Home() {
  return (
    <main className="lux-gradient">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[--color-graph]/70 backdrop-blur-md">
        <div className="section flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/zia-logo.svg" alt="Zia Diamonds" className="h-8 w-8" />
            <span className="font-[--font-display] text-xl tracking-widest text-white">ZIA DIAMONDS</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#collections" className="hover:text-white">Collections</a>
            <a href="#craft" className="hover:text-white">Craftsmanship</a>
            <a href="#bespoke" className="hover:text-white">Bespoke</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-primary">Book Consultation</a>
        </div>
      </header>

      {/* HERO */}
      <section className="section relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="sparkle"
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
            />
          ))}
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 font-medium tracking-widest text-[--color-gold]">FINE DIAMOND JEWELRY</p>
          <h1 className="font-[--font-display] text-5xl leading-tight md:text-7xl golden-text">
            Where Brilliance Meets Timeless Elegance
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/70">
            Zia Diamonds crafts heirloom-quality pieces with ethically sourced stones and master artisanship. Luxury designed to be lived in.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#collections" className="btn btn-primary">Explore Collections</a>
            <a href="#bespoke" className="btn btn-ghost">Create Bespoke</a>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1200px] opacity-20">
          <div className="h-48 blur-3xl bg-gradient-to-r from-white/20 via-[--color-gold]/30 to-white/20 rounded-full" />
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="section py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-[--font-display] text-3xl md:text-5xl">Signature Collections</h2>
          <a href="#" className="text-sm text-[--color-gold] hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Celeste Solitaires",
              img: "https://images.unsplash.com/photo-1609250291996-fdebe6020a8c?q=80&w=1969&auto=format&fit=crop",
              desc: "The ultimate expression of clarity and light.",
            },
            {
              title: "Aurora Halo",
              img: "https://images.unsplash.com/photo-1613414498739-e9a7c0763d0a?q=80&w=2080&auto=format&fit=crop",
              desc: "Radiant halos amplifying each stone's fire.",
            },
            {
              title: "Noir Pav?",
              img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1974&auto=format&fit=crop",
              desc: "Modern silhouettes with pav? brilliance.",
            },
          ].map((c, i) => (
            <article key={i} className="card group">
              <img src={c.img} alt={c.title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-[--font-display] text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-white/75">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section id="craft" className="section py-20 md:py-28">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="card p-8 md:p-12">
            <h2 className="font-[--font-display] text-3xl md:text-5xl">Crafted by Master Artisans</h2>
            <p className="mt-6 text-white/75">
              Every Zia piece is individually set and finished by hand. We obsess over angles, proportions, and polish to maximize fire, brilliance, and scintillation.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/75">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[--color-gold]"/> GIA-Certified Diamonds</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[--color-gold]"/> Ethical Sourcing</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[--color-gold]"/> Lifetime Care</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[--color-gold]"/> Custom Sizing</li>
            </ul>
          </div>
          <div className="card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1599643478110-52f533f9d5ab?q=80&w=2080&auto=format&fit=crop" alt="Craftsmanship" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* BESPOKE */}
      <section id="bespoke" className="section py-20 md:py-28">
        <div className="card p-8 md:p-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[--font-display] text-3xl md:text-5xl">Bespoke Design</h2>
              <p className="mt-4 text-white/75">From dream to heirloom in three refined steps.</p>
            </div>
            <a href="#contact" className="btn btn-primary mt-6 md:mt-0">Start Your Creation</a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { step: "01", title: "Consult", copy: "Define your vision, stones, and budget with our concierge." },
              { step: "02", title: "Design", copy: "Receive detailed renders and select your perfect setting." },
              { step: "03", title: "Create", copy: "Artisans craft your piece to exacting standards." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-[--color-gold]">{s.step}</div>
                <div className="mt-2 font-[--font-display] text-2xl">{s.title}</div>
                <p className="mt-2 text-white/70 text-sm">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section py-20 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-[--font-display] text-3xl md:text-5xl">The Zia Promise</h2>
            <p className="mt-6 text-white/75">
              We believe luxury should be responsible. Our diamonds are conflict-free, our metals are recycled where possible, and our supply chain is transparent.
            </p>
            <p className="mt-4 text-white/75">
              The result is jewelry that not only dazzles, but endures ? pieces designed to be passed down for generations.
            </p>
          </div>
          <div className="card p-6">
            <blockquote className="text-white/85">
              ?My Zia solitaire catches light like nothing else. The craftsmanship is unmatched.?
            </blockquote>
            <div className="mt-4 text-sm text-white/60">? Amelia R., New York</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="card p-8 md:p-10">
            <h2 className="font-[--font-display] text-3xl md:text-5xl">Book a Private Consultation</h2>
            <p className="mt-4 text-white/75">Tell us about your occasion and preferences. Our concierge will reach out within 24 hours.</p>
            <form className="mt-8 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-xl bg-black/30 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-[--color-gold]/50" placeholder="Full name" required />
              <input type="email" className="w-full rounded-xl bg-black/30 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-[--color-gold]/50" placeholder="Email" required />
              <input className="w-full rounded-xl bg-black/30 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-[--color-gold]/50" placeholder="Occasion (Engagement, Anniversary, etc.)" />
              <textarea className="w-full rounded-xl bg-black/30 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-[--color-gold]/50" rows="4" placeholder="Tell us more..." />
              <button className="btn btn-primary justify-self-start">Request Consultation</button>
            </form>
          </div>
          <div className="card p-8 md:p-10">
            <div className="font-[--font-display] text-2xl">Visit Our Salon</div>
            <p className="mt-4 text-white/75">By appointment only</p>
            <div className="mt-6 space-y-2 text-white/80 text-sm">
              <div>5th Avenue, New York, NY</div>
              <div>+1 (212) 555-0198</div>
              <a href="mailto:concierge@ziadiamonds.com" className="text-[--color-gold] hover:underline">concierge@ziadiamonds.com</a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-white/70">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/></svg>
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.2 2 11.3c0 3.7 2.3 6.9 5.5 8.2-.1-.7-.2-1.9 0-2.7.2-.7 1.5-6.4 1.5-6.4s-.4-.8-.4-2c0-1.9 1.1-3.3 2.5-3.3 1.2 0 1.8.9 1.8 2 0 1.2-.8 3-1.2 4.7-.3 1.4.6 2.6 2 2.6 2.4 0 4.2-2.5 4.2-6 0-3.1-2.2-5.3-5.4-5.3-3.7 0-5.8 2.8-5.8 5.6 0 1.1.4 2.3 1 2.9.1.1.1.1.1 0 .1-.2.2-.6.3-.9.1-.3.2-.5.1-.8-.1-.4-.3-1.4-.4-1.8-.1-.6.2-1.1.8-.9 1 .4 1.6 1.7 1.5 3.1-.1 2.1-1.1 3.7-1.1 5.7 0 1.3.9 2.4 2.7 2.4 2.3 0 3.9-2 3.9-5 0-2.6-1.8-4.5-4.4-4.5-3 0-4.8 2.2-4.8 4.4 0 .9.4 2 1 2.6.1.1.1.1.1 0 .1-.2.2-.6.3-.9.1-.3.2-.5.1-.8-.1-.4-.3-1.4-.4-1.8-.1-.6.2-1.1.8-.9 1 .4 1.6 1.7 1.5 3.1-.1 2.1-1.1 3.7-1.1 5.7 0 1.3.9 2.4 2.7 2.4 2.3 0 3.9-2 3.9-5C19.5 6.8 16.4 2 12 2z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l1-4h-4V7.5c0-1.2.3-2 2.1-2H17V2.2C16.7 2.1 15.6 2 14.3 2 11.6 2 9.8 3.6 9.8 6.6V9H7v4h2.8v9H13z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="section flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-10 text-sm text-white/70">
          <div className="flex items-center gap-3">
            <img src="/zia-logo.svg" alt="Zia Diamonds" className="h-6 w-6" />
            <span className="tracking-widest">ZIA DIAMONDS</span>
          </div>
          <div>? {new Date().getFullYear()} Zia Diamonds. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
