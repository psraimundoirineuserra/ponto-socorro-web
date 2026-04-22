export interface Hymn {
  slug: string;
  title: string;
  titleEn: string;
  titlePt: string;
  author: string;
  caderno: string;
  duration: string;
  durationSeconds: number;
}

export const hymns: Hymn[] = [
  { slug: 'gloria-a-ti', title: 'Gloria a Ti Señor', titleEn: 'Glory to You Lord', titlePt: 'Glória a Ti Senhor', author: 'Mestre Irineu', caderno: 'fundacional', duration: '3:45', durationSeconds: 225 },
  { slug: 'voz-del-cielo', title: 'Voz del Cielo', titleEn: 'Voice of Heaven', titlePt: 'Voz do Céu', author: 'Tradicional', caderno: 'cura', duration: '4:12', durationSeconds: 252 },
  { slug: 'llegada-del-espiritu', title: 'Llegada del Espíritu', titleEn: 'Coming of the Spirit', titlePt: 'Chegada do Espírito', author: 'Comunidad', caderno: 'cura', duration: '3:28', durationSeconds: 208 },
  { slug: 'caminho-da-cura', title: 'Caminho da Cura', titleEn: 'Path of Healing', titlePt: 'Caminho da Cura', author: 'Mestre Irineu', caderno: 'cura', duration: '4:55', durationSeconds: 295 },
  { slug: 'oracion-de-la-manana', title: 'Oración de la Mañana', titleEn: 'Morning Prayer', titlePt: 'Oração da Manhã', author: 'Tradicional', caderno: 'instrucciones', duration: '2:30', durationSeconds: 150 },
  { slug: 'fuego-interno', title: 'Fuego Interno', titleEn: 'Internal Fire', titlePt: 'Fogo Interno', author: 'Comunidad', caderno: 'especial', duration: '5:10', durationSeconds: 310 },
  { slug: 'estrella-del-amor', title: 'Estrella del Amor', titleEn: 'Star of Love', titlePt: 'Estrela do Amor', author: 'Mestre Irineu', caderno: 'especial', duration: '3:55', durationSeconds: 235 },
  { slug: ' Bendicion del Agua', title: 'Bendición del Agua', titleEn: 'Blessing of Water', titlePt: 'Abençoada Água', author: 'Tradicional', caderno: 'instrucciones', duration: '4:02', durationSeconds: 242 },
  { slug: 'raices-antiguas', title: 'Raíces Antiguas', titleEn: 'Ancient Roots', titlePt: 'Raízes Antigas', author: 'Comunidad', caderno: 'fundacional', duration: '4:38', durationSeconds: 278 },
  { slug: 'meditacion-sagrada', title: 'Meditación Sagrada', titleEn: 'Sacred Meditation', titlePt: 'Meditação Sagrada', author: 'Mestre Irineu', caderno: 'instrucciones', duration: '6:15', durationSeconds: 375 },
];

export function getHymnsByCaderno(cadernoSlug: string): Hymn[] {
  return cadernoSlug === 'all'
    ? hymns
    : hymns.filter(h => h.caderno === cadernoSlug);
}

export function getHymnBySlug(slug: string): Hymn | undefined {
  return hymns.find(h => h.slug === slug);
}
