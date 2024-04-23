import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SingleLinkBrowserClicks({ browserDataClicks }) {
  console.log(browserDataClicks[0]);

  const chromeClicks = browserDataClicks.filter((browser) => {
    const clicks = browser.client.name === "Chrome";
    return clicks;
  });

  const edgeClicks = browserDataClicks.filter((browser) => {
    const clicks = browser.client.name === "Microsoft Edge";
    return clicks;
  });

  const firefoxClicks = browserDataClicks.filter((browser) => {
    const clicks = browser.client.name === "Firefox";
    return clicks;
  });

  const safariClicks = browserDataClicks.filter((browser) => {
    const clicks = browser.client.name === "Safari";
    return clicks;
  });

  const browserData = {
    labels: ["Chrome", "Edge", "Firefox", "Safari"],
    datasets: [
      {
        label: "Clicks",
        data: [
          chromeClicks.length,
          edgeClicks.length,
          firefoxClicks.length,
          safariClicks.length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <StatGroup>
        <Stat>
          <StatLabel className="flex mb-3">
            <img
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
              alt="Google Chrome"
              className="w-10 h-10"
            />
          </StatLabel>
          <StatNumber>{chromeClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel className="flex mb-3">
            <img
              src="https://edgestatic.azureedge.net/shared/cms/lrs1c69a1j/section-images/29bfeef37eef4ca3bcf962274c1c7766.png"
              alt="Microsoft Edge"
              className="w-10 h-10"
            />
          </StatLabel>
          <StatNumber>{edgeClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel className="flex mb-3">
            <img
              src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
              alt="Firefox"
              className="w-10 h-10"
            />
          </StatLabel>
          <StatNumber>{firefoxClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel className="flex mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/52/Safari_browser_logo.svg"
              alt="Safari"
              className="w-10 h-10"
            />
          </StatLabel>
          <StatNumber>{safariClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <div className="mt-20 w-1/2 mx-auto">
        <Pie data={browserData} />
      </div>
    </>
  );
}
