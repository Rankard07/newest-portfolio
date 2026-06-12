// ============================================
// START - PAGE CONFIGURATION
// Add new pages here to automatically show in desktop + mobile nav
// ============================================

//-----------------------------------------------
// START - INTERFACES
//-----------------------------------------------

export interface PageConfig {
  key: string;
  label: string;
}

//-----------------------------------------------
// END - INTERFACES
//-----------------------------------------------

////////////////////////// - DIVIDER - //////////////////////////

//-----------------------------------------------
// START - CONSTANTS
//-----------------------------------------------

export const PAGES: PageConfig[] = [
  { key: "home", label: "Home" },
  { key: "project", label: "Project" },
  { key: "contact", label: "Contact" },
  { key: "other", label: "Other" },
];

//-----------------------------------------------
// END - CONSTANTS
//-----------------------------------------------

// ============================================
// END - PAGE CONFIGURATION
// ============================================