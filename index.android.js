import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import DeviceInfo  from 'react-native-device-info';

export default class NCDevCon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          NCDevCon 2017: React Native
        </Text>
        <Text tyle={styles.regular}>
          This text, and the text above it, are Text fields. Below here is a native ListView with some data.
        </Text>
        <FlatList
          data={[
            { key: "Device Unique ID", value: this.DeviceInfo.getUniqueID() },
            //{ key: "Device Manufacturer", value: DeviceInfo.getManufacturer() },
            //{ key: "Device Model", value: DeviceInfo.getModel() },
            //{ key: "Device Name", value: DeviceInfo.getSystemName() },
            //{ key: "Device Version", value: DeviceInfo.getSystemVersion() },
            //{ key: "Bundle Id", value: DeviceInfo.getBundleId() },
            //{ key: "Build Number", value: DeviceInfo.getBuildNumber() },
            //{ key: "App Version", value: DeviceInfo.getVersion() },
            //{ key: "App Version (Readable)", value: DeviceInfo.getReadableVersion() },
            
            { key: 'Key 1', value: 'value 1' },
            { key: 'Key 2', value: 'value 2' },
            { key: 'Key 3', value: 'value 3' },
            { key: 'Key 4', value: 'value 4' },
            { key: 'Key 5', value: 'value 5' },
            { key: 'Key 6', value: 'value 6' }
          ]}
          renderItem={({ item }) => (<Text style={styles.item}>{item.key}: {item.value}</Text>)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10
  },
  regular: {
    fontSize: 18  
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

AppRegistry.registerComponent('NCDevCon', () => NCDevCon);
