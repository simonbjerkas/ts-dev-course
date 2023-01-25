import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTarget/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class OutputAnalysis {
  static winsAnalysisWithHtmlReport(team: string): OutputAnalysis {
    return new OutputAnalysis(
      new WinsAnalysis(team),
      new HtmlReport(team.replace(' ', '').toLowerCase())
    );
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
