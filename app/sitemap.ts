import type { MetadataRoute } from "next";

const baseUrl = "https://www.solvexengineering.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/about", "/services", "/products", "/industries",
    "/projects", "/leadership", "/contact",
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
