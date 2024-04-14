import React, { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children,className, ...rest }) => {
  return (
    <section id={id} className={` w-full max-w-5xl mx-auto  m-auto mb-5 ${className}`} {...rest}>
      {children}
    </section>
  );
};

export default Section;
