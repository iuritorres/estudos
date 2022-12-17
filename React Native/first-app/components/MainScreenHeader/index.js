import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles.js';

// Images and Icons
import imageProfile from '../../assets/images/profile-pic.jpg';

import iconView from '../../assets/icons/view.png';
import iconHidden from '../../assets/icons/hidden.png';
import iconHelp from '../../assets/icons/help.png';
import iconEmail from '../../assets/icons/email.png';

// Header component
export function MainScreenHeader(props) {

    // toggleIcon function
    const [ currentViewIcon, setCurrentViewIcon ] = useState(iconView);

    // return
    return (
        // Header
        <View style={styles.header}>

            {/* Profile image and greetings */}
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Image source={imageProfile} style={styles.mainProfileImage} />
                <Text style={{ color: 'white', fontSize: 19 }}>Hello, Adrian</Text>
            </View>

            {/* Right Buttons */}
            <View style={styles.divIcons}>
                <Image
                    source={currentViewIcon}
                    style={styles.headerIcons}
                    onTouchEnd={ () => { currentViewIcon === iconView ? setCurrentViewIcon(iconHidden) : setCurrentViewIcon(iconView) } }
                />

                <Image
                    source={iconHelp}
                    style={styles.headerIcons}
                    onTouchEnd={() => { props.props.navigation.navigate('About') }}
                />

                <Image
                    source={iconEmail}
                    style={styles.headerIcons}
                />
            </View>
        </View>
    );
};

