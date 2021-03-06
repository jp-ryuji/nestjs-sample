import { CompanyLoader } from '@modules/company/company-loader/company.loader'
import { CompanyLoaderModule } from '@modules/company/company-loader/company.loader.module'
import { CompanyModule } from '@modules/company/company.module'
import { PostLoader } from '@modules/post/post-loader/post.loader'
import { PostLoaderModule } from '@modules/post/post-loader/post.loader.module'
import { PostModule } from '@modules/post/post.module'
import { UserModule } from '@modules/user/user.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { graphqlConfig } from './config/graphql.config'
import { typeOrmConfig } from './config/typeorm.config'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [CompanyLoaderModule, PostLoaderModule],
      inject: [CompanyLoader, PostLoader],
      useFactory: (companyLoader: CompanyLoader, postLoader: PostLoader) => ({
        ...graphqlConfig,
        context: () => ({
          companyLoaders: companyLoader.createLoaders(),
          postLoaders: postLoader.createLoaders(),
        }),
      }),
    }),
    UserModule,
    PostModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
