'use client';

import { Hero, ContactsWidget, Header, Footer, ProjectsList, SkillsList, CompanyExperience } from "@/components";
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
      </main>

      <Footer contacts={contacts} />
    </div>
  );
}
