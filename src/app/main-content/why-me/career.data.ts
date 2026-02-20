export interface CareerEntry {
  id: number;
  titleKey: string;
  pointsKeys: string[];
}

export const CAREER_ENTRIES: CareerEntry[] = [
  {
    id: 1,
    titleKey: 'CAREER_ENTRY_1_TITLE',
    pointsKeys: [
      'CAREER_ENTRY_1_POINT_1',
      'CAREER_ENTRY_1_POINT_2',
      'CAREER_ENTRY_1_POINT_3',
    ],
  },
  {
    id: 2,
    titleKey: 'CAREER_ENTRY_2_TITLE',
    pointsKeys: [
      'CAREER_ENTRY_2_POINT_1',
      'CAREER_ENTRY_2_POINT_2',
      'CAREER_ENTRY_2_POINT_3',
    ],
  },
  {
    id: 3,
    titleKey: 'CAREER_ENTRY_3_TITLE',
    pointsKeys: [
      'CAREER_ENTRY_3_POINT_1',
      'CAREER_ENTRY_3_POINT_2',
      'CAREER_ENTRY_3_POINT_3',
    ],
  },
];
