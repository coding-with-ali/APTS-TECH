// /sanity/schemas/contactForm.ts
export default {
  name: "contactForm",
  type: "document",
  title: "contactForm",
  fields: [
    { name: "fullName", type: "string", title: "Full Name", validation: (Rule: any) => Rule.required() },
    { name: "email", type: "string", title: "Email", validation: (Rule: any) => Rule.required() },
    { name: "country", type: "string", title: "Country" },
    { name: "phone", type: "string", title: "Phone Number", validation: (Rule: any) => Rule.required() },
    { name: "companyName", type: "string", title: "Company Name", validation: (Rule: any) => Rule.required() },
    { name: "companyUrl", type: "string", title: "Company URL" },
    { name: "region", type: "string", title: "Region", validation: (Rule: any) => Rule.required() },
    { name: "services", type: "array", title: "Services", of: [{ type: "string" }] },
    { name: "projectDetails", type: "text", title: "Project Details", validation: (Rule: any) => Rule.required() },
    { name: "lookingForJob", type: "string", title: "Looking for Job?" },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      initialValue: () => new Date().toISOString(),
    },
  ],
};
