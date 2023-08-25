import type { ObservationType } from '@/lib/ObservationType'
import styles from "./Observation.module.css";


interface Props {
    observation: ObservationType
    onClick: (observation: ObservationType) => void;
}

export const Observation = ({ observation, onClick }: Props) => {
    const handleClick = () => {
      onClick(observation)
    }

    if (!observation) {
      return null; // or some other fallback component or message
    }

    const { id, title, message } = observation

    return (
        <div className={styles.observation} onClick={handleClick}>
            {observation.title}
        </div>
    );
};