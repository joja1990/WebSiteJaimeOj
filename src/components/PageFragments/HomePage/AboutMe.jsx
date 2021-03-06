import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Soy desarrollador Web Full Stack, he tenido experiencia en integraciones de tecnologías con entornos locales y en la nube con
  SAP B1 con DI API, últimamentehe integrado nuevas tecnologías
  como GatsbyJs, Reactjs, GraphQL,React Native Asp .Net Core,
  me ha encantado compartir misexperiencias profesionales, me
  apasiona la tecnología, sobre todoaprender sobre nuevas
  herramientas de desarrollo.`,
  paraTwo: `Actualmente estoy trabajando aplicaciones con tecnologías Javascript como ReactJS y  Gatsby. También tengo experiencia en la herramientos como Azure DevOps para  CI / CD con una aplicación en .Net, y varias con Reactjs.
  `,
  parmTree: ` He utilizado varias herramientas con Sql Server como los Jobs para realizar tareas en horarios especificos, con las diferentes alertas que posee.  `,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}  `;
  return (
    <>
      <div>
        <SEO
          title="Acerca de mi"
          description={description}
          path=""
          keywords={['C#',   'devops', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">Acerca de mi</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      {/* <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Mangalore, KA, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row> */}
    </>
  );
};
export default AboutMe;
