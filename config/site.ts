export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Drowzee",
  description: "This site has a little bit about me!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  
  links: {
    github: "https://github.com/JustAHippo",
    twitter: "https://twitter.com/drowzeedev",
    discord: "https://discordapp.com/users/797192288174342155",
  },
};
