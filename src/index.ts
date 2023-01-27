import { User } from './models/User';

const user = new User({ id: 1, name: 'newer NAME', age: 23456434 });

user.on('save', () => {
  console.log(user);
});

user.save();
