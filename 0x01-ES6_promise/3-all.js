import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();
  return Promise.all([upload, create])
    .then((results) => {
      console.log(results[0].body, results[1].firstName, results[1].lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
