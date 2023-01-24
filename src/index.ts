import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Bac');

const numSorter = new Sorter(numbersCollection);
const strSorter = new Sorter(charactersCollection);
numSorter.sort();
strSorter.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
