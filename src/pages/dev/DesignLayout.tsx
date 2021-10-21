import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";
import { Layout, Section } from "../../layouts";

const pages: { title: string; path: string }[] = [
  { title: "Development", path: "/dev" },
  { title: "Design", path: "/dev/design" },
  { title: "Components", path: "/dev/components" },
];

export const DesignLayout: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  const relevantPages = pages.filter((page) => page.title !== title);

  return (
    <Layout bodyClassName="bg-white" title={title}>
      <Section key="heading" componentName="Heading">
        <h1
          className={classNames(
            "h1",
            "col-start-2 col-span-4",
            "md:col-start-2 md:col-span-6",
            "lg:col-start-2 lg:col-span-8"
          )}
        >
          {title}
        </h1>
        <ul className="col-content content-grid-only">
          {relevantPages.map(({ title, path }) => (
            <li key={title} className="col-span-2">
              <Link to={path} className="ps">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      {children}
    </Layout>
  );
};
