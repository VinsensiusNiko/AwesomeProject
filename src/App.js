import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Style from './asset/style';
import FirstLast from './component/FirstLast/index';
import ButtonCustom from './component/ButtonCustom/index';
import ActivityForm from './component/ActivityForm';
import ActivityList from './component/ActivityList';

const App = () => {
  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  const callbackParent = value => {
    setUsername(value);
    setLastname(value);
  };

  const [finalActivity, setFinalActivity] = useState([]);
  const dataActivityParent = data => {
    setFinalActivity(finalActivity.concat(data));
  };

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <Image
          style={Style.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        {/* <FirstLast callbackFirst={callbackParent} />
        <ButtonCustom type="Register loh" />
        <Text>{username}</Text>
        <Text>{lastname}</Text> */}

        <ActivityForm dataActivity={dataActivityParent} />
        <ActivityList ListActivity={finalActivity} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
