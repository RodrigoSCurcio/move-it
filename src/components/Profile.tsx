import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/59969422?s=460&u=64e644275bbde65933ee62f0ee1fba92c8be2c57&v=4" alt="Rodrigo Curcio" />
            <div>
                <strong>Rodrigo Curcio</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                    </p>
            </div>
        </div>
    );
}