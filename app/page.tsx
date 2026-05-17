export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section id="baner" className="min-h-screen bg-slate-900/95">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 md:px-10">
          <header className="flex items-center justify-between gap-6 rounded-3xl bg-white/5 px-5 py-4 backdrop-blur-lg shadow-soft ring-1 ring-white/10">
            <span className="font-semibold text-white">Portfolio</span>
            <nav className="flex items-center gap-4 text-sm text-slate-200">
              <a href="#baner" className="hover:text-white">Start</a>
              <a href="#portfolio" className="hover:text-white">Portfolio</a>
              <a href="#kontakt" className="hover:text-white">Kontakt</a>
            </nav>
          </header>

          <div className="space-y-8 py-12 text-center md:text-left">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Nowe eksperymenty UI / UX</p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Twój portfolio banner z przestrzenią na testy.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Trzy sekcje, responsywny layout i natychmiastowy widok kolorów tła do weryfikacji struktury.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Zobacz portfolio
              </a>
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-white">
                Skontaktuj się
              </a>
            </div>
          </div>

          <div className="grid gap-5 rounded-[2rem] bg-slate-950/70 p-6 ring-1 ring-white/10 backdrop-blur-xl md:grid-cols-3">
            {['Design system', 'Animacje', 'Responsive'].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-soft transition hover:-translate-y-1 hover:bg-white/10">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item}</p>
                <h2 className="mt-4 text-xl font-semibold text-white">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">Testuj nowe mechaniki i rozszerzaj stronę o kolejne sekcje oraz komponenty.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-cyan-950/95 px-6 py-20 text-slate-100 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Wybrane projekty i eksperymenty</h2>
            <p className="mt-4 text-base leading-7 text-cyan-100/80 sm:text-lg">Sekcja portfolio prezentuje próbki prac, testy interakcji i szybkie prototypy webowe.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Landing page', description: 'Hero, CTA i szybki prototyp responsywny.' },
              { title: 'Dashboard', description: 'Testy siatek, danych i animowanych kart.' },
              { title: 'Brand kit', description: 'Paleta kolorów, typografia i moodboard.' },
            ].map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft transition hover:-translate-y-1 hover:bg-white/10">
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-cyan-100/85">{item.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                  <span className="inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                  Eksperymentuje z nowymi rozwiązaniami
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-violet-950/95 px-6 py-20 text-slate-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="text-sm uppercase tracking-[0.35em] text-violet-300">Kontakt</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Napisz, jeśli chcesz zobaczyć więcej.</h2>
              <p className="mt-4 text-base leading-7 text-violet-100/80 sm:text-lg">Szybkie kontakty do współpracy, testów projektów i budowania kolejnych stron.</p>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
              <div className="space-y-6">
                <label className="block text-sm font-medium text-violet-100">
                  Email
                  <input type="email" placeholder="twoj@email.pl" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" />
                </label>
                <label className="block text-sm font-medium text-violet-100">
                  Wiadomość
                  <textarea rows={5} placeholder="Opisz swój pomysł..." className="mt-3 w-full resize-none rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20" />
                </label>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-violet-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-300">
                  Wyślij wiadomość
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
