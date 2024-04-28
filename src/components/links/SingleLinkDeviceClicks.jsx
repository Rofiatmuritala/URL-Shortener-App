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
import { FaDesktop } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SingleLinkDeviceClicks({ clicks }) {
  const desktopClicks = clicks.filter((click) => {
    const clicks = click.device.type === "desktop";
    return clicks;
  });

  const smartphoneClicks = clicks.filter((click) => {
    const clicks = click.device.type === "smartphone";
    return clicks;
  });

  const deviceData = {
    labels: ["Desktop", "Smartphone"],
    datasets: [
      {
        label: "Clicks",
        data: [desktopClicks.length, smartphoneClicks.length],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <StatGroup>
        <Stat>
          <StatLabel className="flex mb-3">
            <FaDesktop className="w-10 h-10" />
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg"
              alt="Windows"
              className="w-10 h-10"
            /> */}
          </StatLabel>
          <StatNumber>{desktopClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {((desktopClicks.length / clicks.length) * 100).toFixed(2)}%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel className="flex mb-3">
            <IoPhonePortraitOutline className="w-10 h-10" />
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-10"
            /> */}
          </StatLabel>
          <StatNumber>{smartphoneClicks.length}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            {((smartphoneClicks.length / clicks.length) * 100).toFixed(2)}%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <div className="mt-20 w-1/2 mx-auto">
        <Pie data={deviceData} />
      </div>
    </>
  );
}
