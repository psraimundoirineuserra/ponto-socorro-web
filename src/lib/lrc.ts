export interface LRCLine {
  time: number;
  text: string;
}

export function parseLRC(lrcContent: string): LRCLine[] {
  const lines = lrcContent.split('\n');
  const parsed: LRCLine[] = [];

  const timeRegex = /\[(\d{2}):(\d{2})\.(\d{2})\]/;

  for (const line of lines) {
    const match = line.match(timeRegex);
    if (match) {
      const minutes = parseInt(match[1], 10);
      const seconds = parseInt(match[2], 10);
      const centiseconds = parseInt(match[3], 10);
      const time = minutes * 60 + seconds + centiseconds / 100;
      const text = line.replace(timeRegex, '').trim();
      parsed.push({ time, text });
    }
  }

  return parsed;
}

export function getCurrentLine(lrcLines: LRCLine[], currentTime: number): number {
  for (let i = lrcLines.length - 1; i >= 0; i--) {
    if (currentTime >= lrcLines[i].time) {
      return i;
    }
  }
  return 0;
}
