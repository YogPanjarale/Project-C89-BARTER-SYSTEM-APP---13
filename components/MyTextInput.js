
import * as React from 'react';
import { View, } from 'react-native';
import { TextInput, } from 'react-native-paper';
import TextField from '@material-ui/core/TextField';

const MyComponent = () => {
  const [text, setText] = React.useState('');

  return (
      <View>
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}

    />
    <TextField
    // id="standard-helperText"
    // label="Helper text"
    // defaultValue="Default Value"
    // helperText="Some important text"
  />
  </View>
  );
};

export default MyComponent;
