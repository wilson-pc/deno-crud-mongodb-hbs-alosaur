import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  Req,
  QueryParam,
  View,
} from "https://deno.land/x/alosaur/src/mod.ts";
import { Handlebars } from "https://deno.land/x/handlebars/mod.ts";
import { UserService } from "../../services/user.service.ts";
import { UserModel } from "../../models/user.ts";

// First, create instance of Handlebars

const handle = new Handlebars();

@Controller()
export class HomeController {
  constructor(private service: UserService) {}

  @Get()
  async home() {
    let users = await this.service.getAll();
    return View("index", { users: users });
  }
  @Get("create")
  async create() {
    return View("create", {state:false  });
  }

  @Get("update/:id")
  async update(@Param("id") id: string) {
    let ss=await this.service.getOne(id);
    return View("update", {user:ss,state:false  });
  }

  @Post("update/:id")
  async updateUser(@Param("id") id: string,@Body() data: UserModel) {
    let ss=await this.service.update(id,data);

    return View("update", {user:ss,state:true  });
  }

  @Post("create")
  async createUser(@Body() data: UserModel) {
    let created=await this.service.create(data);
    return View("create",{state:true});
  
  }

  
  @Delete("delete/:id")
  async delete(@Param("id") id: string) {
    
    return await this.service.delete(id);
  //  let created=await this.service.create(data);
  
  
  }
}
