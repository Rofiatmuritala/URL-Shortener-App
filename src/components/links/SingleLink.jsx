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

import SingleLinkBrowserClicks from "./SingleLinkBrowserClicks";
import SingleLinkOSClicks from "./SingleLinkOSClicks";
import SingleLinkDeviceClicks from "./SingleLinkDeviceClicks";

export default function SingleLink({ singleLink }) {
  const browserDataClicks = singleLink.link.clicks.filter((click) => {
    const clicks = click.client.type === "browser";
    return clicks;
  });

  const clicks = singleLink.link.clicks;

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
                <SingleLinkOSClicks clicks={clicks} />
              </TabPanel>
              <TabPanel>
                <SingleLinkDeviceClicks clicks={clicks} />
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
