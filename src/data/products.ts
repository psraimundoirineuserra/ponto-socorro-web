export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  namePt: string;
  category: 'textil' | 'instrumento' | 'libro' | 'star';
  price: number;
  image: string;
  description: string;
  requiresMeasurement: boolean;
}

export const products: Product[] = [
  { id: 'farda-blanca', slug: 'farda-blanca', name: 'Farda Blanca', nameEn: 'White Farda', namePt: 'Farda Branca', category: 'textil', price: 150, image: '/images/farda-blanca.svg', description: 'Farda tradicional blanca de lino fino', requiresMeasurement: true },
  { id: 'farda-azul', slug: 'farda-azul', name: 'Farda Azul', nameEn: 'Blue Farda', namePt: 'Farda Azul', category: 'textil', price: 150, image: '/images/farda-azul.svg', description: 'Farda tradicional azul de lino fino', requiresMeasurement: true },
  { id: 'farda-negra', slug: 'farda-negra', name: 'Farda Negra', nameEn: 'Black Farda', namePt: 'Farda Negra', category: 'textil', price: 150, image: '/images/farda-negra.svg', description: 'Farda tradicional negra de lino fino', requiresMeasurement: true },
  { id: 'kuripe-curupira', slug: 'kuripe-curupira', name: 'Kuripe Curupira', nameEn: 'Curupira Kuripe', namePt: 'Kuripe Curupira', category: 'instrumento', price: 45, image: '/images/maraca.svg', description: 'Kuripe artesanal tallado en madera', requiresMeasurement: false },
  { id: 'rapé-tapir', slug: 'rape-tapir', name: 'Rapé Tapir', nameEn: 'Tapir Rapé', namePt: 'Rapé Tapir', category: 'instrumento', price: 35, image: '/images/maraca.svg', description: 'Rapé tradicional de la tradición Tukano', requiresMeasurement: false },
  { id: 'himnario-impreso', slug: 'himnario-impreso', name: 'Himnario Impreso', nameEn: 'Printed Hymnal', namePt: 'Hinário Impresso', category: 'libro', price: 45, image: '/images/himnario.svg', description: 'Colección completa de himnos en español', requiresMeasurement: false },
  { id: 'estrella-grado-1', slug: 'estrella-grado-1', name: 'Estrella Grado 1', nameEn: 'Degree Star 1', namePt: 'Estrela Grau 1', category: 'star', price: 25, image: '/images/estrella.svg', description: 'Insignia del primer grado de la comunidad', requiresMeasurement: false },
  { id: 'estrella-grado-2', slug: 'estrella-grado-2', name: 'Estrella Grado 2', nameEn: 'Degree Star 2', namePt: 'Estrela Grau 2', category: 'star', price: 30, image: '/images/estrella.svg', description: 'Insignia del segundo grado de la comunidad', requiresMeasurement: false },
  { id: 'estrella-grado-3', slug: 'estrella-grado-3', name: 'Estrella Grado 3', nameEn: 'Degree Star 3', namePt: 'Estrela Grau 3', category: 'star', price: 35, image: '/images/estrella.svg', description: 'Insignia del tercer grado de la comunidad', requiresMeasurement: false },
  { id: 'maraca-sagrada', slug: 'maraca-sagrada', name: 'Maraca Sagrada', nameEn: 'Sacred Maraca', namePt: 'Maraca Sagrada', category: 'instrumento', price: 65, image: '/images/maraca.svg', description: 'Maraca ceremonial con símbolos ancestrales', requiresMeasurement: false },
];

export function getProductsByCategory(category: string): Product[] {
  return category === 'all'
    ? products
    : products.filter(p => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
