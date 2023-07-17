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
import flutter from "./flutter";
import dart from "./dart";
import nestjs from "./nestjs";
import html from "./html";
import react from "./react";
import user from "./user";
import post from "./post";
import contact from "./contact";
import work from "./work";

export default [
  user,
  post,
  pageInfo,
  expreience,
  project,
  skill,
  social,
  resume,
  learn,
  nextjs,
  categories,
  flutter,
  dart,
  nestjs,
  html,
  react,
  contact,
  work,
];
