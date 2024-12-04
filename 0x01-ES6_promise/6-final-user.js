import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {                                                      return Promise
  .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  .then((res) => res.map(x => ({status: 200, value: x})))
  .catch((err) => err.map(x => ({status: 'rejected', value: x})))
}
