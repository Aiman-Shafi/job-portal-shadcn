import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router";

const faqs = [
  {
    question: "How do I create an account on JobHub?",
    answer:
      'To create an account, click on the "Sign up" button in the top right corner of the homepage. Fill in your details, verify your email, and youre ready to go!',
  },
  {
    question: "Is JobHub free to use?",
    answer:
      "Yes, JobHub is free for job seekers. We offer premium features for employers and recruiters.",
  },
  {
    question: "How often are new jobs posted?",
    answer:
      "New jobs are posted daily. We work with thousands of employers to ensure our job listings are always up-to-date.",
  },
  {
    question: "Can I get notifications for new job postings?",
    answer:
      "You can set up job alerts based on your preferences, and well notify you when relevant positions are posted.",
  },
];

export default function Home() {
  return (
    <>
      <header className="border-b">
        <div className="container flex items-center justify-between py-4 mx-auto">
          <Link href="/" className="text-2xl font-bold">
            JobHub
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline"
            >
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:underline"
            >
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline">
              FAQ
            </Link>
          </nav>
          <div className="space-x-2">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto">
        <section className="py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with top employers and discover exciting career
            opportunities.
          </p>
          <Button size="lg">Start Your Job Search</Button>
        </section>
        <section id="about" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About JobHub</h2>
                <p className="text-muted-foreground mb-6">
                  JobHub is a leading job search platform connecting talented
                  professionals with top employers worldwide. Our mission is to
                  empower job seekers and help businesses find the perfect
                  candidates to drive their success.
                </p>
                <Button>Learn More</Button>
              </div>
              <div className="relative h-[400px]">
                <img
                  src="/placeholder.svg"
                  alt="About JobHub"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <footer className="border-t">
          <div className="container py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-3">For Job Seekers</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Browse Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Career Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Resume Builder
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">For Employers</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Post a Job
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Talent Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} JobHub. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
