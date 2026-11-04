export const scrollTo = (elementId: string) => {
  return () => {
    const element: HTMLElement | null = document.getElementById(elementId);

    if (element !== null) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
};

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
