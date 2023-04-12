import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiCypress, SiPlaywright, SiApachejmeter } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';


const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      With a background in automated testing I realised my passion for coding. I am looking to branch out and advance my career into
      the world of web development. Below is a list of teh technologies that I have used.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, MongoDB, PostgreSQL, MySQL and MSQL databases 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiCypress size='2rem' />
        <ListContainer>
          <ListTitle>Automated UI Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Cypress, Playwright and Selenium
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <TbApi size='2rem' />
        <ListContainer>
          <ListTitle>Automated API Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            RestAssured, Python Requests, PACT, Cypress and Playwright
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiApachejmeter size='3rem' />
        <ListContainer>
          <ListTitle>Performance Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            JMeter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
