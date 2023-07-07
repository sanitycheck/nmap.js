import { document } from './nmap';
import { parseString } from 'xml2js';


function parseXml(xml: string): document | null {
    let scan: document|null = null;
    parseString(
      xml, { mergeAttrs: true}, (error: Error | null, result: any) => {
        if (error) {
          return null;
        }
        scan = result;
      }
    );
    return scan;
}

export function NmapParser(xml: string): document | null {
    const parsed = parseXml(xml);
    if (!parsed) {
        return null;
    }
    return parsed;
}