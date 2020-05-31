import {
  App,
  ViewRenderConfig,
} from "https://deno.land/x/alosaur/src/mod.ts";
import { Handlebars } from "https://deno.land/x/handlebars@v0.2.2/mod.ts";
import { UserArea } from "./areas/user/user.area.ts";
import { HomeArea } from "./areas/home/home.area.ts";

const app = new App({
  areas: [UserArea, HomeArea],
});

const viewPath = `${Deno.cwd()}/views`;

const handle = new Handlebars({
  baseDir: viewPath,
  extname: ".hbs",
  layoutsDir: "layouts/",
  partialsDir: "partials/",
  defaultLayout: "main",
  helpers: undefined,
  compilerOptions: undefined,
});

app.useViewRender({
  type: "handlebars",
  basePath: viewPath,
  getBody: async (path: string, model: any, config: ViewRenderConfig) =>
    await handle.renderView(path, model),
});
app.listen();
