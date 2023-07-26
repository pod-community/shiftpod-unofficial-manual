import lume from "lume/mod.ts";
import notes from "./mod.ts";
import jsx from "lume/plugins/jsx.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  location: new URL("https://pod-community.github.io/shiftpod-unofficial-manual/"),
});
site.ignore("README.md", "CHANGELOG.md", "node_modules");
site.use(notes());
site.use(jsx());
site.use(sitemap());

export default site;
