import { View } from 'react-native';
import styles from './styles.js';

import { MainScreenHeader } from '../../components/MainScreenHeader/';
import { UsersCards } from '../../components/UsersCards/';

// MainScreen
export function MainScreen(props) {
    return (
        <View style={styles.container}>
            <MainScreenHeader props={props} />
            <UsersCards />
        </View>
    );
};

