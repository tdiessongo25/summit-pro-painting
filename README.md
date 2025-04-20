# Summit Pro Painting Website

A modern, responsive website for Summit Pro Painting, a professional painting company based in Colorado Springs, CO, built with Next.js and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with Tailwind CSS & Brand Colors
- Functional Contact & Free Estimate forms (sends email notifications via Resend)
- Server Actions for secure form processing
- Server-side validation using Zod
- Multiple pages including:
  - Home (with Services, Why Us, Testimonials, CTA)
  - Services
  - About Us
  - Gallery
  - Contact
  - Free Estimate
- SEO optimized metadata

## Technologies Used

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Resend (for email handling)
- Zod (for validation)
- React Icons

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- A Resend account and API Key ([resend.com](https://resend.com/))
- A verified domain with Resend (or use `resend.dev` for testing)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd summit-pro-painting
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
    This will install Next.js, React, Tailwind, Resend, Zod, etc.

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory by copying the example:
    ```bash
    cp .env.example .env.local
    ```
    Edit `.env.local` and add your specific values:
    ```env
    NEXT_PUBLIC_COMPANY_NAME="Summit Pro Painting"
    NEXT_PUBLIC_COMPANY_PHONE="214-930-6540"
    NEXT_PUBLIC_COMPANY_EMAIL="your-company-email@example.com" # Email to receive submissions
    NEXT_PUBLIC_COMPANY_LOCATION="Colorado Springs, CO"
    RESEND_API_KEY="re_YOUR_RESEND_API_KEY" # Your actual Resend API key
    ```
    **Important:** The `RESEND_API_KEY` is required for the contact and estimate forms to send emails.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
summit-pro-painting/
├── app/                      # Next.js App Router directory
│   ├── (pages)/              # Route groups for pages
│   │   ├── about/
│   │   ├── contact/
│   │   │   └── actions.ts    # Server Action for contact form
│   │   ├── free-estimate/
│   │   │   └── actions.ts    # Server Action for estimate form
│   │   ├── gallery/
│   │   └── services/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable React components (Header, Footer)
├── public/                   # Static assets (images, fonts)
├── .env.local              # Local environment variables (DO NOT COMMIT)
├── .env.example            # Example environment variables
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## Customization

### Colors

Brand colors (`summit-red`, `summit-teal`, `summit-yellow`) are defined in `tailwind.config.js`.

### Content & Images

- Update text content directly in the page components (`.tsx` files within `app/`).
- Replace placeholder images in `public/images/` and its subdirectories.
- Update testimonials in `app/page.tsx`.
- Ensure company contact details in `.env.local` are correct.

## Deployment

**Recommended: AWS Amplify Hosting**

AWS Amplify Hosting is well-suited for deploying Next.js applications with features like Server Actions.

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket, etc.).
2.  Connect your repository to AWS Amplify Hosting via the AWS Console.
3.  Amplify will typically detect the Next.js build settings automatically.
4.  **Crucially:** Configure the **Environment variables** in the Amplify build settings. Add `RESEND_API_KEY` and `NEXT_PUBLIC_COMPANY_EMAIL` (and any others from `.env.local`) here. **Do not commit your `.env.local` file.**
5.  Deploy the application.
6.  (Optional) Configure a custom domain.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

Summit Pro Painting
- Website: [summitpropainting.com](https://summitpropainting.com)
- Email: info@summitpropainting.com
- Phone: (719) 555-0123
- Location: Colorado Springs, CO 