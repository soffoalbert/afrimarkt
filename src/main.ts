import { User } from "./user /user";
import { UserRepository } from "./user /userRepository";
const repo: UserRepository = new UserRepository();
const user = {
  firstName: "Georges",
  lastName: "Sofo",
  emailAddress: "sofo@gmail.com",
  username: "sofogeorges",
  password: "testpass",
};

const user2 = {
  firstName: "Frank",
  lastName: "Sofo",
  emailAddress: "sofo@gmail.com",
  username: "sofogeorges",
  password: "testpass",
};
const firstStoredUser = repo.create(user);
console.log("firstStoredUser", firstStoredUser);

const secondStoredUser = repo.create(user2);
console.log("secondStoredUser", secondStoredUser);


const updatedUser = repo.update({ emailAddress: "sofo@gmail.com", firstName: "Albert" });
console.log("updatedUser", updatedUser);

const retrievedUser = repo.get(1);
console.log("retrievedUser", retrievedUser);

const listAllUsers = repo.listAll();
console.log("listAllUsers", listAllUsers);
