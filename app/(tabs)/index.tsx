import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

// Écran d'accueil
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<any, any>;

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur Val Thorens Extreme</Text>
      <Text style={styles.description}>Découvrez des activités de sports extrêmes cet été à Val Thorens!</Text>
      <Button
        title="Planifiez votre aventure"
        onPress={() => navigation.navigate('Planification')}
      />
      <Button
        title="Rejoindre la communauté"
        onPress={() => navigation.navigate('Communauté')}
      />
    </View>
  );
}

// Écran des activités
function ActivitiesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nos Activités</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>VTT</Text>
        <Text>Explorez les montagnes avec nos parcours de VTT adaptés à tous les niveaux.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Parapente</Text>
        <Text>Volez au-dessus des Alpes pour une vue imprenable de Val Thorens.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Escalade</Text>
        <Text>Grimpez les montagnes et vivez l'adrénaline des parcours d'escalade.</Text>
      </View>
    </ScrollView>
  );
}

// Écran de planification
function PlanificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planifiez votre aventure</Text>
      <Button
        title="Réservez une activité"
        onPress={() => alert('Réservation en cours!')}
      />
    </View>
  );
}

// Écran de communauté
function CommunityScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Rejoindre la Communauté</Text>
      <Text>Partagez vos expériences, lisez les avis des autres et découvrez de nouveaux défis!</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Top Challenges</Text>
        <Text>Voir les meilleurs classements et défis de la communauté.</Text>
      </View>
    </ScrollView>
  );
}

// Création de la navigation entre les écrans
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Activités" component={ActivitiesScreen} />
      <Stack.Screen name="Planification" component={PlanificationScreen} />
      <Stack.Screen name="Communauté" component={CommunityScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f1f1f1',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});