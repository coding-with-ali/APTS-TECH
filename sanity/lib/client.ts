import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "si2ayh8p",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});
