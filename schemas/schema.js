// // First, we must import the schema creator
// import createSchema from "part:@sanity/base/schema-creator";

// // Then import schema types from any plugins that might expose them
// import schemaTypes from "all:part:@sanity/base/schema-type";

// // We import object and document schemas
import expreience from "./expreience";
import project from "./project";
import skill from "./skill";
import social from "./social";
import pageInfo from "./pageInfo";
import resume from "./resume";
import learn from "./learn";
import nextjs from "./nextjs";
import categories from "./categories";

// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   name: "default",
//   types: schemaTypes.concat([
//     pageInfo,
//     expreience,
//     project,
//     skill,
//     social,
//     resume,
//   ]),
// });
export default [
  pageInfo,
  expreience,
  project,
  skill,
  social,
  resume,
  learn,
  nextjs,
  categories,
];
