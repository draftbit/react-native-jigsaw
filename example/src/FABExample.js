import * as React from "react";
import {View} from 'react-native'
import {withTheme, FAB} from "@draftbit/ui";
import Section, {Container, styles} from "./Section";

function FABExample({theme}) {
  // const [elevation, setElevation] = React.useState(0);

  const handlePress = () => {};
  return (
    <Container style={{flexDirection: 'row', backgroundColor: theme.colors.background}}>
      <FAB icon="add" onPress={handlePress} />
      <FAB icon="add" disabled onPress={handlePress} />
      <View style={{backgroundColor: 'yellow'}}>
        <FAB
          icon="add"
          loading
          onPress={handlePress}
          style={{margin: 20}}
        />
      </View>
    </Container>
  );
}
export default withTheme(FABExample);
