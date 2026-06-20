'use client';

import { Hero, ContactsWidget, Header, Footer, ProjectsList, SkillsList, CompanyExperience, ScrollToTop, ContactForm } from "@/components";
import { useHome } from "@/hooks";

export default function Home() {
  const { projects, skills, contacts, experiences } = useHome();

  return (
    <div>
      <Header />

      <main>
        <ContactsWidget contacts={contacts} />

        <Hero />

        <ProjectsList projects={projects} />

        <CompanyExperience experiences={experiences} />

        <SkillsList skills={skills} />

        <ContactForm />
      </main>

      <Footer contacts={contacts} />
      <ScrollToTop />
    </div>
  );
}
