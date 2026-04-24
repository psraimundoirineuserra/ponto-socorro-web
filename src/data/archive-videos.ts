export interface ArchiveVideo {
  id: string;
  youtubeId: string;
  title: string;
  views: number;
  year: string;
  duration: string;
  dimension: 'I' | 'II' | 'III' | 'IV';
  featured: boolean;
  category: 'hinario' | 'homenagem' | 'memoria' | 'oficio' | 'outro';
  source: 'canal' | 'outro';
}

export const archiveVideos: ArchiveVideo[] = [
  // VIDEOS DEL CANAL @pd.raimundononato3780 (Dimension II)
  {
    id: 'academia-mestre-irineu',
    youtubeId: 'vMqyS2UTfKk',
    title: 'Academia do Mestre Irineu - Obedece ao mestre',
    views: 276,
    year: 'hace 2 años',
    duration: '2:04',
    dimension: 'II',
    featured: true,
    category: 'memoria',
    source: 'canal'
  },
  {
    id: 'o-mestre-nos-ensina',
    youtubeId: 'SxSB2DByDnY',
    title: 'O Mestre nós ensina - Hinário O Peregrino',
    views: 511,
    year: 'hace 2 años',
    duration: '1:13',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'caboclo-guerreiro',
    youtubeId: 'cM-205-S-14',
    title: 'Caboclo Guerreiro - Hinário O Peregrino',
    views: 572,
    year: 'hace 2 años',
    duration: '1:34',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'sino-bateu',
    youtubeId: 'L67VnWKolPY',
    title: 'Sino bateu',
    views: 898,
    year: 'hace 3 años',
    duration: '1:08',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'e-meio-dia',
    youtubeId: 'KCW7CS8C8BY',
    title: 'É meio dia',
    views: 451,
    year: 'hace 3 años',
    duration: '1:08',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'bandeira-limpa',
    youtubeId: 'fofP6djEovU',
    title: 'Bandeira limpa',
    views: 523,
    year: 'hace 3 años',
    duration: '3:02',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'hino-padrinho-wilson',
    youtubeId: 'JyJcmJUzMx4',
    title: 'Hino do padrinho Wilson',
    views: 1000,
    year: 'hace 4 años',
    duration: '2:42',
    dimension: 'II',
    featured: true,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'meu-juramidam',
    youtubeId: 'LCDdTtgSiP8',
    title: '42- Meu Juramidam',
    views: 1300,
    year: 'hace 5 años',
    duration: '3:23',
    dimension: 'II',
    featured: true,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'prenda-divina',
    youtubeId: 'D87h3OoNU0I',
    title: '43- Prenda Divina',
    views: 1200,
    year: 'hace 5 años',
    duration: '1:52',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'enxotando-maus-fazejos',
    youtubeId: 'R7hVMx1Gx2s',
    title: 'Enxotando os maus fazejos',
    views: 7000,
    year: 'hace 5 años',
    duration: '2:58',
    dimension: 'II',
    featured: true,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'os-pastorinhos',
    youtubeId: 'nAK4eJY04Z8',
    title: 'Os Pastorinhos',
    views: 1400,
    year: 'hace 5 años',
    duration: '2:57',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'deus-e-meu-pai',
    youtubeId: 'O3t00_pHXHU',
    title: 'Deus é meu pai',
    views: 2300,
    year: 'hace 5 años',
    duration: '1:46',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },
  {
    id: 'amor-no-coracao',
    youtubeId: '0zpiXln22uE',
    title: '38. Amor no Coração (Aconteceu)',
    views: 571,
    year: 'hace 5 años',
    duration: '1:19',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'canal'
  },

  // VIDEOS DE OTRAS FUENTES (Dimension II - Olhar da Floresta)
  {
    id: 'historias-de-papai',
    youtubeId: 'CYlTJPG2vK0',
    title: 'Histórias de Papai – PD Wilson Carneiro',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'memoria',
    source: 'outro'
  },
  {
    id: 'live-centenario-wilson',
    youtubeId: 'rCnyIsR8yoY',
    title: 'Live Centenário do Padrinho Wilson Carneiro',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'homenagem',
    source: 'outro'
  },
  {
    id: 'cura-linha-arrochim',
    youtubeId: 'VvrZBpQ6RJI',
    title: 'Cura – Linha de Arrochim',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'memoria',
    source: 'outro'
  },
  {
    id: 'hinario-chave-ouro',
    youtubeId: 'rw6Qa5Q2bhk',
    title: 'Hinário Chave de Ouro – Pad. Wilson + Nonato',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'outro'
  },
  {
    id: 'pronto-socorro-reportaje',
    youtubeId: 'xpkVctGrVuk',
    title: 'Pronto-Socorro Raimundo Irineu Serra, do Raimundo Nonato',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'memoria',
    source: 'outro'
  },
  {
    id: 'hinario-peregrino-nonato',
    youtubeId: 'nwib8pY9k0I',
    title: 'Hinário O Peregrino – Padrinho Nonato',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'outro'
  },
  {
    id: 'hinario-aconteceu-nonato',
    youtubeId: 'mbCj5xHjUhU',
    title: 'Hinário Aconteceu – Padrinho Nonato',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'hinario',
    source: 'outro'
  },
  {
    id: 'centro-pronto-socorro-ris',
    youtubeId: 'vP57ECXK6mc',
    title: 'Centro e Pronto Socorro de Cura Espiritual R.I.S.',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'memoria',
    source: 'outro'
  },
  {
    id: 'pronto-socorro-acre-2012',
    youtubeId: 'Mbi_gZ_dD_8',
    title: 'PRONTO SOCORRO - ACRE em 18 de julho de 2012',
    views: 0,
    year: '2012',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'memoria',
    source: 'outro'
  },
  {
    id: 'hinos-novos-presidente',
    youtubeId: 'Jw6dAxtm2dQ',
    title: 'Hinos Novos com nosso Presidente',
    views: 0,
    year: 'hace años',
    duration: '?',
    dimension: 'II',
    featured: false,
    category: 'oficio',
    source: 'outro'
  }
];

export function getVideosByDimension(dimension: 'I' | 'II' | 'III' | 'IV'): ArchiveVideo[] {
  return archiveVideos.filter(v => v.dimension === dimension);
}

export function getFeaturedVideos(): ArchiveVideo[] {
  return archiveVideos.filter(v => v.featured);
}

export function getVideoThumbnailUrl(video: ArchiveVideo): string {
  return `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
}

export function getVideoYoutubeUrl(video: ArchiveVideo): string {
  return `https://www.youtube.com/watch?v=${video.youtubeId}`;
}

export function formatViews(views: number): string {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  if (views === 0) {
    return '-';
  }
  return views.toString();
}

export function getVideoCountByDimension(): Record<string, number> {
  return {
    'I': archiveVideos.filter(v => v.dimension === 'I').length,
    'II': archiveVideos.filter(v => v.dimension === 'II').length,
    'III': archiveVideos.filter(v => v.dimension === 'III').length,
    'IV': archiveVideos.filter(v => v.dimension === 'IV').length
  };
}