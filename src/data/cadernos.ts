export interface Caderno {
  slug: string;
  name: string;
  nameEn: string;
  namePt: string;
  count: number;
}

export const cadernos: Caderno[] = [
  { slug: 'fundacional', name: 'Himnarios Fundacionales', nameEn: 'Foundational Hymnals', namePt: 'Hinários Fundacionais', count: 15 },
  { slug: 'cura', name: 'Himnos de Cura', nameEn: 'Healing Hymns', namePt: 'Hinos de Cura', count: 12 },
  { slug: 'instrucciones', name: 'Instrucciones', nameEn: 'Instructions', namePt: 'Instruções', count: 8 },
  { slug: 'especial', name: 'Especial', nameEn: 'Special', namePt: 'Especial', count: 5 },
];
