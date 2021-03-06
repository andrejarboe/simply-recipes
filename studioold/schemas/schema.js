// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import siteInfo from './siteInfo'
import contact from './contact'
import recipesImage from './recipesImage'
import recipes from './recipes'
import tags from './tags'
import instructions from './instructions'
import ingredients from './ingredients'
import tools from './tools'

import * as plugs from './plugs'
import testing from './testing'

const allPlugs = Object.values(plugs).map((plugs) => {
  return { ...plugs, fields: plugs.fields }
})

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    siteInfo,
    contact,
    recipes,
    recipesImage,
    tags,
    instructions,
    ingredients,
    tools,
    testing,
  ]),
})
