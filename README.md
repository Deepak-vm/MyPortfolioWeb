# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring a card-based design with a cyan/blue color scheme.

## Features

- Responsive design with mobile menu
- Smooth scroll navigation
- Card-based sections with consistent cyan/blue color scheme
- Contact form with EmailJS integration
- Skills showcase and project gallery

## Setup & Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd MyPortfolioWeb
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up EmailJS for Contact Form
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service (Gmail, Outlook, etc.)
   - Create an email template with variables: `from_name`, `from_email`, and `message`
   - Get your User ID from the EmailJS dashboard
   - Replace placeholders in these files:
     - `src/main.jsx`: Replace "your_emailjs_user_id" with your actual User ID
     - `src/components/Contact.jsx`: Replace "service_portfolio" with your actual Service ID
     - `src/components/Contact.jsx`: Replace "template_portfolio" with your actual Template ID
     - `src/components/Contact.jsx`: Replace "your_emailjs_user_id" again with your User ID

4. Run development server

   ```bash
   npm run dev
   ```

5. Build for production

   ```bash
   npm run build
   ```

## Structure

- **Navbar**: Navigation with smooth scrolling and mobile-responsive menu
- **Hero**: Introduction and call-to-action
- **Skills**: Card-based skills showcase
- **Projects**: Featured projects with descriptions and links
- **Contact**: Functional contact form with EmailJS integration
- **Footer**: Links and copyright information

## Technologies Used

- React
- Vite
- Tailwind CSS
- EmailJS
- FontAwesome icons
