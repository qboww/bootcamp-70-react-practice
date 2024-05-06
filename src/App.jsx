import { Container, Section } from 'components';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Images, Points, Props, Todos } from './tabs';

function App() {
  return (
    <Section>
      <Container>
        <Tabs>
          <TabList>
            <Tab>Images</Tab>
            <Tab>Todos</Tab>
            <Tab>Points</Tab>
            <Tab>Props</Tab>
          </TabList>

          <TabPanel>
            <Images />
          </TabPanel>

          <TabPanel>
            <Todos />
          </TabPanel>
          <TabPanel>
            <Points />
          </TabPanel>
          <TabPanel>
            <Props />
          </TabPanel>
        </Tabs>
      </Container>
    </Section>
  );
}

export default App;
