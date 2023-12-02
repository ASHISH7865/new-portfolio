import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalSkillBadge extends Schema.Component {
  collectionName: 'components_global_skill_badges';
  info: {
    displayName: 'Skill Badge';
    description: '';
  };
  attributes: {
    SkillName: Attribute.String;
    title: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    TopSkills: Attribute.Component<'global.skill-badge', true>;
    ComponentName: Attribute.String;
  };
}

export interface NavbarLogo extends Schema.Component {
  collectionName: 'components_navbar_logos';
  info: {
    displayName: 'Logo';
    icon: 'chartBubble';
  };
  attributes: {
    logo_image: Attribute.Media;
    logo_name: Attribute.String;
  };
}

export interface NavbarNavLinks extends Schema.Component {
  collectionName: 'components_navbar_nav_links';
  info: {
    displayName: 'NavLinks';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Text;
  };
}

export interface NavbarNavbar extends Schema.Component {
  collectionName: 'components_navbar_navbars';
  info: {
    displayName: 'navbar';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Logo: Attribute.Component<'navbar.logo'>;
    Links: Attribute.Component<'navbar.nav-links', true>;
    DarkMode: Attribute.Boolean;
    ComponentName: Attribute.String;
  };
}

export interface SkillGroupedSkill extends Schema.Component {
  collectionName: 'components_skill_grouped_skills';
  info: {
    displayName: 'Grouped Skill';
  };
  attributes: {
    title: Attribute.String;
    skills: Attribute.Component<'global.skill-badge', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.skill-badge': GlobalSkillBadge;
      'hero.hero': HeroHero;
      'navbar.logo': NavbarLogo;
      'navbar.nav-links': NavbarNavLinks;
      'navbar.navbar': NavbarNavbar;
      'skill.grouped-skill': SkillGroupedSkill;
    }
  }
}
