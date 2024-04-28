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

export default function SingleLinkOSClicks({ clicks }) {
  const windowsClicks = clicks.filter((click) => {
    const clicks = click.os.name === "Windows";
    return clicks;
  });

  const macClicks = clicks.filter((click) => {
    const clicks = click.os.name === "Mac";
    return clicks;
  });

  const androidClicks = clicks.filter((click) => {
    const clicks = click.os.name === "Android";
    return clicks;
  });
  const iOSClicks = clicks.filter((click) => {
    const clicks = click.os.name === "iOS";
    return clicks;
  });

  const osData = {
    labels: ["Windows", "Mac", "Android", "iOS"],
    datasets: [
      {
        label: "Clicks",
        data: [
          windowsClicks.length,
          macClicks.length,
          androidClicks.length,
          iOSClicks.length,
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
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg"
              alt="Windows"
              className="w-10 h-10"
            />
          </StatLabel>
          <StatNumber>{windowsClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {((windowsClicks.length / clicks.length) * 100).toFixed(2)}%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel className="flex mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-10"
            />
          </StatLabel>
          <StatNumber>{macClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {((macClicks.length / clicks.length) * 100).toFixed(2)}%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel className="flex mb-3">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--H40ocFOu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/nedy123/image/upload/v1560565889/Screenshot_2019-06-15_at_3.28.03_AM_hij9sw.png"
              alt="iOS"
              className="w-12  h-12"
            />
          </StatLabel>
          <StatNumber>{androidClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {((androidClicks.length / clicks.length) * 100).toFixed(2)}%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel className="flex mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/IOS_logo.svg"
              alt="IOS"
              className="w-12  h-12"
            />
          </StatLabel>
          <StatNumber>{iOSClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {((iOSClicks.length / clicks.length) * 100).toFixed(2)}%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <div className="mt-20 w-1/2 mx-auto">
        <Pie data={osData} />
      </div>
    </>
  );
}
