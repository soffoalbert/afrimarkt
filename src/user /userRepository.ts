import { Repository } from "../shared/repository";
import { User } from "./user";

const userDB: User[] = [];
let nextUserId: number = 1;

export class UserRepository implements Repository<User> {
  create(user: Omit<User, "id">): User {
    const userTmp: User = {
      id: nextUserId++,
      emailAddress: user.emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
    };
    userDB.push(userTmp);
    return userTmp;
  }
  update(user: Partial<User>): User {
    const foundUser = userDB.find(
      (u: User) => user.id === u.id || user.emailAddress === u.emailAddress
    );
    if (!foundUser) {
      throw Error(
        `User with id ${
          user.id ? user.id : `[No user id provided]`
        } or email address ${
          user.emailAddress
            ? user.emailAddress
            : `[No user email address provided]`
        } not found`
      );
    }
    Object.assign(foundUser, user);
    userDB.push(foundUser);
    return foundUser;
  }

  get(id: number): User {
    const foundUser = userDB.find((u: User) => u.id === id);
    if (!foundUser) {
      throw Error(
        `User with id ${id} : [No user id provided]} 
          } not found`
      );
    }
    return foundUser;
  }
  listAll(): User[] {
    return userDB;
  }
}
