
import type { FunctionComponent } from "react";
import { LineChart, Line } from "recharts";
import type { IChartInfo } from "~/lib/superbase/superbase.consintants";
// import type { IChartInfo } from "~/lib/superbase/superbase.consintants";



const LineChartComponent:FunctionComponent<{data:IChartInfo[], stroke:string}> = ({data,stroke})=>{
    
    return(
        <LineChart  data={data} width={80} height={50}>
       <Line dot={false} type="monotone" dataKey="value" stroke={stroke} strokeWidth={1} />
        </LineChart>
    )
}

export default LineChartComponent;