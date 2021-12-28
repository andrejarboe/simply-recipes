export default {
  name: "recipes",
  title: "Recipes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Recipe Title",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "recipesImage" }],
    },
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
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tags" } }],
    },
    {
      name: "recipeInstructions",
      title: "Recipe Instructions",
      type: "array",
      of: [{ type: "instructions" }],
    },
    {
      name: "recipeIngredients",
      title: "Recipe Ingredients",
      type: "array",
      of: [{ type: "ingredients" }],
    },
    {
      name: "recipeTools",
      title: "Recipe Tools",
      type: "array",
      of: [{ type: "tools" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
  ],
}
