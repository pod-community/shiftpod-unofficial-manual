import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import wiki from "https://deno.land/x/lume_theme_simple_wiki@v0.1.0/mod.ts";

const site = lume();
site.use(wiki());
site.use(jsx());

export default site;
