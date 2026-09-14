import type { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { join } from 'path'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

export function getGraphQLConfig(
  configService: ConfigService
): ApolloDriverConfig {
  return {
    graphiql: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    path: configService.getOrThrow('GRAPHQL_PREFIX'),
    autoSchemaFile: process.env.IS_VERCEL === '1'
      ? true
      : join(process.cwd(), 'src/core/graphql/schema.gql'),
    sortSchema: true,
    introspection: true,
    context: ({ req, res }: { req: Request, res: Response }) => ({ req, res })
  }
}
