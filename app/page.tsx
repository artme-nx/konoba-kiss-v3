import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1766744604322-d0a4406626af",
  terrace: "https://images.unsplash.com/photo-1782299637314-ed35fa12622b",
  bayBoats: "https://images.unsplash.com/photo-1760340044148-71953f930178",
  sailboats: "https://images.unsplash.com/photo-1767045570562-741bf80a9dc5",
  pergola: "https://images.unsplash.com/photo-1704658288998-c84246b2559d",
  boatsAshore: "https://images.unsplash.com/photo-1762883074122-f618e7ae4feb",
  tableWine: "https://images.unsplash.com/photo-1764397514746-e58523d0eaff",
  manyBoats: "https://images.unsplash.com/photo-1580417992497-a0c602adde05",
  salad: "https://images.unsplash.com/photo-1778449532114-430396ada55b",
  grillFish: "https://images.unsplash.com/photo-1739484151190-e2a73842ca13",
  grillSeafood: "https://images.unsplash.com/photo-1703481267182-ddfdf6b51089",
  crepes: "https://images.unsplash.com/photo-1771250248306-3da13dac0a50",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.salad,
    dishes: [
      { name: "Domaća plata", desc: "Pršut, ovčji sir i masline, uz prepečeni kruh s češnjakom u maslinovom ulju." },
      { name: "Miješana salata", desc: "Sezonsko povrće iz vrtova Pašmana, maslinovo ulje i malo octa." },
      { name: "Salata od hobotnice", desc: "Kuhana hobotnica, krumpir, luk i peršin, začinjeno domaćim uljem." },
    ],
  },
  {
    cat: "S gradela",
    image: IMG.grillFish,
    dishes: [
      { name: "Orada s gradela", desc: "Ulov dana iz uvale, pečen na žaru uz krumpir i blitvu." },
      { name: "Lovrata s gradela", desc: "Cijela riba na žaru, malo ulja, limun i ništa više." },
      { name: "Domaći ražnjići", desc: "Za goste koji radije biraju meso — ražnjići s gradela i pomfrit ili salata." },
    ],
  },
  {
    cat: "Lignje i hobotnica",
    image: IMG.grillSeafood,
    dishes: [
      { name: "Lignje na gradele", desc: "Svježe lignje, kratko na žaru, maslinovo ulje i limun." },
      { name: "Pržena riba", desc: "Sitna riba iz mreže, pržena na starinski način, uz blitvu." },
      { name: "Riblji tanjur za dvoje", desc: "Kombinacija onoga što je more danas dalo — pitajte konobara." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.crepes,
    dishes: [
      { name: "Palačinke", desc: "Dvije domaće palačinke, kako se poslužuju uz riblji meni." },
      { name: "Rožata", desc: "Klasični dalmatinski krem desert s okusom karamela." },
    ],
  },
];

const GALLERY = [
  { src: IMG.bayBoats, alt: "Uvala s prozirnim tirkiznim morem i sidrenim brodicama", tall: true },
  { src: IMG.pergola, alt: "Terasa konobe pod zelenom nadstrešnicom" },
  { src: IMG.boatsAshore, alt: "Male drvene barke izvučene na kamenu obalu uvale" },
  { src: IMG.sailboats, alt: "Jedrilice usidrene u mirnoj uvali", wide: true },
  { src: IMG.manyBoats, alt: "Brojne brodice na sidru u zaklonjenoj uvali" },
  { src: IMG.tableWine, alt: "Stol s jelom i čašom vina u večernjem svjetlu" },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Zaklonjena uvala na otoku Pašmanu, tirkizno more i kamenita obala"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--gold)" }}>
            Konoba · Uvala Soline, Pašman
          </span>
          <h1
            className="font-display reveal max-w-[18ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--foreground)" }}
          >
            Konoba do koje se stiže <em className="italic" style={{ color: "var(--gold)" }}>brodom</em>.
          </h1>
          <p className="reveal mt-6 max-w-[44ch] text-[1.05rem]" style={{ color: "var(--sand-300, #DCD3BE)" }}>
            Skrivena uvala na Pašmanu, stol tik uz vodu i riba ravno iz mreže — obitelj Kiss vas čeka na miru, daleko od gužve.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--gold)]"
              style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.4" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.4
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Google ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="75" data-suffix="+" style={{ color: "var(--foreground)" }}>
              75+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija na TripAdvisoru</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>#5</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Od 19 restorana na Pašmanu</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="uvala" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--gold)" }}>Naša uvala</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            U zaklonjenoj uvali Soline, gdje se brodovi sidre uz kamenitu obalu, kuhamo ono što more donese —{" "}
            <em className="italic" style={{ color: "var(--gold)" }}>bez žurbe, bez pretvaranja, bez kartica.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--gold)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Ravno iz <em className="italic" style={{ color: "var(--gold)" }}>mreže</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--gold)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center font-display italic text-lg" style={{ color: "var(--gold)" }}>
            Riblji meni po izboru — meso, riba ili lignje, u četiri slijeda. Pitajte za današnju ponudu.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.terrace, 1000)} alt="Terasa konobe s pogledom na more, u sjeni masline" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--gold)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Obitelj Kiss i <em className="italic" style={{ color: "var(--gold)" }}>uvala</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Kiss je prezime, ne riječ. Naša konoba stoji u uvali Soline na Pašmanu, otoku preko kanala od Biograda — zelenom, tihom, s kamenim selima i sporim trajektom. Do nas se dolazi i brodom, uz sidrište pred vratima, i autom, mirnom otočnom cestom.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Jelovnik se mijenja s ulovom — orada, lovrata, lignje, ono što donese jutro. Gotovina je jedini način plaćanja, a rezervacija preporučena, osobito za veće grupe. Sve ostalo prepustite nama.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--gold)" }}>
              — obitelj Kiss, Uvala Soline
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--gold)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Prizori iz <em className="italic" style={{ color: "var(--gold)" }}>uvale</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--gold)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, u <em className="italic" style={{ color: "var(--gold)" }}>uvali</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--gold)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Uvala Soline, 23262 Pašman</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--gold)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Nazovite nas — osobito za veće grupe.</p>
              <a href="tel:+385915260717" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--gold)" }}>
                +385 91 526 0717
              </a>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--gold)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>09:00 – 23:00</span>
              </div>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--gold)" }}>Dolazak</div>
              <p style={{ color: "var(--muted-foreground)" }}>
                Brodom do sidrišta pred konobom ili autom otočnom cestom. Plaćanje isključivo gotovinom.
              </p>
            </div>

            <a
              href="tel:+385915260717"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--gold)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Konoba+Kiss+Uvala+Soline+Pasman&output=embed"
              loading="lazy"
              title="Konoba Kiss — Uvala Soline, Pašman"
              className="h-full w-full min-h-[360px] border-0 grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--night-900, #171B24)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--foreground)" }}>
                K<span style={{ color: "var(--gold)" }}>i</span>ss
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
                Obiteljska konoba u uvali Soline na otoku Pašmanu. Riba i lignje s gradela, dostupno brodom i autom.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--gold)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="#jelovnik" className="hover:text-[var(--gold)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--gold)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--gold)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--gold)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--gold)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="tel:+385915260717" className="font-display text-lg" style={{ color: "var(--foreground)" }}>+385 91 526 0717</a>
                <p>Uvala Soline, 23262 Pašman</p>
                <p>Zadarska županija, Hrvatska</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--surface-line)", color: "var(--muted-foreground)" }}
          >
            <span>© 2026 Konoba Kiss · Uvala Soline, Pašman</span>
            <span>4.4 ★ Google · 75+ recenzija na TripAdvisoru</span>
          </div>
        </div>
      </footer>
    </>
  );
}
