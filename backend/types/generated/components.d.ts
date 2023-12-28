import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutMeAboutMeInfo extends Schema.Component {
  collectionName: 'components_about_me_about_me_infos';
  info: {
    displayName: 'About Me Info';
  };
  attributes: {
    key: Attribute.String;
    value: Attribute.Text;
  };
}

export interface AboutMeMusicComponent extends Schema.Component {
  collectionName: 'components_about_me_music_components';
  info: {
    displayName: 'Music Component';
  };
  attributes: {
    name: Attribute.String;
    author: Attribute.String;
    image: Attribute.Media;
    audio: Attribute.Media;
    duration: Attribute.Integer;
  };
}

export interface AboutMeValorantInfo extends Schema.Component {
  collectionName: 'components_about_me_valorant_infos';
  info: {
    displayName: 'Valorant Info';
  };
  attributes: {
    title: Attribute.String;
    gameName: Attribute.String;
    image: Attribute.Media;
    overview: Attribute.Text;
    popularity: Attribute.String;
    popularityText: Attribute.String;
    release: Attribute.String;
    releaseText: Attribute.String;
    playingTime: Attribute.String;
    playingTimeText: Attribute.String;
  };
}

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
    ComponentName: Attribute.String;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    link: Attribute.Component<'footer.social-links', true>;
    contactForm: Attribute.Boolean;
    ComponentName: Attribute.String;
  };
}

export interface FooterSocialLinks extends Schema.Component {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social Links';
  };
  attributes: {
    title: Attribute.String;
    socialLink: Attribute.String;
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

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_global_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
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
    description: '';
  };
  attributes: {
    name: Attribute.String;
    link: Attribute.String;
    subNavMenu: Attribute.JSON;
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

export interface ProjectsStack extends Schema.Component {
  collectionName: 'components_projects_stacks';
  info: {
    displayName: 'stack';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ProjectsTechStackTag extends Schema.Component {
  collectionName: 'components_projects_tech_stack_tags';
  info: {
    displayName: 'Tech Stack Tag';
  };
  attributes: {
    name: Attribute.String;
    stack: Attribute.Component<'projects.stack', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-me.about-me-info': AboutMeAboutMeInfo;
      'about-me.music-component': AboutMeMusicComponent;
      'about-me.valorant-info': AboutMeValorantInfo;
      'featuredskills.featued-skills-card': FeaturedskillsFeatuedSkillsCard;
      'featuredskills.skill-component': FeaturedskillsSkillComponent;
      'footer.footer': FooterFooter;
      'footer.social-links': FooterSocialLinks;
      'global.badge': GlobalBadge;
      'global.link': GlobalLink;
      'header.header-component': HeaderHeaderComponent;
      'header.logo': HeaderLogo;
      'header.nav-links': HeaderNavLinks;
      'hero.hero-component': HeroHeroComponent;
      'projects.stack': ProjectsStack;
      'projects.tech-stack-tag': ProjectsTechStackTag;
    }
  }
}
