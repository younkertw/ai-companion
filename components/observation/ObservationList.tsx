import { Observation } from './Observation'
import styles from './Observation.module.css'
import type { ObservationType } from '@/lib/ObservationType'


interface Props {
  OBSERVATIONS: ObservationType[]
  onObservationClicked: (observation: ObservationType) => void;
}

export function ObservationList({ OBSERVATIONS, onObservationClicked }: Props) {

  return (
    <ul className={styles.observationsNavList}>
      {OBSERVATIONS.map((observation, index) => (
        <li key={index}>
          <Observation
            observation={observation}
            onClick={() => onObservationClicked(observation)}
          />
        </li>
      ))}
    </ul>
  );
}
