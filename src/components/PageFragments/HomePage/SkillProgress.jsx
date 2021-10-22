import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div style={{ marginTop: 26 }}>
    <h2>Mis conocimientos</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={80}
          text="C#"
        />
        <ProgressBar
          percent={80}
          text="Api Rest"
        />

        <ProgressBar
          percent={80}
          text="IIS"
        />
        <ProgressBar
          percent={95}
          text="ReactJS"
        />
        <ProgressBar
          percent={85}
          text="Gatsby"
        />
        <ProgressBar
          percent={50}
          text="NodeJS"
        />
        <ProgressBar
          percent={80}
          text="Git"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={80}
          text="Redux"
        />

        <ProgressBar
          percent={90}
          text="Mysql"
        />
        <ProgressBar
          percent={78}
          text="MongoDB"
        />
        <ProgressBar
          percent={70}
          text="SQL SERVER"
        />
        <ProgressBar
          percent={60}
          text="SAP DI API"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
