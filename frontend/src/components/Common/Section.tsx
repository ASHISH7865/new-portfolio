import React, { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children,className, ...rest }) => {
  return (
    <section id={id} className={`lg:w-[80%] w-full m-auto mb-5 ${className}`} {...rest}>
      {children}
    </section>
  );
};

export default Section;
