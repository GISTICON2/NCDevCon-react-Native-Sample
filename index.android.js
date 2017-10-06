import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import * as DeviceInfo from 'react-native-device-info';

export default class NCDevCon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          NCDevCon 2017: React Native
        </Text>
        <Text tyle={styles.regular}>
          This text, and the text above it, are Text fields.
          Below here is a native ListView with some data.
        </Text>
        <FlatList
          data={[
            { key: "Device Unique ID", value: DeviceInfo.getUniqueID() },
            { key: "Device Manufacturer", value: DeviceInfo.getManufacturer() },
            { key: "Device Model", value: DeviceInfo.getModel() },
            { key: "Device Name", value: DeviceInfo.getSystemName() },
            { key: "Device Version", value: DeviceInfo.getSystemVersion() },
            { key: "Bundle Id", value: DeviceInfo.getBundleId() },
            { key: "Build Number", value: DeviceInfo.getBuildNumber() },
            { key: "App Version", value: DeviceInfo.getVersion() },
            { key: "App Version (Readable)", value: DeviceInfo.getReadableVersion() },
          ]}

          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemKey}>{item.key}</Text>
              <Text>{item.value}</Text>
            </View>
          )}

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
  },
  itemKey: {
    fontSize: 18,
    fontWeight: "bold"
  },
  itemValue: {
    fontSize: 14,
  }
});

AppRegistry.registerComponent('NCDevCon', () => NCDevCon);
