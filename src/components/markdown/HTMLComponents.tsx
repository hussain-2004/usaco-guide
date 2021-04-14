import classNames from 'classnames';
import * as React from 'react';
import CodeBlock from './CodeBlock/CodeBlock';

// Note: try to avoid adding inline styles here; rather, use css selectors to target them.
// Otherwise it's really hard to override some of these styles

export const OffsetAnchor = ({ id, ...props }): JSX.Element => (
  <span
    id={id}
    {...props}
    className="absolute"
    style={{ bottom: '60px', height: '2px' }}
  />
);

const table = ({ className, ...props }): JSX.Element => (
  <table
    {...props}
    className={classNames(
      'text-base border-gray-600 no-bottom-margin',
      className
    )}
  />
);
const th = ({ className, ...props }): JSX.Element => (
  <th {...props} className={classNames('border py-1 px-3', className)} />
);
const td = ({ className, ...props }): JSX.Element => (
  <td {...props} className={classNames('border py-1 px-3', className)} />
);
const h1 = ({ id, children, ...props }): JSX.Element => (
  <h1
    {...props}
    className="leading-tight text-4xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis "
  >
    <OffsetAnchor id={id} />
    {children}
  </h1>
);
const h2 = ({ id, children, ...props }): JSX.Element => (
  <h2
    className="leading-tight text-3xl font-bold mb-5 mt-12 text-gray-700 dark:text-dark-high-emphasis relative"
    {...props}
  >
    <OffsetAnchor id={id} />
    {children}
  </h2>
);
const h3 = ({ id, children, ...props }): JSX.Element => (
  <h3 {...props} className="leading-snug text-2xl font-semibold mb-4 mt-8">
    <OffsetAnchor id={id} />
    {children}
  </h3>
);
const h4 = ({ id, children, ...props }): JSX.Element => (
  <h4 {...props} className="leading-none text-xl font-semibold mb-2 mt-6">
    <OffsetAnchor id={id} />
    {children}
  </h4>
);
const p = (props): JSX.Element => <p {...props} />;
const liNestedInOl = ({ children, ...props }): JSX.Element => (
  <li {...props}>
    <div className="flex-1">{children}</div>
  </li>
);
const inlineCode = (props): JSX.Element => (
  <code {...props} className="inline-code" />
);
const a = ({ children, ...props }) => (
  <a
    target={!props.href || props.href.startsWith('#') ? null : '_blank'}
    {...props}
  >
    {children}
  </a>
);
const pre = ({ children, ...props }) => {
  return (
    <pre {...props}>
      <CodeBlock {...children.props} />
    </pre>
  );
};

const HeaderLink: React.FC = props => {
  return (
    <svg
      fill="none"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="inline-block align-middle"
      {...props}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
};

const RAWHTML = ({ children }) => {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
};

const HTMLComponents = {
  table,
  th,
  td,
  h1,
  h2,
  h3,
  h4,
  p,
  'ol.li': liNestedInOl,
  code: inlineCode,
  pre,
  a,
  HeaderLink,
  RAWHTML,
};

export default HTMLComponents;
