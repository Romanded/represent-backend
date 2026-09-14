import { registerEnumType } from '@nestjs/graphql';

export enum Skill {
  html,
  css,
  scss,
  javaScript,
  typeScript,
  nodeJS,
  vue,
  nuxtJS,
  react,
  nextJS,
  nestJS,
  prisma,
  graphQL,
  cockroachDB,
  postgreSQL,
  mongoDB,
  redis,
  docker,
  nginx,
  git
}


registerEnumType(Skill, { name: 'Skill', description: undefined })
