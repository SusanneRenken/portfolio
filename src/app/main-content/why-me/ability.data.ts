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
    headlineDe: 'Remote-Arbeit',
    headlineEN: 'Remotework',
    aboutDe: 'Flexibel in Bezug auf Arbeitsumgebungen, kann ich sowohl vor Ort in Schneverdingen als auch remote effektiv arbeiten.',
    aboutEn: 'Flexible in terms of working environments, I can work effectively both on-site in Schneverdingen and remotely.',
    map: false,
  },
  {
    id: 3,
    headlineDe: 'Fehlt noch',
    headlineEN: 'Is missing',
    aboutDe: 'Ich bin aufgeschlossen und suche ständig nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
    aboutEn: 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
    map: false,
  },
  {
    id: 4,
    headlineDe: 'Fehlt noch',
    headlineEN: 'Is missing',
    aboutDe: 'In meinem Beruf geht es beim Programmieren nicht nur um das Schreiben von Code; es ist eine kreative Form der Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwirklichen. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.',
    aboutEn: 'In my profession, programming isn´t just about writing code; it´s a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.',
    map: false,
  },
];
