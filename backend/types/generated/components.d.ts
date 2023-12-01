import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navbar.logo': NavbarLogo;
      'navbar.nav-links': NavbarNavLinks;
      'navbar.navbar': NavbarNavbar;
    }
  }
}
