import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xaayb');
const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(1200);
linkedList.add(-80);
linkedList.add(-10);

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);
linkedList.print();
