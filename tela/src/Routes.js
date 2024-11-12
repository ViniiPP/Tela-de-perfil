import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { Perfil } from './pages/Perfil';
import { Anunciar } from './pages/Anunciar';
import { CameraScreen } from './pages/Camera';
import { ChoiseImage } from './pages/ChoiseImage';
import { Description } from './pages/Description';
import { Location } from './pages/Location';
import { Namebar } from './pages/NameBar';
import { Selectyourimage } from './pages/SelectYourImage';



const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 85,
                    padding: 5,
                    borderTopLeftRadius: 40, 
                    borderTopRightRadius: 40,
                    overflow: 'hidden',
                    position: 'absolute',

                    // sombra superior da navbar
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 15,
                    elevation: 10,
                },
                tabBarShowLabel: false,
                headerShown: false,
            }}
        >
            <Tab.Screen 
                name="pesquisar"
                component={Perfil} // aqui vai ser pesquisar - substituir pela pagina 'pesquisar' q seria a home
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons 
                                size={size + 6} 
                                color={focused ? '#FFBD2C' : '#000000'}
                                name={focused ? 'search' : 'search-outline'} // Ícone de lupa
                            />
                            <Text style={{ 
                                color: focused ? "#FFBD2C" : "#000000",
                                fontSize: 12,
                                fontWeight: 'bold',
                                marginTop: 7,
                                }}>Pesquisar</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen 
                name="perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons 
                                size={size + 6} 
                                color={focused ? '#FFBD2C' : '#000000'}
                                name={focused ? 'person' : 'person-outline'} // Ícone de lupa
                            />
                            <Text style={{ 
                                color: focused ? "#FFBD2C" : "#000000",
                                fontSize: 12,
                                fontWeight: 'bold',
                                marginTop: 7,
                                }}>Perfil</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

