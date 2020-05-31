import { UserModel } from "../models/user.ts";
import { db } from "../db.config.ts";

const users = db.collection("users");

export class UserService {
  async getAll(): Promise<UserModel[]> {
    return await users.find();
  }
  async getOne(id: string): Promise<UserModel> {
    return await users.findOne({ _id: { "$oid": id } });
  }
  async create(user: UserModel) {
    return await users.insertOne(user);
  }
  async update(id: string, user: UserModel) {
    return await users.updateOne(
      { _id: { "$oid": id } },
      user,
    );
  }
  async delete(id: string) {
    console.log("d3e", id);
    return await users.deleteOne({ _id: { "$oid": id } }).catch((erro) => {
      console.log(erro);
    });
  }
}
