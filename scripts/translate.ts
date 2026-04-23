import fs from 'fs';
import path from 'path';

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || '';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

const MODEL = 'deepseek-chat';

async function translateText(text: string, targetLang: 'es' | 'en'): Promise<string> {
  const targetLangName = targetLang === 'es' ? 'español' : 'inglés';

  const prompt = `Traduce el siguiente contenido de português a ${targetLangName}.
IMPORTANTE:
- Mantén el formato HTML si existe
- Preserve términos culturales como "Padrinho", "Daime", "Fardado", "CEFLUWCS"
- NO traduzcas nombres propios
- Devuelve SOLO el texto traducido, sin explicaciones

Contenido:
${text}`;

  const response = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: 'Eres un traductor profesional de portugués a español/inglés especializado en contenido espiritual y cultural brasileiro.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 4000
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

async function translateJSONFile(inputPath: string, outputPath: string, targetLang: 'es' | 'en') {
  console.log(`Translating ${inputPath} to ${targetLang}...`);

  const content = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  const translated = JSON.stringify(content, null, 2);

  try {
    const translatedContent = await translateText(translated, targetLang);
    fs.writeFileSync(outputPath, translatedContent);
    console.log(`  ✓ Created ${outputPath}`);
  } catch (error) {
    console.error(`  ✗ Error translating ${inputPath}:`, error);
  }
}

async function main() {
  const contentDir = './src/i18n/content';

  const pages = ['foundation', 'archive', 'home', 'shop'];

  for (const page of pages) {
    const ptPath = path.join(contentDir, page, 'content-pt.json');

    if (fs.existsSync(ptPath)) {
      await translateJSONFile(ptPath, path.join(contentDir, page, 'content-es.json'), 'es');
      await translateJSONFile(ptPath, path.join(contentDir, page, 'content-en.json'), 'en');
    } else {
      console.log(`  ○ Skipping ${page} - no content-pt.json found`);
    }
  }

  console.log('\n✓ Translation complete!');
}

main().catch(console.error);