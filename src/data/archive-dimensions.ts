export interface DimensionItem {
  id: string;
  title: string;
  type: string;
  source: string;
  url: string;
  year?: string;
  views?: number;
  description?: string;
}

export interface Dimension {
  id: 'I' | 'II' | 'III' | 'IV';
  name: string;
  subtitle: string;
  subfilters: { id: string; label: string; count: number }[];
  items: DimensionItem[];
}

export const dimensions: Dimension[] = [
  // ============================================
  // DIM I - O TRONO DO SABER (Artigos, teses, livros)
  // ============================================
  {
    id: 'I',
    name: 'O Trono do Saber',
    subtitle: 'Artigos acadêmicos e teses',
    subfilters: [
      { id: 'artigos', label: 'Artigos', count: 2 },
      { id: 'teses', label: 'Teses', count: 6 },
      { id: 'livros', label: 'Livros', count: 1 }
    ],
    items: [
      // ARTIGOS (2)
      {
        id: 'art-marupiara',
        title: 'As origens de uma casa de cura do Daime: O Pronto Socorro Espiritual Raimundo Irineu Serra (CEPSERIS)',
        type: 'article',
        source: 'Revista Marupiara (UEA)',
        url: 'http://periodicos.uea.edu.br/index.php/marupiara/article/view/1454',
        description: 'Artigo que discute como surgiu o Centro Pronto Socorro Espiritual Raimundo Irineu Serra.'
      },
      {
        id: 'art-kalagatos',
        title: 'Processos de saúde, doença e cura no Santo Daime',
        type: 'article',
        source: 'Revista Kalágatos (UECE)',
        url: 'https://revistas.uece.br/index.php/kalagatos/article/view/13207',
        description: 'Análise dos processos de saúde, doença e cura na tradição do Santo Daime.'
      },
      // TESES (6)
      {
        id: 'tese-usp',
        title: 'Controvérsia pública da ayahuasca no Brasil',
        type: 'thesis',
        source: 'USP / NEIP',
        url: 'http://neip.info/novo/wp-content/uploads/2015/04/antunes_controversia_publica_ayahuasca_brasil_20121.pdf',
        description: 'Tese que contém capítulo sobre CEPSERIS.'
      },
      {
        id: 'tese-antunes-cura',
        title: 'Cura, religião e cultura: uma análise do estatuto das práticas terapêuticas com o uso da ayahuasca no Brasil',
        type: 'thesis',
        source: 'NEIP / Academia.edu',
        url: 'https://www.academia.edu/38367478/Cura_religi%C3%A3o_e_cultura_uma_an%C3%A1lise_do_estatuto_das_pr%C3%A1ticas_terap%C3%AAuticas_com_o_uso_da_ayahuasca_no_Brasil',
        description: 'Etnografía realizada junto ao Centro Pronto Socorro Espiritual.'
      },
      {
        id: 'tese-paper-ufal',
        title: 'Cura, religião e cultura (Paper UFAL)',
        type: 'thesis',
        source: 'UFAL - Anais de evento',
        url: 'https://evento.ufal.br/anaisreaabanne/gts_download/Henrique%20Fernandes%20Antunes%20-%201019450%20-%203221%20-%20corrigido.pdf',
        description: 'Artigo apresentado em evento científico.'
      },
      {
        id: 'tese-ufpr',
        title: 'O despertar da consciência e a reorganização da vida cotidiana: uma etnografia de um pronto socorro do Santo Daime',
        type: 'thesis',
        source: 'UFPR',
        url: 'https://acervodigital.ufpr.br/xmlui/handle/1884/84094',
        description: 'Tese sobre o pronto socorro do Santo Daime.'
      },
      {
        id: 'tese-cetad',
        title: 'As Religiões da Ayahuasca (tese comparativa)',
        type: 'thesis',
        source: 'CETAD Observa (UFBA)',
        url: 'https://cetadobserva.ufba.br/sites/cetadobserva.ufba.br/files/566.pdf',
        description: 'Tese comparativa que inclui seção sobre Pronto Socorro Raimundo Irineu Serra.'
      },
      {
        id: 'tese-censo',
        title: 'Censo comunitário da Colônia Cinco Mil 2022 – Uáquiri',
        type: 'thesis',
        source: 'UFAC - Revista Uáquiri',
        url: 'https://periodicos.ufac.br/index.php/Uaquiri/article/download/6757/4409/25770',
        description: 'Diagnóstico sociogeográfico oficial da Colônia Cinco Mil.'
      },
      // LIVROS/DOCUMENTOS (1)
      {
        id: 'doc-uso-religioso',
        title: 'El uso religioso de la ayahuasca en Brasil',
        type: 'book',
        source: 'CETAD Observa (UFBA)',
        url: 'https://cetadobserva.ufba.br/sites/cetadobserva.ufba.br/files/608.pdf',
        description: 'Texto de síntesis sobre o uso religioso da ayahuasca no Brasil.'
      }
    ]
  },

  // ============================================
  // DIM II - A MEMÓRIA VIVA (Videos)
  // ============================================
  {
    id: 'II',
    name: 'A Memória Viva',
    subtitle: 'Videos do canal e outras fontes',
    subfilters: [
      { id: 'canal', label: 'Canal', count: 18 },
      { id: 'outro', label: 'Outras Fontes', count: 10 },
      { id: 'todos', label: 'Todos', count: 28 }
    ],
    items: [] // Populated from archive-videos.ts via JS
  },

  // ============================================
  // DIM III - OLHAR DA FLORESTA (Blogs, Crónicas, Biografias)
  // ============================================
  {
    id: 'III',
    name: 'Olhar da Floresta',
    subtitle: 'Blogs, crónicas e biografias',
    subfilters: [
      { id: 'blogs', label: 'Blogs', count: 2 },
      { id: 'cronicas', label: 'Crónicas', count: 4 },
      { id: 'biografias', label: 'Biografias', count: 3 }
    ],
    items: [
      // BLOGS (2)
      {
        id: 'blog-ceu-boa-palavra-padrinho-nonato',
        title: 'Padrinho Nonato – Céu da Boa Palavra',
        type: 'blog',
        source: 'ceudaboapalavra.blogspot.com',
        url: 'http://ceudaboapalavra.blogspot.com/2011/02/padrinho-nonato.html',
        description: 'Blog devocional que menciona o Pronto-Socorro Raimundo Irineu Serra.'
      },
      {
        id: 'blog-hinario-linha-arrochim',
        title: 'História do Hinário Linha de Arrochim',
        type: 'blog',
        source: 'ceudaboapalavra.blogspot.com',
        url: 'http://ceudaboapalavra.blogspot.com/2010/08/historia-do-hinario-linha-de-arrochim.html',
        description: 'Historia del hinário de cura Linha de Arrochim.'
      },
      // CRÓNICAS (4)
      {
        id: 'cronica-peregrino',
        title: 'O Peregrino na residência do Padrinho Nonato',
        type: 'chronicle',
        source: 'hinarios.blogspot.com',
        url: 'http://hinarios.blogspot.com/2007/08/o-peregrino-na-residncia-do-padrinho.html',
        description: 'Relato sobre O Peregrino na residência do Padrinho Nonato.'
      },
      {
        id: 'cronica-sao-francisco',
        title: 'São Francisco bem louvado na Vila Carneiro',
        type: 'chronicle',
        source: 'hinarios.blogspot.com',
        url: 'http://hinarios.blogspot.com/2007/09/so-francisco-bem-louvado-na-vila.html',
        description: 'Crónica sobre São Francisco na Vila Carneiro, espaço do CEPSERIS.'
      },
      {
        id: 'art-seminario-santodaime',
        title: 'A Doutrina da Floresta – Diálogo com as autoridades',
        type: 'chronicle',
        source: 'SantoDaime.org',
        url: 'http://www.santodaime.org/site-antigo/institucional/seminario2.htm',
        description: 'Seminário com autoridades que lista o Pronto Socorro Raimundo Irineu Serra.'
      },
      {
        id: 'perfil-julia-moura',
        title: 'Perfil de Julia Moura – Universidade Federal do Acre',
        type: 'chronicle',
        source: 'Academia.edu',
        url: 'https://ufac.academia.edu/JuliaMoura',
        description: 'Perfil de autora com produção acadêmica sobre CEPSERIS.'
      },
      // BIOGRAFIAS (3)
      {
        id: 'bio-wilson-santodaime',
        title: 'Biografía de Padrinho Wilson Carneiro',
        type: 'biography',
        source: 'Santo Daime (Centro de Documentação)',
        url: 'https://www.santodaime.org/site/religiao-da-floresta/discipulos/pad-wilson-carneiro',
        description: 'Biografía oficial de Padrinho Wilson Carneiro da Silva.'
      },
      {
        id: 'bio-wilson-nextohm',
        title: 'Perfil Wilson Carneiro de Souza (nextOHM)',
        type: 'biography',
        source: 'santodaime.nextohm.com',
        url: 'https://santodaime.nextohm.com/Fardados%20Hinarios/Wilson%20Carneiro%20de%20Souza/',
        description: 'Archivo internacional con biography de Wilson Carneiro.'
      },
      {
        id: 'bio-irineu-nextohm',
        title: 'Perfil Mestre Raimundo Irineu Serra (nextOHM)',
        type: 'biography',
        source: 'santodaime.nextohm.com',
        url: 'https://santodaime.nextohm.com/Fardados%20Hinarios/Irineu/',
        description: 'Perfil del fundador Mestre Irineu.'
      }
    ]
  },

  // ============================================
  // DIM IV - A BITÁCORA DIGITAL (Redes sociais)
  // ============================================
  {
    id: 'IV',
    name: 'A Bitácora Digital',
    subtitle: 'Posts de redes sociais',
    subfilters: [
      { id: 'facebook', label: 'Facebook', count: 4 },
      { id: 'instagram', label: 'Instagram', count: 5 }
    ],
    items: [
      // FACEBOOK (4)
      {
        id: 'fb-page-oficial',
        title: 'Página oficial Centro e Pronto Socorro Espiritual Raimundo Irineu Serra',
        type: 'facebook',
        source: 'Facebook',
        url: 'https://www.facebook.com/ProntoSocorrroEspiritual/',
        description: 'Página oficial con posts, fotos y contenido doctrinario.'
      },
      {
        id: 'fb-album-rio-branco',
        title: 'Álbum de fotos Rio Branco',
        type: 'facebook',
        source: 'Facebook',
        url: 'https://www.facebook.com/media/set/?vanity=ProntoSocorrroEspiritual&set=a.401038053374914',
        description: 'Set de fotos del Centro e Pronto Socorro en Rio Branco.'
      },
      {
        id: 'fb-post-calendario-2016',
        title: 'Publicación con calendario de trabajos (2016)',
        type: 'facebook',
        source: 'Facebook',
        url: 'https://www.facebook.com/photo.php?fbid=824441447701237&id=263144607164260&set=a.303224079822979',
        description: 'Post histórico con calendário de trabalhos.'
      },
      {
        id: 'fb-post-doctrinal',
        title: 'Publicación doctrinaria',
        type: 'facebook',
        source: 'Facebook',
        url: 'https://www.facebook.com/ProntoSocorrroEspiritual/posts/694037282984588/',
        description: 'Post con conteúdo doutrinário.'
      },
      // INSTAGRAM (5)
      {
        id: 'ig-profile',
        title: '@ps.raimundoirineuserra',
        type: 'instagram',
        source: 'Instagram',
        url: 'https://www.instagram.com/ps.raimundoirineuserra/',
        description: 'Perfil institucional do Pronto Socorro.'
      },
      {
        id: 'ig-location',
        title: 'Ubicación Centro e Pronto Socorro Espiritual Raimundo Irineu Serra',
        type: 'instagram',
        source: 'Instagram',
        url: 'https://www.instagram.com/explore/locations/1024129008/centro-e-pronto-socorro-espiritual-raimundo-irineu-serra/',
        description: 'Geotag do CEPSERIS.'
      },
      {
        id: 'ig-post-trabalho-cura-2211',
        title: 'Post Trabalho de Cura – 22/11',
        type: 'instagram',
        source: 'Instagram',
        url: 'https://www.instagram.com/p/DROCa3Zji7Q/',
        description: 'Anuncio de trabalho de cura.'
      },
      {
        id: 'ig-reel-daime-tv',
        title: 'Reel Pronto-Socorro Raimundo Irineu Serra (Daime TV)',
        type: 'instagram',
        source: 'Instagram',
        url: 'https://www.instagram.com/reel/DDKwUkpp-7V/',
        description: 'Video reel com informação do CEPSERIS.'
      },
      {
        id: 'ig-reel-trabalho-cura',
        title: 'Reel sobre trabalho de cura',
        type: 'instagram',
        source: 'Instagram',
        url: 'https://www.instagram.com/reel/DDF96uHCdkK/',
        description: 'Reel sobre trabalho de cura.'
      }
    ]
  }
];

// Helper functions
export function getDimensionItems(dimensionId: 'I' | 'II' | 'III' | 'IV'): DimensionItem[] {
  const dim = dimensions.find(d => d.id === dimensionId);
  return dim ? dim.items : [];
}

export function getSubfilters(dimensionId: 'I' | 'II' | 'III' | 'IV') {
  const dim = dimensions.find(d => d.id === dimensionId);
  return dim ? dim.subfilters : [];
}

export function getDimensionById(id: 'I' | 'II' | 'III' | 'IV'): Dimension | undefined {
  return dimensions.find(d => d.id === id);
}

// Count totals for each dimension
export function getDimensionCounts(): Record<string, number> {
  return {
    'I': dimensions.find(d => d.id === 'I')?.items.length || 0,
    'II': 28, // Videos from archive-videos.ts
    'III': dimensions.find(d => d.id === 'III')?.items.length || 0,
    'IV': dimensions.find(d => d.id === 'IV')?.items.length || 0
  };
}