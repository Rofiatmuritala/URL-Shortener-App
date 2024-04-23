import {
  Card,
  CardBody,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import SingleLinkBrowserClicks from "../../pages/dashboard/links/SingleLinkBrowserClicks";

export default function SingleLink({ singleLink }) {
  const browserDataClicks = singleLink.link.clicks.filter((click) => {
    const clicks = click.client.type === "browser";
    return clicks;
  });

  return (
    <>
      <Card className="mb-5">
        <CardBody>
          <Stat>
            <StatLabel>Clicks</StatLabel>
            <StatNumber>{singleLink.clicks}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <Tabs>
            <TabList>
              <Tab>Client/Browser</Tab>
              <Tab>OS</Tab>
              <Tab>Device</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SingleLinkBrowserClicks
                  browserDataClicks={browserDataClicks}
                />
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
}

// Get higher ROI from your ads
// Get better conversion rate on your marketing
