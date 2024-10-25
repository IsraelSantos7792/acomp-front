import { getWorks } from "@/services/api"
import { useEffect, useState } from "react";
import { Text, View } from "./Themed";
import { Button, StyleSheet } from "react-native";



export default function AllWorks() {
  const [works, setWorks] = useState([]);

  const fetchWorks = async () => {
      try {
          const data = await getWorks();
          setWorks(data);
      } catch (error) {
          console.error("Erro ao carregar obras:", error);
      }
  };

  useEffect(() => {
      fetchWorks();
  }, []);


    return (
        <View style={styles.container}>
            {works.map((item, index) => (
                <View key={index} style={styles.card}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.owner}>Proprietário: {item.owner}</Text>
                  <Text style={styles.phone}>Contato: {item.phone_number}</Text>
                  <Text style={styles.value}>Valor: R$ {item.value}</Text>
                  {item.status ? 
                    <Text style={styles.statusTrue}>Status: Em andamento</Text> : 
                    <Text style={styles.statusFalse}>Status: Obra Parada</Text>
                  }
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    flexContainer: {
      flexDirection: 'column', // ou 'row', dependendo da disposição desejada
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    card: {
      backgroundColor: '#fff',
      marginBottom: 12,
      paddingVertical: 15,
      paddingHorizontal: 70,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
      display: 'flex'
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 8,
    },
    owner: {
      fontSize: 16,
      color: '#555',
      marginBottom: 4,
    },
    phone: {
      fontSize: 14,
      color: '#777',
    },
    value: {
      fontSize: 14,
      color: '#777',
      marginTop: 8
    },
    statusTrue: {
      marginTop: 8,
      fontSize: 14,
      color: '#00a532'
    },
    statusFalse: {
      marginTop: 8,
      fontSize: 14,
      color: '#db0032'
    },
  });
