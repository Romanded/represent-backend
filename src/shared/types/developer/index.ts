import { registerEnumType } from '@nestjs/graphql';

export enum Skill {
  HTML = "html",
  CSS = "css",
  SCSS = "scss",
  JAVA_SCRIPT = "javaScript",
  TYPE_SCRIPT = "typeScript",
  NODE_JS = "nodeJS",
  VUE = "vue",
  NUXT_JS = "nuxtJS",
  REACT = "react",
  NEXT_JS = "nextJS",
  NEST_JS = "nestJS",
  PRISMA = "prisma",
  GRAPH_QL = "graphQL",
  COCKROACH_DB = "cockroachDB",
  POSTGRE_SQL = "postgreSQL",
  MONGO_DB = "mongoDB",
  REDIS = "redis",
  DOCKER = "docker",
  NGINX = "nginx",
  GIT = "git"
}


registerEnumType(Skill, { name: 'Skill', description: undefined })
