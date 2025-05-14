'use client'

import { Hero, ContactsWidget, Header, Footer, ProjectsList, SkillsList } from "@/components";
import { useHome } from "@/hooks";

export default function Home() {
  const { projects, skills, contacts } = useHome();

  return (
    <div>
      <Header />

      <main>
        <ContactsWidget contacts={contacts} />

        <Hero />

        <ProjectsList projects={projects} />

        <SkillsList skills={skills} />
      </main>

      <Footer contacts={contacts} />
    </div>
  );
}
