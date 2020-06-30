import React from 'react';
import {View, Text, Button} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const PDPQUE = gql`
  query getProduct($urlKey: String!) {
    products(selectedStore: 1, filter: {url_key: {eq: $urlKey}}) {
      items {
        name
        sku
      }
    }
  }
`;

const Pdp = ({navigation}) => {
  const {data, loading} = useQuery(PDPQUE, {
    variables: {urlKey: 'pepsodent-toothpaste-white-225gr'},
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const product = data.products.items[0];

  return (
    <View>
      <Text>Halaman PDP</Text>
      <Text>{product.name}</Text>
    </View>
  );
};

export default Pdp;
