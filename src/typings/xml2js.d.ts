declare module 'xml2js' {
    export function parseString(str: string, callback: (err: any, result: any) => void): void;
  }