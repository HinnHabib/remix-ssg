import { MetaFunction } from "@remix-run/react";

// Meta tags for SEO
export const meta: MetaFunction = () => {
  return [
    { title: "About Us - Remix SSG Example" },
    { name: "description", content: "Welcome to Remix SSG App Example!" },
  ];
};

export default function AboutPage() {
  return (
    <div className="container mx-auto prose dark:text-white my-20">
      <h1 className="dark:text-white">About Us</h1>
      <p>This page was build by Remix Run as a static page</p>
    </div>
  );
}
