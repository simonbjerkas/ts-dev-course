import { OutputTarget } from '../OutputAnalysis';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
