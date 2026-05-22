import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Attribute.JSON & Attribute.CustomField<'plugin::tagsinput.tags'>;
    faqSchema: Attribute.JSON;
  };
}

export interface DetailDetail extends Schema.Component {
  collectionName: 'components_detail_details';
  info: {
    displayName: 'detail';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface BlogFaqBlogFaq extends Schema.Component {
  collectionName: 'components_blog_faq_blog_faqs';
  info: {
    displayName: 'BlogFAQ';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface AuthorAuthor extends Schema.Component {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'Author';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo': SeoSeo;
      'detail.detail': DetailDetail;
      'blog-faq.blog-faq': BlogFaqBlogFaq;
      'author.author': AuthorAuthor;
    }
  }
}
