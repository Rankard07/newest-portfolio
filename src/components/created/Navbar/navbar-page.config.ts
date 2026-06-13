// ============================================
// START - NAVBAR CONFIGURATION
// ============================================

//-----------------------------------------------
// START - PAGE CONFIGURATION
// Add new pages here to automatically show in desktop + mobile nav
//-----------------------------------------------

export interface PageConfig {
  key: string;
  label: string;
}

export const PAGES: PageConfig[] = [
  { key: "home", label: "Home" },
  { key: "project", label: "Project" },
  { key: "contact", label: "Contact" },
  { key: "other", label: "Other" },
];
//-----------------------------------------------
// END - PAGE CONFIGURATION
//-----------------------------------------------

////////////////////////// - DIVIDER - //////////////////////////

//-----------------------------------------------
// START - CONTACT CONFIGURATION (plain data)
// Icons are mapped by label in the component
//-----------------------------------------------
export interface ContactItem {
  label: string;
  href: string;
}

export const DEFAULT_CONTACT_ITEMS: ContactItem[] = [
  { label: "Email", href: "mailto:email@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];
//-----------------------------------------------
// END - CONTACT CONFIGURATION
//-----------------------------------------------

// ============================================
// END - PAGE CONFIGURATION
// ============================================