import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { OutputAnalysis } from './OutputAnalysis';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTarget/ConsoleReport';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const outputAnalysis = new OutputAnalysis(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

outputAnalysis.buildAndPrintReport(matchReader.matches);
