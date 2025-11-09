// sanity/schemaTypes/application.ts
export default {
  name: "application",
  title: "Applications",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Full Name" },
    { name: "email", type: "string", title: "Email Address" },
    { name: "resumeUrl", type: "url", title: "Resume or LinkedIn URL" },
    { name: "appliedAt", type: "datetime", title: "Applied At" },
  ],
};
