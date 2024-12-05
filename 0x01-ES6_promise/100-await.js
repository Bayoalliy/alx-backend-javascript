import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  const result = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    result.photo = photo;
    result.user = user;
  } catch (error) {
    result.photo = null;
    result.user = null;
  }

  return (result);
}
export default asyncUploadUser;
