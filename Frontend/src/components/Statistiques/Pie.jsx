import { ResponsivePie } from "@nivo/pie";
import { useQuery } from "react-query";
import axios from "axios";
const MyResponsivePie = () => {
  const query = useQuery("patient", async () => {
    const { data: uu } = await axios.get(
      `http://localhost:4000/api/appointments`
    );
    return uu;
  });

  let first = 0;
  let second = 0;
  let third = 0;
  let vaccinated = 0;
  let notVaccinated = 0;

  if (query.data) {
    query.data.forEach((element) => {
      if (element.VaccNumber == "firstVacc") {
        first++;
      } else if (element.VaccNumber == "secondVacc") {
        second++;
      } else if (element.VaccNumber == "thirdVacc") {
        third++;
      } else if (element.VaccNumber == "Vaccinated") {
        vaccinated++;
      } else if (element.VaccNumber == "notVaccinated") {
        notVaccinated++;
      }
    });
  }
  return (
    <ResponsivePie
      data={[
        {
          id: "firstVacc",
          label: "first Vaccination",
          value: first,
          color: "hsl(174, 70%, 50%)",
        },
        {
          id: "secondVacc",
          label: "second Vaccination",
          value: second,
          color: "hsl(349, 70%, 50%)",
        },
        {
          id: "thirdVacc",
          label: "third Vaccination",
          value: third,
          color: "hsl(104, 70%, 50%)",
        },
        {
          id: "vaccinated",
          label: "Vaccinated",
          value: vaccinated,
          color: "hsl(104, 70%, 50%)",
        },
        {
          id: "NotVaccinated",
          label: "NotVaccinated",
          value: notVaccinated,
          color: "hsl(104, 70%, 50%)",
        },
      ]}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#00000"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 5]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 3,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "firstVacc",
          },
          id: "dots",
        },
        {
          match: {
            id: "secondVacc",
          },
          id: "dots",
        },
        {
          match: {
            id: "thirdVacc",
          },
          id: "dots",
        },
        {
          match: {
            id: "vaccinated",
          },
          id: "dots",
        },
        {
          match: {
            id: "NotVaccinated",
          },
          id: "dots",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          justify: false,
          translateX: -50,
          translateY: 54,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "black",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default MyResponsivePie;
