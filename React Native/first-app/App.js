import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from './Screens/MainScreen/';
import { About } from './Screens/About';
import TelaInicial from "./Screens/TelaInicial";
import TelaConsoles from "./Screens/TelaConsoles";
import TelaJogos from "./Screens/TelaJogos";
import TelaNuvem from "./Screens/TelaNuvem";

const Drawer = createDrawerNavigator();

// App
export default function App() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>

          <Drawer.Screen name="MainScreen" component={ MainScreen } />
          <Drawer.Screen name="About" component={ About } />

          <Drawer.Screen name="Tela inicial" component={TelaInicial} />
          <Drawer.Screen name="Consoles" component={TelaConsoles} />
          <Drawer.Screen name="Jogos" component={TelaJogos} />
          <Drawer.Screen name="Nuvem" component={TelaNuvem} />

        </Drawer.Navigator>
      </NavigationContainer>
  );
}

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer >
//       <Stack.Navigator>
//         <Stack.Screen name="Tela inicial" component={TelaInicial} />
//         <Stack.Screen name="Consoles" component={TelaConsoles} />
//         <Stack.Screen name="Jogos" component={TelaJogos} />
//         <Stack.Screen name="Nuvem" component={TelaNuvem} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// };