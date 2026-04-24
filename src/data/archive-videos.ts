export interface ArchiveVideo {
  id: string;
  youtubeId: string;
  title: string;
  views: number;
  year: string;
  duration: string;
  dimension: 'I' | 'II' | 'III' | 'IV';
  featured: boolean;
  category: 'hinario' | 'homenagem' | 'memoria' | 'oficio';
}

export const archiveVideos: ArchiveVideo[] = [
  {
    id: 'academia-mestre-irineu',
    youtubeId: 'vMqyS2UTfKk',
    title: 'Academia do Mestre Irineu - Obedece ao mestre',
    views: 276,
    year: 'hace 2 años',
    duration: '2:04',
    dimension: 'II',
    featured: true,
    category: 'memoria'
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
    category: 'hinario'
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
    category: 'hinario'
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
    category: 'hinario'
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
    category: 'hinario'
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
    category: 'hinario'
  },
  {
    id: 'lembranca-ceu-parana',
    youtubeId: 'Na4Rhm2wl-8',
    title: 'Lembrança Céu do Paraná',
    views: 663,
    year: 'hace 4 años',
    duration: '1:17',
    dimension: 'III',
    featured: false,
    category: 'memoria'
  },
  {
    id: 'limpando-maracuja',
    youtubeId: 'I8dpdJGzODI',
    title: 'limpando maracujá e maxixe peruano!',
    views: 217,
    year: 'hace 4 años',
    duration: '2:17',
    dimension: 'III',
    featured: false,
    category: 'memoria'
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
    category: 'hinario'
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
    category: 'hinario'
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
    category: 'hinario'
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
    category: 'hinario'
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
    category: 'hinario'
  },
  {
    id: 'centenario-vo-wilson',
    youtubeId: 'swsy42l9Yg4',
    title: 'Comemoração Centenário Vô Wilson',
    views: 3500,
    year: 'hace 5 años',
    duration: '11:04',
    dimension: 'III',
    featured: true,
    category: 'homenagem'
  },
  {
    id: 'homenagem-wilson-carneiro',
    youtubeId: 'SMo8SX02erE',
    title: 'Homenagem ao Padrinho Wilson Carneiro',
    views: 799,
    year: 'hace 5 años',
    duration: '2:27',
    dimension: 'III',
    featured: false,
    category: 'homenagem'
  },
  {
    id: 'homenagem-wilson-centenario',
    youtubeId: 'wXo3InKr_DI',
    title: 'Homenagem Padrinho Wilson Centenário',
    views: 848,
    year: 'hace 5 años',
    duration: '3:10',
    dimension: 'III',
    featured: false,
    category: 'homenagem'
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
    category: 'hinario'
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
    category: 'hinario'
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
  return views.toString();
}