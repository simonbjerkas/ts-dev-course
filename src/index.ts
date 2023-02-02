import { MatchReader } from './MatchReader';
import { OutputAnalysis } from './OutputAnalysis';

const matchReader = MatchReader.fromCsv('football.csv');
const outputAnalysis = OutputAnalysis.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
outputAnalysis.buildAndPrintReport(matchReader.matches);
