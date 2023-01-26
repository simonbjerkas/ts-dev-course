import { User } from './models/User';

const user = new User({});

user.set({ name: 'Julia' });

console.log(user.get('name'));
console.log(user.get('age'));
