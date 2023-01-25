import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { OutputAnalysis } from './OutputAnalysis';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTarget/HtmlReport';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const outputAnalysis = new OutputAnalysis(
  new WinsAnalysis('Man United'),
  new HtmlReport('report')
);

outputAnalysis.buildAndPrintReport(matchReader.matches);
