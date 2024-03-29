import { createContext, useContext } from 'react';

const LevelContext = createContext(0);

function Heading(
  props: {
    children: JSX.Element | string;
  }
) {
  const level = useContext(LevelContext);

  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');

    case 1:
      return <h1>{props.children}</h1>;

    case 2:
      return <h2>{props.children}</h2>;

    case 3:
      return <h3>{props.children}</h3>;

    case 4:
      return <h4>{props.children}</h4>;

    case 5:
      return <h5>{props.children}</h5>;

    case 6:
      return <h6>{props.children}</h6>;

    default:
      throw Error('Unknown level: ' + level);
  }
}

function Section(props: {
  children: JSX.Element[];
}) {
  const level = useContext(LevelContext);

  return (
    <section>
      <LevelContext.Provider value={level + 1}>
        {props.children}
      </LevelContext.Provider>
    </section>
  );
}

export function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}
