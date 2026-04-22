import { atom } from 'nanostores';

export interface Hymn {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  titlePt?: string;
  author: string;
  caderno: string;
  duration: number;
  audioUrl?: string;
  lrcContent?: string;
}

export const currentHymn = atom<Hymn | null>(null);
export const isPlaying = atom<boolean>(false);
export const currentTime = atom<number>(0);
export const duration = atom<number>(0);
export const volume = atom<number>(0.8);

export function playHymn(hymn: Hymn) {
  currentHymn.set(hymn);
  isPlaying.set(true);
}

export function pausePlayback() {
  isPlaying.set(false);
}

export function togglePlayback() {
  isPlaying.set(!isPlaying.get());
}

export function setCurrentTime(time: number) {
  currentTime.set(time);
}

export function setVolume(vol: number) {
  volume.set(Math.max(0, Math.min(1, vol)));
}
