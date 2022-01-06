export default {
  name: "new",
  title: "Recipes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Recipe Title",
      type: "string",
    },
    // {
    //   name: "images",
    //   title: "Images",
    //   type: "array",
    //   of: [{ type: "recipesImage" }],
    // },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Featured",
      name: "featured",
      type: "boolean",
    },
    {
      name: "servings",
      title: "Servings",
      type: "number",
    },
    {
      name: "prepTime",
      title: "Prep Time",
      type: "number",
    },
    {
      name: "cookTime",
      title: "Cook Time",
      type: "number",
    },
  ],
};