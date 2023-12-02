import type { Schema, Attribute } from '@strapi/strapi';

export interface FeaturedskillsFeatuedSkillsCard extends Schema.Component {
  collectionName: 'components_featuredskills_featued_skills_cards';
  info: {
    displayName: 'FeatuedSkills Card';
  };
  attributes: {
    title: Attribute.String;
    skills: Attribute.Component<'global.badge', true>;
  };
}

export interface FeaturedskillsSkillComponent extends Schema.Component {
  collectionName: 'components_featuredskills_skill_components';
  info: {
    displayName: 'FeaturedSkill Component';
    description: '';
  };
  attributes: {
    sectionHeader: Attribute.String;
    skillsArray: Attribute.Component<
      'featuredskills.featued-skills-card',
      true
    >;
  };
}

export interface GlobalBadge extends Schema.Component {
  collectionName: 'components_global_badges';
  info: {
    displayName: 'Badge';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface HeaderHeaderComponent extends Schema.Component {
  collectionName: 'components_header_header_components';
  info: {
    displayName: 'Header Component';
    description: '';
  };
  attributes: {
    NavLinks: Attribute.Component<'header.nav-links', true>;
    DarkMode: Attribute.Boolean & Attribute.DefaultTo<false>;
    sectionHeader: Attribute.String;
    ComponentName: Attribute.String;
  };
}

export interface HeaderLogo extends Schema.Component {
  collectionName: 'components_header_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
  };
}

export interface HeaderNavLinks extends Schema.Component {
  collectionName: 'components_header_nav_links';
  info: {
    displayName: 'Nav Links';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface HeroHeroComponent extends Schema.Component {
  collectionName: 'components_hero_hero_components';
  info: {
    displayName: 'Hero Component';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    topSkills: Attribute.Component<'global.badge', true>;
    sectionHeader: Attribute.String;
    ComponentName: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'featuredskills.featued-skills-card': FeaturedskillsFeatuedSkillsCard;
      'featuredskills.skill-component': FeaturedskillsSkillComponent;
      'global.badge': GlobalBadge;
      'header.header-component': HeaderHeaderComponent;
      'header.logo': HeaderLogo;
      'header.nav-links': HeaderNavLinks;
      'hero.hero-component': HeroHeroComponent;
    }
  }
}
