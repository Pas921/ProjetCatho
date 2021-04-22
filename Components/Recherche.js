import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

class Recherche extends React.Component {

    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}


const styles = StyleSheet.create({
    TextInput: {
      paddingTop: 10,
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5
    },
  });

export default Recherche