'use client';

import { useMemo, useState } from 'react';
import { site } from '@/content/site';

type ResourceLink = {
  label: string;
  href: string;
  description: string;
  category: string;
};

// Descriptions for catechism texts, keyed by href.
// The same text appears in multiple sections; a single map avoids duplication.
const CATECHISM_DESCRIPTIONS: Record<string, string> = {
  // — Confessional documents —
  'https://maksimologija.org/mogila-orthodox-confession/':
    '17th-century confessional document affirming Orthodox doctrine in question-and-answer form.',
  'https://www.pravoslavieto.com/docs/eng/Orthodox_Catechism_of_Philaret.htm':
    'The standard Russian Orthodox catechism; covers the Creed, Commandments, and prayers.',
  'https://orthodoxchristiantheology.com/2022/12/17/confession-of-dositheus-saint-filaret-of-moscow/':
    'The 1672 Jerusalem Synod\'s Orthodox response to Calvinist influence.',

  // — Patristic systematic theology —
  'http://orthodoxinfo.com/general/stjohn_exp1.aspx':
    'The definitive patristic systematic theology; covers the Trinity, creation, Christology, and the sacraments.',

  // — Divine Revelation & Tradition —
  'https://www.newadvent.org/fathers/1010.htm':
    'The origin of the Vincentian Canon: believed everywhere, always, and by all.',
  'https://www.newadvent.org/fathers/3201.htm':
    'Nine homilies on the six days of creation; foundational for the Orthodox understanding of Scripture.',
  'https://www.newadvent.org/fathers/0104.htm':
    'Written en route to martyrdom; on episcopal unity and steadfastness in the apostolic Faith.',
  'https://www.newadvent.org/fathers/0110.htm':
    'On unity with the bishop, the Eucharist, and life in Christ.',
  'https://www.newadvent.org/fathers/0311.htm':
    'Scripture belongs to the Church; heretics have no standing to interpret it.',
  'https://www.tertullian.org/fathers/irenaeus_02_proof.htm':
    'An early summary of apostolic doctrine written for catechesis.',
  'https://www.tertullian.org/fathers/photius_03bibliotheca.htm':
    'An annotated catalogue of 279 works read by Patriarch Photius; invaluable for patristic bibliography.',

  // — Trinitarian theology —
  'https://www.newadvent.org/fathers/290112.htm':
    'A detailed refutation of Arian subordinationism; foundational for Nicene Trinitarian theology.',
  'https://www.newadvent.org/fathers/2914.htm':
    'On human nature, the soul, and what it means to bear the image of God.',
  'https://www.newadvent.org/fathers/2915.htm':
    'A dialogue on the soul\'s immortality and the resurrection, written after Macrina\'s death.',
  'https://www.newadvent.org/fathers/3102.htm':
    'Five orations defending Nicene theology; among the most precise Trinitarian formulations in all of Patristics.',
  'https://azbyka.ru/otechnik/Grigorij_Palama/the-one-hundred-and-fifty-chapters/':
    'A synthesis of Orthodox theology defending the essence-energies distinction.',
  'https://www.orthodoxethos.com/post/the-encyclical-letter-of-saint-mark-of-ephesus':
    'Refuses reunion with Rome at Florence; a defining text of post-schism Orthodox identity.',
  'https://www.newadvent.org/fathers/2816.htm':
    'The primary patristic refutation of Arianism; essential for understanding the Nicene Creed.',

  // — Apophatic theology (Pseudo-Dionysius) —
  'https://www.tertullian.org/fathers/areopagite_03_divine_names.htm':
    'An apophatic treatment of how divine names may be applied to God; foundational for Orthodox mystical theology.',
  'https://www.tertullian.org/fathers/areopagite_06_mystic_theology.htm':
    'A brief text on apophatic theology and the soul\'s ascent beyond all concepts.',
  'https://www.tertullian.org/fathers/areopagite_14_ecclesiastical_hierarchy.htm':
    'On the hierarchical order of the Church\'s liturgy and its participation in the divine life.',

  // — Grace, salvation, and the Fall —
  'https://www.newadvent.org/fathers/15121.htm':
    'Augustine on grace and election; a reference point for the Orthodox understanding of Pelagianism.',

  // — Christology (St. Cyril of Alexandria) —
  'https://www.tertullian.org/fathers/cyril_on_john_00_praefatio.htm':
    'A major Christological commentary demonstrating the unity of Christ\'s person through the Gospel of John.',
  'https://www.tertullian.org/fathers/cyril_against_nestorius_01_book1.htm':
    'The refutation of Nestorian Christology; the primary documents leading to the Council of Ephesus (431).',
  'https://www.tertullian.org/fathers/cyril_christ_is_one_01_text.htm':
    'A dialogue affirming the single hypostasis of Christ against those who divided His person.',

  // — Apologetics (St. Justin Martyr) —
  'https://www.newadvent.org/fathers/0126.htm':
    'The earliest major Christian apologetic; explains Christian beliefs and practices to the Roman emperors.',
  'https://www.newadvent.org/fathers/0128.htm':
    'An extended dialogue arguing that Christ fulfills the promises of Jewish Scripture.',

  // — St. John Chrysostom —
  'https://www.newadvent.org/fathers/1908.htm':
    'Pre-baptismal homilies delivered to those preparing to receive Holy Baptism.',
  'https://www.newadvent.org/fathers/1922.htm':
    'Six books on the dignity and weight of priestly ministry; the most influential Orthodox text on priesthood.',
  'https://www.tertullian.org/fathers/chrysostom_adversus_judaeos_01_homily1.htm':
    'Homilies addressed to Antiochene Christians attending synagogue services; on the boundaries of the Church.',

  // — Icons —
  'https://www.documentacatholicaomnia.eu/03d/0675-0749,_Ioannes_Damascenus,_Apologia_Against_Those_Who_Decry_Holy_Images,_EN.pdf':
    'The classical Orthodox defense of icon veneration, written during the 8th-century iconoclast controversy.',

  // — Eschatology —
  'https://www.tertullian.org/fathers/jerome_daniel_02_text.htm':
    'Jerome\'s commentary on Daniel with attention to prophetic passages on judgment and resurrection.',
};

// Category display order
const CATEGORIES = [
  'All',
  'Theology & Doctrine',
  'Liturgy & Worship',
  'Spiritual Life',
  'Prayer',
  'Prayer Books',
  'Getting Started',
  'Parishes',
  'Books',
] as const;

// Category badge colors — full literal strings so Tailwind picks them up at build time
const CATEGORY_STYLE: Record<string, string> = {
  'Theology & Doctrine': 'bg-blue-50 text-blue-800',
  'Liturgy & Worship':   'bg-violet-50 text-violet-800',
  'Spiritual Life':      'bg-emerald-50 text-emerald-800',
  'Prayer':              'bg-amber-50 text-amber-800',
  'Prayer Books':        'bg-orange-50 text-orange-800',
  'Getting Started':     'bg-stone-100 text-stone-600',
  'Parishes':            'bg-teal-50 text-teal-800',
  'Books':               'bg-rose-50 text-rose-800',
};

function catechismCategory(sectionTitle: string): string {
  if (sectionTitle.includes('Mysteries') || sectionTitle.includes('Sacraments')) return 'Liturgy & Worship';
  if (sectionTitle.includes('Hope') || sectionTitle.includes('Charity')) return 'Spiritual Life';
  return 'Theology & Doctrine';
}

function prayerCategory(sectionTitle: string): string {
  if (
    sectionTitle.includes('Books') ||
    sectionTitle.includes('Rules') ||
    sectionTitle.includes('Home') ||
    sectionTitle.includes('Community')
  )
    return 'Prayer Books';
  if (sectionTitle.includes('Recommended')) return 'Books';
  return 'Prayer';
}

function resourcesCategory(sectionTitle: string): string {
  if (sectionTitle.includes('Parishes')) return 'Parishes';
  return 'Getting Started';
}

function buildLinks(): ResourceLink[] {
  const links: ResourceLink[] = [];

  // Catechism texts — descriptions come from the CATECHISM_DESCRIPTIONS lookup
  for (const section of site.catechism.sections) {
    const category = catechismCategory(section.title);
    for (const sub of section.subsections) {
      for (const item of sub.items) {
        for (const link of item.links) {
          links.push({
            label: 'author' in item ? `${item.author}: ${link.label}` : link.label,
            href: link.href,
            description: CATECHISM_DESCRIPTIONS[link.href] ?? '',
            category,
          });
        }
      }
    }
  }

  // Prayer resources — descriptions come from site.prayer.sections
  for (const section of site.prayer.sections) {
    const category = prayerCategory(section.title);
    for (const item of section.items) {
      links.push({
        label: item.label,
        href: item.href,
        description: item.description,
        category,
      });
    }
  }

  // General resources (parishes, getting-started links)
  for (const section of site.resources.sections) {
    const category = resourcesCategory(section.title);
    for (const item of section.items) {
      links.push({
        label: item.title,
        href: item.href,
        description: item.description,
        category,
      });
    }
  }

  return links;
}

const ALL_LINKS = buildLinks();

export default function Resources() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return ALL_LINKS.filter((link) => {
      const matchesCategory = activeCategory === 'All' || link.category === activeCategory;
      const matchesSearch =
        !q ||
        link.label.toLowerCase().includes(q) ||
        link.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const showing = filtered.length;
  const total = ALL_LINKS.length;

  return (
    <div className="content-shell max-w-4xl py-10 sm:py-16">
      <section className="page-intro mb-10">
        <h1 className="page-title">{site.resources.intro.title}</h1>
        <p className="page-copy mx-auto text-center">{site.resources.intro.description}</p>
      </section>

      {/* Search */}
      <div className="relative mb-4">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search resources…"
          className="w-full rounded-2xl border border-stone-200 bg-white/80 py-3.5 pl-11 pr-5 text-[1rem] text-stone-900 placeholder:text-stone-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200/60"
        />
      </div>

      {/* Category filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-[0.86rem] font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-amber-700 text-amber-50'
                : 'border border-stone-200 bg-white/80 text-stone-600 hover:border-amber-300 hover:bg-amber-50 hover:text-stone-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mb-3 text-[0.85rem] text-stone-400">
        {showing === total ? `${total} resources` : `${showing} of ${total} resources`}
      </p>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-stone-200 bg-white/70 px-6 py-16 text-center">
          <p className="text-stone-500">No resources match your search.</p>
        </div>
      ) : (
        <ul className="divide-y divide-stone-100 overflow-hidden rounded-2xl border border-stone-200 bg-white/80">
          {filtered.map((link, i) => (
            <li
              key={`${link.href}-${i}`}
              className="px-5 py-4 transition-colors hover:bg-amber-50/30 sm:px-6"
            >
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-link font-semibold leading-snug"
                >
                  {link.label}
                </a>
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[0.72rem] font-medium tracking-wide ${
                    CATEGORY_STYLE[link.category] ?? 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {link.category}
                </span>
              </div>
              {link.description && (
                <p className="mt-0.5 text-[0.91rem] leading-relaxed text-stone-500">
                  {link.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
