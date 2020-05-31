import {
  BaseModel,
  Defaults,
  dso,
  Field,
  FieldType,
  Join,
  Model,
  Where,
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("users")
export class UserModel extends BaseModel {
  id!: number;

  name!: string;

  lastName?: string;

  email?: string;
}
