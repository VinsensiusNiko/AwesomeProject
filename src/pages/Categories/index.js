import React from 'react';
import {Text, Button, View, ScrollView} from 'react-native';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const CATEGORIESQUE = gql`
  {
    categoryList {
      children {
        id
        name
        children {
          id
          name
          children {
            id
            name
          }
        }
      }
    }
  }
`;

const Categories = () => {
  const {data, loading} = useQuery(CATEGORIESQUE);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const listCategory = data.categoryList[0].children;

  return (
    <ScrollView>
      <View>
        <Text>Halaman Categories</Text>
        <Text>{listCategory.name}</Text>
        <View>
          {listCategory.map(item => (
            <View>
              <Text>{item.name}</Text>
              <View>
                {item.children.map(itemLv1 => (
                  <View>
                    <Text>.....{itemLv1.name}</Text>
                    <View>
                      {itemLv1.children.map(itemLv2 => (
                        <Text>..........{itemLv2.name}</Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Categories;
