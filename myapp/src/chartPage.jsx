import { CircleChart } from "./charts/CircleChart";
import { DoughnutChart } from "./charts/DoughnutChart";
import { StackedChart } from "./charts/StackedChart";
import { MultiTaskChart } from "./charts/multiTaskChart";

const Charts = () => {
  return (
    <div className="container gap-5 d-flex flex-wrap justify-content-center">
      <CircleChart />
      <DoughnutChart />
      <StackedChart />
      <MultiTaskChart />
    </div>
  );
};
export default Charts;
