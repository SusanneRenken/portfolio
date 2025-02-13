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
    aboutDe: '',
    aboutEn: '',
    map: true,
  },
  {
    id: 2,
    headlineDe: 'Flexibel vernetzt',
    headlineEN: 'Flexibly Connected',
    aboutDe:
      'Die Freiheit der Remote-Arbeit öffnet mir Türen zu neuen Ideen, während der gemeinsame Austausch im Team den Funken der Innovation entfacht. Ob vor Ort in Schneverdingen oder im virtuellen Raum – im harmonischen Miteinander wächst aus Flexibilität nachhaltiger Erfolg. Jeder Code, den wir gemeinsam schreiben, bringt uns einen Schritt näher an visionäre Lösungen heran.',
    aboutEn:
      'The freedom of remote work opens doors to new ideas, while a collaborative team environment sparks innovation. Whether on-site in Schneverdingen or in the virtual realm, our harmonious collaboration transforms flexibility into sustainable success. Every line of code we write together brings us one step closer to visionary solutions.',
    map: false,
  },
  {
    id: 3,
    headlineDe: 'Klar im Blick',
    headlineEN: 'Clear Insight',
    aboutDe:
      'Es gibt immer eine Lösung, die nur darauf wartet, entdeckt zu werden. Mit analytischem Denken gehe ich den Dingen auf den Grund, konzentriere mich auf jedes Detail und arbeite mit Gewissenhaftigkeit daran, die beste Lösung zu finden. Dabei verliere ich nie das große Ganze aus den Augen. Bereits in meiner früheren Tätigkeit als Bauingenieurin konnte ich diese Fähigkeiten täglich unter Beweis stellen. Jede Herausforderung ist für mich eine Chance, Klarheit zu schaffen und mit einer frischen Perspektive neue Wege zu gehen.',
    aboutEn:
      'There is always a solution waiting to be discovered. With analytical thinking, I dig deep into matters, focus on every detail, and work diligently to find the best solution—never losing sight of the bigger picture. In my previous role as a civil engineer, I put these skills to work every day. Every challenge is an opportunity to create clarity and forge new paths with a fresh perspective.',
    map: false,
  },
  {
    id: 4,
    headlineDe: 'Struktur & Vision',
    headlineEN: 'Structure & Vision',
    aboutDe:
      'Verlässlichkeit ist der feste Anker in jedem Projekt, auf dem ich mit strategischem Planen und strukturierter Organisation aufbaue. Durchdachte Vorbereitung und klare Strukturen ermöglichen es mir, Visionen in greifbare Ergebnisse zu transformieren. So entsteht aus jedem Schritt eine fundierte Basis, die den Weg in eine innovative Zukunft ebnet.',
    aboutEn:
      'Reliability is the solid anchor in every project, built on strategic planning and structured organization. Thoughtful preparation and clear frameworks enable me to transform visions into tangible results. With every step, I lay a solid foundation that paves the way for an innovative future.',
    map: false,
  },
];
