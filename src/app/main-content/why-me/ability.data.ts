export interface Ability {
  id: number;
  headlineKey: string;
  aboutKey: string;
  icon: string;
  iconClass: string; 
  map: boolean;
}

export const ABILITIES: Ability[] = [
  {
    id: 1,
    headlineKey: 'WHY_ME_IDEA',
    aboutKey: 'WHY_ME_IDEA_TEXT',
    icon: 'wm-idea-default.svg',
    iconClass: 'img-idea',
    map: false,
  },
  {
    id: 2,
    headlineKey: 'WHY_ME_VIEW',
    aboutKey: 'WHY_ME_VIEW_TEXT',
    icon: 'wm-view-default.svg',
    iconClass: 'img-view',
    map: false,
  },
  {
    id: 3,
    headlineKey: 'WHY_ME_REMOTE',
    aboutKey: 'WHY_ME_REMOTE_TEXT',
    icon: 'wm-remote-default.svg',
    iconClass: 'img-remote',
    map: false,
  },
  {
    id: 4,
    headlineKey: 'WHY_ME_LOCATED',
    aboutKey: 'WHY_ME_LOCATED_TEXT',
    icon: 'wm-located-default.svg',
    iconClass: 'img-located',
    map: true,
  },
];
