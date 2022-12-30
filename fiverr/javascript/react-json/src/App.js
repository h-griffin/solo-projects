import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import logo from "./images/logo.svg";
import { day, hover } from "./components/date"
import Data from './data.json'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function App() {
  
  const state = {
    // labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    labels: Data.map(obj => obj.day),
    datasets: [
      {
        label: "",
        backgroundColor: day,
        fill: false,
        hoverBackgroundColor: hover,
        borderRadius: 8,
        // data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        data: Data.map(obj => obj.amount),
      },
    ],
  };

  console.log(Data.map(obj => obj.amount))

  return (
    <div
      class="p-5 max-w-lg mx-auto flex flex-col 
     justify-center h-screen"
    >
      <article class="flex intems-center justify-between smallcontainer rounded-2xl p-8 shadow ">
        <h2 class="font-bold text-white text-3xl">
          <p class=" fontthin block text-base ">My balance</p>
          $921.48
        </h2>
        <img src={logo} alt="" />
      </article>

      <article class="mt-8 bg-white p-8 shadow rounded-2xl">
        <article class="pb-8">
          <h1 class="md:text-2xl lg:text-3xl mb-3 ">Spending - Last 7 days </h1>
          <Bar
            data={state}
            options={{
              scales: {
                x: {
                  grid: {
                    drawBorder: false,
                    display: false,
                  },
                },
                y: {
                  display: false,
                },
              },
              plugins:{
                          tooltip: {
                yAlign: 'top',
                xAlign:'center'
              }
              }

            }}
          />
        </article>

        <article
          class="border-t pt-8 border-slate-200 
        flex items-center justify-between"
        >
          <h2 class=" text-4xl">
            <span class="fontthin text-base  block opacity-75">
              Total this month
            </span>
            $478.33
          </h2>

          <h3
            class="flex flex-col items-end justify-end text-base 
           "
          >
            +2.4%
            <span class="fontthin  block opacity-75">from last month</span>
          </h3>
        </article>
      </article>
    </div>
  );
}

export default App;
