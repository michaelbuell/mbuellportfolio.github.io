# Professional Portfolio - Michael Buell

## What Is This?

A four-page professional portfolio website showcasing my background, skills, work
experience, and development projects. The site includes a Home page with a professional
summary, education, and experience; an About Me page with a personal biography and skill
tags; a Projects page with links to live deployments and GitHub repositories; and a
Contact page with a validated, functional message form.

## Why Does It Exist?

I built this to establish a professional web presence I can point to when pursuing
careers in technology. It serves as a living record of my skills and projects that I
can continue to build on, and it extends beyond the course assignment by functioning as
a genuine tool for career development.

## What Tools Did I Use?

- **VS Code** - primary code editor, chosen for its strong HTML/CSS/JS support and
  integrated Git workflow
- **GitHub** - version control and file management across the project
- **Claude AI** - used to generate, refine, and debug code, particularly for JavaScript
  features outside my prior experience
- **Formspree** - a no-backend form service that routes contact form submissions to my
  email without requiring a server
- **Cloudflare Pages** - hosting and deployment platform, chosen for its automatic
  redeploy on push and clean professional URL

## Live Site

[https://portfolio.mbuell21.workers.dev/](https://portfolio.mbuell21.workers.dev/)

## What Changed from P01 to P02?

Project 01 was the point at which the site's placeholder content was replaced with real
personal information - biography, resume content, skills drawn from work history, and
actual project links. The structure and styling at that stage were functional but minimal,
with no JavaScript, no interactivity, and a basic visual design.

Project 02 introduced the following changes:

**Added**
- Light/dark mode toggle with localStorage persistence
- Fully functional contact form with real-time input validation and Formspree submission
- Downloadable resume button in the hero section
- Hero typing animation cycling through personal descriptors
- Scroll progress bar in the sticky header
- Active section label in the header that updates while scrolling
- Scroll-triggered scrolling gradient background
- Custom 404 error page styled to match the site
- Google Analytics (GA4) across all pages
- Scroll-to-top button

**Improved**
- Complete CSS redesign using custom properties for a consistent design system
- Google Fonts typography (DM Serif Display + DM Sans)
- Card-based layouts with hover animations and elevation effects
- Mobile navigation fixed to prevent layout shifts on small screens
- Section fade-in animations on page load

**Removed**
- All placeholder content and bracketed dummy text
- Flat, unstyled default form elements
