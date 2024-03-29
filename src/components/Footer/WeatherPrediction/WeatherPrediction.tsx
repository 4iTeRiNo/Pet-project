import styles from './WeatherPrediction.module.css';

import {Predict} from './Predict';
import {useAppSelector} from '../../../hooks';
import {getConvertDate} from '../../../utils/getConvertDate';
import {getTemplateString} from '../../../utils/getTemplateString';
interface WeatherPredictionProps {
  head: string;
}

export const WeatherPrediction = ({head}: WeatherPredictionProps) => {
  const weatherValue = useAppSelector((state) => state.defaultCities.list);

  return (
    <>
      <h2>{head}</h2>

      {weatherValue.map((value, index) => {
        const [, second, third] = value.forecast.forecastday;

        return (
          <div
            key={index}
            className={styles.weatherPrediction}
          >
            <Predict
              imagePath={second.day.condition.icon}
              weather={second.day.condition.text}
              tempDay={getTemplateString(second.day.maxtemp_c)}
              tempNight={getTemplateString(second.day.mintemp_c)}
              day={getConvertDate(second.date)}
            />
            <Predict
              imagePath={third.day.condition.icon}
              weather={third.day.condition.text}
              tempDay={getTemplateString(third.day.maxtemp_c)}
              tempNight={getTemplateString(third.day.mintemp_c)}
              day={getConvertDate(third.date)}
            />
          </div>
        );
      })}
    </>
  );
};
