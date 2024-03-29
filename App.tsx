/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Text,
  Button,
  View,
  GestureResponderEvent,
} from 'react-native';

function App(): React.JSX.Element {
  function addEntry(_event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Saldo: $2.102,45
      </Text>
      <Button onPress={addEntry} title="Adicionar" />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Categorias
      </Text>

      <FlatList
        data={[
          {key: 'Alimentação: $200,00'},
          {key: 'Combustível: $12,00'},
          {key: 'Aluguel: $120,00'},
          {key: 'Lazer: $250,00'},
          {key: 'Outros: $1.200,00'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
        }}>
        Últimos lançamento
      </Text>

      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10,00'},
          {key: 'Supermercado Isadora: $190,00'},
          {key: 'Posto Ipiranga: $190,00'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

export default App;
