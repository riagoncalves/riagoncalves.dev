import { Hero, Header, Footer, ProjectsList, SkillsList, CompanyExperience, ScrollToTop, ContactForm } from '@/components';
import { JsonLd } from '@/components/JsonLd';
import { experiences, projects, site, skills } from '@/data';
import { Locale } from '@/types';
import { homeStructuredData } from '@/utils/structuredData';

interface Props {
  locale: Locale
}

export const HomePage: React.FC<Props> = ({ locale }) => (
  <div>
    <JsonLd data={homeStructuredData(locale)} />
    <Header locale={locale} />

    <main>
      <Hero locale={locale} name={site.name} company={experiences[0].company} />

      <ProjectsList projects={projects} locale={locale} />

      <CompanyExperience experiences={experiences} locale={locale} />

      <SkillsList skills={skills} locale={locale} />

      <ContactForm locale={locale} />
    </main>

    <Footer />
    <ScrollToTop locale={locale} />
  </div>
);
