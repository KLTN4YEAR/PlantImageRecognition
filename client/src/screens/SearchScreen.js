import * as React from 'react';
import {SearchBar} from 'react-native-elements';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import {styles} from '../public/styleSheets/styleSearchView';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Icon} from 'react-native-elements';
import {searchPlant} from '../action/plantAction';
import {auth} from '../config/helper';
import {connect} from 'react-redux';
import SearchResultItem from '../components/SearchResultItem';

class SearchScreen extends React.Component {
  state = {
    search: '',
    plants: [],
  };

  updateSearch = async search => {
    await this.setState({search});
    await this.handleSearch(search);
  };

  handleSearch = async namePlant => {
    const {searchPlant} = this.props;
    const data = await auth.isAuthenticated();
    if (data) {
      searchPlant(data, namePlant);
    }
  };

  renderSort() {
    const {plants} = this.props;
    const {search} = this.state;
    return (
      <View style={styles.viewSearch}>
        {search ? (
          <>
            <Text style={styles.labelResult}>
              Kết quả cho: {search}
            </Text>
            {plants.length > 0 ? (
              plants.map((item, i) => {
                return <SearchResultItem i={i} key={item._id} plant={item} />;
              })
            ) : (
              <Text style={styles.txtNotify}>Không có kết quả</Text>
            )}
          </>
        ) : (
          <Text style={styles.txtNotify}>Nhập từ khoá để tìm kiếm!</Text>
        )}
      </View>
    );
  }

  render() {
    const {search} = this.state;
    return (
      <SafeAreaView style={styles.viewSafeArea}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          inputContainerStyle={styles.inputSearchBar}
          showLoading
          containerStyle={styles.searchBar}
          placeholderTextColor="#fff"
          cancelIcon
          round
        />
        {this.renderSort()}
      </SafeAreaView>
    );
  }
}

function mapStateToProp(state) {
  return {
    plants: state.plant.plants,
  };
}

export default connect(
  mapStateToProp,
  {searchPlant},
)(SearchScreen);
