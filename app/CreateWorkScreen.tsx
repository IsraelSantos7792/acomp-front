import React, { useState, useEffect } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { createWork } from '@/services/api';

export default function CreateWorkScreen() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [value, setValue] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const submitWork = async () => {
      if (!isSubmitting) return;

      try {
        const newWork = {
          title,
          email,
          phone_number: phoneNumber,
          owner,
          value,
          delivery_date: deliveryDate,
        };

        await createWork(newWork);

        Alert.alert('Sucesso', 'Obra criada com sucesso!');
        // Limpa os campos após o envio
        setTitle('');
        setEmail('');
        setPhoneNumber('');
        setOwner('');
        setValue('');
        setDeliveryDate('');
      } catch (error) {
        Alert.alert('Erro', 'Ocorreu um erro ao criar a obra.');
      } finally {
        setIsSubmitting(false);
      }
    };

    submitWork();
  }, [isSubmitting]);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Telefone" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Responsável" value={owner} onChangeText={setOwner} />
      <TextInput style={styles.input} placeholder="Valor" value={value} onChangeText={setValue} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Data de entrega" value={deliveryDate} onChangeText={setDeliveryDate} />
      <Button title="Criar Obra" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});