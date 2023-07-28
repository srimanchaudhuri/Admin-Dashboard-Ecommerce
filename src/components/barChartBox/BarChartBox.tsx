import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import "./barChartBox.scss"
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";

type Props = {
    title:string;
    color:string;
    dataKey:string;
    chartData:object[];
    income?:number,
    percentage?:number
}

interface UserData {
  name: string;
  "visit": number; // Assuming it's a number
}


const BarChartBox = (props: Props) => {
  const [userStats, setUserStats] = useState<UserData[]>([])

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats")
        res.data.map((item : any) => {


          setUserStats(prev => [
            ...prev,
            {name:MONTHS[item._id - 1], "visit": item.total},
          ]
          )
        }
        )
      
      } catch (error) {
        
      }
    } 
    getStats()
  }, [MONTHS])
  
  console.log(userStats)

  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={userStats}>
            <Tooltip
                contentStyle={{background:"#2a3447", borderRadius:"5px"}}
                labelStyle={{display:"none"}}
                cursor={{fill:"none"}}
            />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox
