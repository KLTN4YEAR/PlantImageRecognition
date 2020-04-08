import React, { Component } from 'react';
import { SearchBar, Button, Avatar } from 'react-native-elements';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../public/styleSheets/styleSearchBar';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class App extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={styles.container}>
                <Grid>
                    <Row>
                        <Col size={100}>
                            <SearchBar
                                inputStyle={styles.inputSearch}
                                searchIcon={{ type: 'font-awesome', name: 'search' }}
                                placeholder="Type Here..."
                                onChangeText={this.updateSearch}
                                value={search}
                                lightTheme
                                containerStyle={styles.container}
                            />
                        </Col>
                        {/* <Button onPress={() => this.props.navigation.navigate('User')} title="Presss"/>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}> 
                            <Text>Press</Text>
                        </TouchableOpacity> */}
                    </Row>
                </Grid>
            </View>
        );
    }
}
