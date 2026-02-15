export interface Abilities {
  id: number;
  headlineDe: string;
  headlineEN: string;
  aboutDe: string;
  aboutEn: string;
  map: boolean;
}

export const ABILITIES: Abilities[] = [
  {
    id: 1,
    headlineDe: 'Wohnort Schneverdingen',
    headlineEN: 'Location Schneverdingen',
    aboutDe: 'Ich lebe in Schneverdingen in der Lüneburger Heide und arbeite flexibel im Remote- oder Hybrid-Modell. Regelmäßige Präsenz im regionalen Umfeld ist für mich ebenso selbstverständlich wie punktuelle Einsätze vor Ort bei weiter entfernten Standorten.',
    aboutEn: 'I am based in Schneverdingen in northern Germany and work flexibly in remote or hybrid setups. Regular on-site collaboration within the region is just as natural for me as occasional presence at more distant locations when required.',
    map: true,
  },
  {
    id: 2,
    headlineDe: 'Flexibel vernetzt',
    headlineEN: 'Flexibly Connected',
    aboutDe:
      'Ich arbeite strukturiert im Remote-Umfeld und schätze zugleich den direkten Austausch im Team. Offene Kommunikation, transparente Prozesse und gegenseitiges Feedback sind für mich entscheidend, um gemeinsam hochwertige und nachhaltige Softwarelösungen zu entwickeln – vor Ort wie digital.',
    aboutEn:
      'I work in a structured way within remote environments while also valuing direct collaboration in a team. Open communication, transparent processes, and constructive feedback are essential for me to build high-quality and sustainable software solutions – both on-site and digitally.',
    map: false,
  },
  {
    id: 3,
    headlineDe: 'Klar im Blick',
    headlineEN: 'Clear Insight',
    aboutDe:
      'Komplexe Probleme analysiere ich systematisch und zerlege sie in klar definierte Schritte. Detailgenauigkeit und technisches Verständnis helfen mir, Ursachen präzise zu identifizieren und stabile, durchdachte Lösungen zu entwickeln. Meine analytische Arbeitsweise bringe ich aus meiner früheren Tätigkeit als Bauingenieurin mit – heute setze ich sie gezielt in der Softwareentwicklung ein.',
    aboutEn:
      'I analyze complex problems systematically and break them down into clearly defined steps. Attention to detail and strong technical understanding enable me to identify root causes precisely and develop stable, well-designed solutions. I developed this analytical mindset during my previous work as a civil engineer – today, I apply it directly to software development.',
    map: false,
  },
  {
    id: 4,
    headlineDe: 'Struktur & Vision',
    headlineEN: 'Structure & Vision',
    aboutDe:
      'Ich arbeite strukturiert und denke Projekte von Beginn an ganzheitlich. Klare Planung, saubere Architektur und nachvollziehbare Prozesse bilden für mich die Grundlage nachhaltiger Softwareentwicklung. So entstehen Lösungen, die nicht nur funktionieren, sondern langfristig wartbar und erweiterbar bleiben.',
    aboutEn:
      'I approach projects with structure and a holistic perspective from the very beginning. Clear planning, clean architecture, and transparent processes form the foundation of sustainable software development for me. This results in solutions that not only work reliably but remain maintainable and scalable in the long term.',
    map: false,
  },
];

