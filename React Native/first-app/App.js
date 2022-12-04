import { Image, StyleSheet, Text, View } from 'react-native';

// Images
import imageMichonne from './assets/images/mobile-img.png';
import imageEiljah from './assets/images/backend-img.png';
import imageChuck from './assets/images/fullstack-img.png';
import imageProfile from './assets/images/profile-pic.jpg';

import iconView from './assets/icons/view.png';
import iconHidden from './assets/icons/hidden.png';
import iconHelp from './assets/icons/help.png';
import iconEmail from './assets/icons/email.png';

// App
export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <Image source={imageProfile} style={styles.mainProfileImage} />
          <Text style={{color: 'white',fontSize: 19}}>Hello, Adrian</Text>
        </View>

        <View style={styles.divIcons}>
          <Image source={iconView} style={styles.headerIcons} />
          <Image source={iconHelp} style={styles.headerIcons} />
          <Image source={iconEmail} style={styles.headerIcons} />
        </View>
      </View>


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

    </View>
  );
}

// Styles
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 22,
    backgroundColor: '#820AD1',
    width: '100%',
    height: 160,
    marginBottom:24,
    justifyContent: 'flex-start',
  },

  divIcons: {
    flexDirection: 'row',
  },

  headerIcons: {
    flexDirection: 'row',
    marginTop: 14,
    marginHorizontal: 6,
    width: 26,
    height: 26,
  },

  cardBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: '#820AD1',
    width: 330,
    height: 100,
  },

  profileImage: {
    marginRight: 14,
    width: 55,
    height: 55,
    borderStyle: 'solid',
    borderColor: 'aliceblue',
    borderWidth: 1,
    borderRadius: 50,
  },

  mainProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginTop: 10,
  },

  title: {
    marginBottom: -4,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'aliceblue',
  },
  subtitle: {
    color: 'lightgray',
  },

});
