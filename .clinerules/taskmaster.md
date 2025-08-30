{
  "project": "Miss Scholastic America Website Redesign",
  "referenceURL": "https://missscholasticamerica.com",
  "objective": "Redesign the website for Miss Scholastic America with a more elegant, editorial-style layout inspired by the attached reference mockups, but maintain the purple and white brand theme used throughout our established brand identity.",
  "branding": {
    "colorPalette": {
      "primary": "#A89BD3", 
      "secondary": "#FFFFFF",
      "accent": "#D5C6F6",
      "text": "#333333"
    },
    "fonts": {
      "heading": "Playfair Display, serif",
      "body": "Inter, sans-serif",
      "cursiveAccent": "Dancing Script or Great Vibes (for quotes, testimonials, callouts)"
    },
    "style": "Elegant, empowering, and regal with clean structure and subtle interactive motion"
  },
  "layoutReference": {
    "structureInspiredBy": "Perfection Laboratory website UI",
    "featuresToMimic": [
      "Hero section with editorial-style typography",
      "Side-by-side image and text bundles",
      "Clean contact section layout",
      "Homepage flow with vertical scrolling and modular sections",
      "Microinteractions for button hovers and transitions",
      "Elegant headings with large serif fonts and overlapping elements"
    ],
    "avoid": "Green/tan color scheme from reference (replace with purples and whites)"
  },
  "animation": {
    "library": "Framer Motion",
    "motionGuidelines": [
      {
        "type": "Micro-interaction",
        "duration": "250ms",
        "trigger": "Button hover, card reveal"
      },
      {
        "type": "Page transitions",
        "duration": "350ms",
        "trigger": "Section load, modal open"
      },
      {
        "type": "Complex animation",
        "duration": "600ms",
        "trigger": "Hero text fade-in, crown sparkle animation"
      }
    ],
    "mobileGuidelines": {
      "optimize": true,
      "useTransformOpacity": true,
      "disableOnReducedMotion": true
    }
  },
  "sections": [
    {
      "name": "Hero Banner",
      "elements": [
        "Large Playfair Display heading: 'Empowering the Next Generation of Leaders'",
        "Subheading with elegant serif: 'Miss Scholastic America'",
        "CTA button: 'Apply Now'",
        "Animated crown element with sparkle"
      ]
    },
    {
      "name": "About the Competition",
      "layout": "Image on left, text on right (mobile-stacked)",
      "content": "Details about the virtual scholarship competition, age groups, and mission"
    },
    {
      "name": "How It Works",
      "layout": "Three-step vertical cards with icons and smooth scroll trigger",
      "content": "1. Apply, 2. Compete, 3. Win Scholarship"
    },
    {
      "name": "Testimonials",
      "layout": "Carousel with subtle fade/slide animations",
      "design": "Use cursive font for quotes, elegant star icons"
    },
    {
      "name": "Call to Action",
      "layout": "Full-width banner",
      "background": "#A89BD3",
      "textColor": "#FFFFFF",
      "cta": "Become a Sponsor | Apply Today"
    }
  ],
  "footer": {
    "style": "Centered, elegant with icons",
    "content": [
      "Social Media Icons",
      "Contact Info",
      "Legal Links (Privacy, Terms)"
    ]
  },
  "notes": "Please preserve the current content from missscholasticamerica.com but reframe it into this elegant structure. The entire experience should feel regal, graceful, and intentionally crafted for young leaders and their families."
}
