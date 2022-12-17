import { Image, Text, View } from 'react-native';
import styles from './styles.js';

// Images and Icons
import imageMichonne from '../../assets/images/mobile-img.png';
import imageEiljah from '../../assets/images/backend-img.png';
import imageChuck from '../../assets/images/fullstack-img.png';

export function UsersCards() {
    return (
        <>
            {/* Michonne Hawthorne */}
            <View style={styles.cardBox}>
                <Image source={imageMichonne} style={styles.profileImage} />

                <View>
                    <Text style={styles.title} >Mobile Developer</Text>
                    <Text style={styles.subtitle} >Michonne Hawthorne</Text>
                </View>
            </View>


            {/* Eiljah Price / Mr Glass */}
            <View style={styles.cardBox}>
                <Image source={imageEiljah} style={styles.profileImage} />

                <View>
                    <Text style={styles.title} >Backend Developer</Text>
                    <Text style={styles.subtitle} >Eiljah Price / Mr Glass</Text>
                </View>
            </View>

            {/* Chuck Norris */}
            <View style={styles.cardBox}>
                <Image source={imageChuck} style={styles.profileImage} />

                <View>
                    <Text style={styles.title} >Full Stack Developer</Text>
                    <Text style={styles.subtitle} >Chuck Norris</Text>
                </View>
            </View>
        </>
    );
};