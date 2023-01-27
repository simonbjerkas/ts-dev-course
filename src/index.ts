import { User } from './models/User';

const user = new User({ name: 'newRecord', age: 0 });

const name = user.get('name');

console.log(name);
