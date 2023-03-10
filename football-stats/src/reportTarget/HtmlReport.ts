import fs from 'fs';
import { OutputTarget } from './../OutputAnalysis';

export class HtmlReport implements OutputTarget {
  constructor(public filename: string) {}

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>
          ${report}
        </div>
      </div>
      `;

    fs.writeFileSync(`${this.filename}.html`, html);
  }
}
