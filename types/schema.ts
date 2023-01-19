import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Block = {
  props?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Cta = {
  __typename?: 'CTA';
  blurb?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Context = {
  __typename?: 'Context';
  domain?: Maybe<Domain>;
  page?: Maybe<Page>;
  site?: Maybe<Site>;
};

export type Domain = {
  __typename?: 'Domain';
  site?: Maybe<Site>;
  slug?: Maybe<Scalars['String']>;
};

export type Footer = {
  __typename?: 'Footer';
  cta?: Maybe<Cta>;
};

export type Link = {
  __typename?: 'Link';
  href?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
  title?: Maybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  href?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Menu>>>;
  page?: Maybe<Page>;
  title?: Maybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  blocks?: Maybe<Array<Maybe<Block>>>;
  slug?: Maybe<Scalars['String']>;
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  request?: Maybe<Context>;
};

export type Site = {
  __typename?: 'Site';
  address?: Maybe<Scalars['String']>;
  contact?: Maybe<Page>;
  email?: Maybe<Scalars['String']>;
  footer?: Maybe<Footer>;
  navigation?: Maybe<Array<Maybe<Menu>>>;
  pages?: Maybe<Array<Maybe<Page>>>;
  phone?: Maybe<Scalars['String']>;
  search?: Maybe<Page>;
  slug?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<Array<Maybe<SocialLink>>>;
  title?: Maybe<Scalars['String']>;
};

export type SocialLink = {
  __typename?: 'SocialLink';
  href?: Maybe<Scalars['String']>;
  title?: Maybe<SocialLinks>;
};

export type SocialLinks =
  | 'FACEBOOK'
  | 'INSTAGRAM'
  | 'TWITTER';

export type Theme =
  | 'DARK'
  | 'LIGHT';



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Block: never;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CTA: ResolverTypeWrapper<Cta>;
  Context: ResolverTypeWrapper<Context>;
  Domain: ResolverTypeWrapper<Domain>;
  Footer: ResolverTypeWrapper<Footer>;
  Link: ResolverTypeWrapper<Link>;
  Menu: ResolverTypeWrapper<Menu>;
  Page: ResolverTypeWrapper<Page>;
  Query: ResolverTypeWrapper<{}>;
  Site: ResolverTypeWrapper<Site>;
  SocialLink: ResolverTypeWrapper<SocialLink>;
  SocialLinks: SocialLinks;
  String: ResolverTypeWrapper<Scalars['String']>;
  Theme: Theme;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Block: never;
  Boolean: Scalars['Boolean'];
  CTA: Cta;
  Context: Context;
  Domain: Domain;
  Footer: Footer;
  Link: Link;
  Menu: Menu;
  Page: Page;
  Query: {};
  Site: Site;
  SocialLink: SocialLink;
  String: Scalars['String'];
};

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  props?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CtaResolvers<ContextType = any, ParentType extends ResolversParentTypes['CTA'] = ResolversParentTypes['CTA']> = {
  blurb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['Context'] = ResolversParentTypes['Context']> = {
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DomainResolvers<ContextType = any, ParentType extends ResolversParentTypes['Domain'] = ResolversParentTypes['Domain']> = {
  site?: Resolver<Maybe<ResolversTypes['Site']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FooterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Footer'] = ResolversParentTypes['Footer']> = {
  cta?: Resolver<Maybe<ResolversTypes['CTA']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuResolvers<ContextType = any, ParentType extends ResolversParentTypes['Menu'] = ResolversParentTypes['Menu']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Menu']>>>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Page'] = ResolversParentTypes['Page']> = {
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  theme?: Resolver<Maybe<ResolversTypes['Theme']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  request?: Resolver<Maybe<ResolversTypes['Context']>, ParentType, ContextType>;
};

export type SiteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Site'] = ResolversParentTypes['Site']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  footer?: Resolver<Maybe<ResolversTypes['Footer']>, ParentType, ContextType>;
  navigation?: Resolver<Maybe<Array<Maybe<ResolversTypes['Menu']>>>, ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  search?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialLinks?: Resolver<Maybe<Array<Maybe<ResolversTypes['SocialLink']>>>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialLinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['SocialLink'] = ResolversParentTypes['SocialLink']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['SocialLinks']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Block?: BlockResolvers<ContextType>;
  CTA?: CtaResolvers<ContextType>;
  Context?: ContextResolvers<ContextType>;
  Domain?: DomainResolvers<ContextType>;
  Footer?: FooterResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Menu?: MenuResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Site?: SiteResolvers<ContextType>;
  SocialLink?: SocialLinkResolvers<ContextType>;
};

