import aboutContent from './pages/about.json';
import classesContent from './pages/classes.json';
import contactContent from './pages/contact.json';
import homeContent from './pages/home.json';
import privateSessionsContent from './pages/private-sessions.json';
import settingsContent from './settings.json';

interface SocialLink {
  label: string;
  url: string;
}

interface SettingsContent {
  name: string;
  tagline: string;
  teacherName: string;
  email: string;
  location: string;
  socials: SocialLink[];
}

export const settings = settingsContent as SettingsContent;
export const homePage = homeContent;
export const aboutPage = aboutContent;
export const classesPage = classesContent;
export const privateSessionsPage = privateSessionsContent;
export const contactPage = contactContent;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Classes', href: '/classes/' },
  { label: 'Private Sessions', href: '/private-sessions/' },
  { label: 'Contact', href: '/contact/' },
];
