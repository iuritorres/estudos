import { Button, Text, View } from 'react-native';
import styles from './styles.js';

// About
export function About(props) {
    return (
        <View style={styles.container}>
            <Text>Testando, pagina Sobre</Text>
            
            <Button 
                title='Ir para MainScreen'
                onPress={ () => { props.navigation.navigate('MainScreen') } }
            />
        </View>
    );
};

