export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "date", type: "datetime" },
    { name: "thumbnail", type: "image" },
    { name: "author", type: "reference", to: [{ type: "author" }] },
    { name: "content", type: "array", of: [{ type: "block" }] },
  ],
};
