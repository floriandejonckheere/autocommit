export type Config = {
  logLevel: 'debug' | 'error' | 'info' | 'warn';
  style: 'simple' | 'detailed';
  typed: boolean;
  scoped: boolean;
  technical: boolean;
  tense: 'present' | 'past';
  emoji: boolean;
}