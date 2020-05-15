import React from 'react';
import {
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  FlatList,
  Dimensions,
  ToastAndroid,
} from 'react-native';

const enappdIcon = require('../public/images/logo.png');
const widthConst = Dimensions.get('screen').width;

export default function App() {
  const IMAGES = {
    image1: require('../public/images/Like.png'),
    image2: require('../public/images/logo.png'),
    image3: require('../public/images/Liked.png'),
    image4: require('../public/images/logo1.png'),
    image5: require('../public/images/logo192.png'),
    image6: require('../public/images/logo512.png'),
    image7: require('../public/images/logo8.jpg'),
    image8: require('../public/images/man.png'),
    image9: require('../public/images/Picture1.png'),
    image10: require('../public/images/vu.jpg'),
  };
  const initialData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Susan Bert',
      image: '1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Neil Arms',
      image: '2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Carla Neice',
      image: '3',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba',
      title: 'Janice Hanner',
      image: '4',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fcd91aa97f63',
      title: 'James Sullivan',
      image: '5',
    },
  ];
  const [refreshing, setRefreshing] = React.useState(false);
  const [listData, setListData] = React.useState(initialData);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    if (listData.length < 10) {
      try {
        let response = await fetch(
          'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
        );
        let responseJson = await response.json();
        console.log(responseJson);
        setListData(responseJson.result.concat(initialData));
        setRefreshing(false);
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
      setRefreshing(false);
    }
  }, [refreshing]);

  function Item({title, image}) {
    return (
      <View style={styles.item}>
        <Image source={IMAGES['image' + image]} style={styles.thumbnail} />
        <Text style={styles.itemText}>{title}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({item}) => <Item title={item.title} image={item.image} />}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.list}
      />
      <View style={styles.enappdWrapper}>
        <Image style={styles.enappdIcon} source={enappdIcon} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  list: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: widthConst,
    flex: 1,
  },
  enappdWrapper: {
    position: 'absolute',
    bottom: 0,
  },
  enappdIcon: {
    width: 100,
    height: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#aaa',
  },
  itemText: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 18,
  },
});
