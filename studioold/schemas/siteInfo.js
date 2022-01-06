export default {
  name: "siteInfo",
  title: "Website Information",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company Name",
      type: "string",
    },
    {
      name: "websiteDescription",
      title: "Website Description for SEO",
      type: "text",
    },
    //contact details
    {
        name: "contactDetails",
        title: "Contact Details",
        type: "array",
        of: [
            {type: 'contact'}
        ],
    }
  ],
}
