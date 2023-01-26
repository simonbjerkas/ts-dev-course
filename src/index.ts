import { User } from './models/User';

const user = new User({});

user.on('change', () => {
  console.log('change1');
});
user.on('change', () => {
  console.log('change2');
});
user.on('click', () => {
  console.log('clicked');
});

user.trigger('click');
