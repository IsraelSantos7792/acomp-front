import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import AllWorks from '@/components/AllWorks';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <AllWorks/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
  }
});
