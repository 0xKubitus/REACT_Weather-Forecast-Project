import { getDate } from "helpers.js";

const CardTemplate = ({ data }) => {
    const date = getDate(data[0].dt);

    // console.log("data = ", data);

    const maxTemps = [];
    const minTemps = [];

    data.forEach((entry) => {
        maxTemps.push(entry.main.temp_max);
        minTemps.push(entry.main.temp_min);
    });
    console.log(`${date} max temps =`, maxTemps);
    console.log(`${date} min temps =`, minTemps);

    const highestKelvinTemp = Math.max(...maxTemps);
    const lowestKelvinTemp = Math.min(...minTemps);
    console.log(`${date} highestKelvinTemp =`, highestKelvinTemp);
    console.log(`${date} lowestKelvinTemp =`, lowestKelvinTemp);

    return (
        <div className="card-template">
            {data[0] !== "undefined" && (
                <div>
                    <p>{date}</p>
                    <p>{data[0].dt_txt}</p>
                </div>
            )}
            <p>
                {data[0].weather[0].description} - {data[0].main.temp}°F
            </p>
            <p>
                {/* Daily Min. = {data[0].main.temp_min}°F */}
                Daily Min. = {lowestKelvinTemp}°F
                <br></br>
                {/* Daily Max = {data[0].main.temp_max}°F */}
                Daily Max = {highestKelvinTemp}°F
            </p>
        </div>
    );
};
export default CardTemplate;

// const CardTemplate = ({ data }) => {
//     const date = getDate(data.dt);

//     return (
//         <div>
//             {data !== "undefined" && (
//                 <div>
//                     <p>{date}</p>
//                     <p>{data.dt_txt} forecast</p>
//                 </div>
//             )}
//             <p>{data.weather[0].description}</p>
//             <p>
//                 Min. = {data.main.temp_min}°F / Max = {data.main.temp_max}°F
//             </p>
//         </div>
//     );
// };
// export default CardTemplate;
