import React, { Component} from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Routes from '../../menuItems';
import { connect } from 'react-redux';
import SectionCard from '../Layout/SectionCard'
import { colors } from '../../styles/globalStyles';
import Navbar from '../Navbar/Navbar';
import UserProfile from '../../models/UserProfile';

class UserAccount extends Component {

  constructor(props) {
    super(props);
    const screenSize = Dimensions.get('window');
    this.displayName = 'User Account';
    this.state = {
      menuItems: Routes,
      width: screenSize.width,
      height: screenSize.height,
      userProfile: props.userProfile || (new UserProfile()),
      isEdit: props.isEdit || false
    }
  }

  /**
   * Lifecycle function for receiving changes to the component props when the
   * app state changes.
   *
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    this.setState((prevState, nextProps) => ({
      userProfile: nextProps.userProfile,
      isEdit: nextProps.isEdit,
      isLoadingProfile: nextProps.isLoadingProfile,
      isSavingProfile: nextProps.isSavingProfile,
      profileLoadError: nextProps.profileLoadError,
      profileSaveError: nextProps.profileSaveError
    }));
  }


  render() {
    return (
        <Navbar key={this.displayName} pageTitle={this.displayName} menuItems={this.state.menuItems}>
        <SectionCard style={{flex:1, justifyContent: 'flex-start', marginBottom: 15}}>

          <View style={[styles.sectionStyle, {flex: 0.25}, {flexDirection: 'row'}]}>
            <View style={[{justifyContent: 'center'}, {marginBottom: 10}]}>
              <Image
                style={{width: 100, height: 100}}
                source={require('../../../assets/images/user_icon.png')}>
              </Image>
            </View>
            <View style={[{paddingLeft: 15}, {paddingBottom: 15}]}>
              <Text style={styles.mainText}>
                {this.state.userProfile.firstName} {this.state.userProfile.lastName}
              </Text>
              <Text style={styles.sectionText}>{this.state.userProfile.userName}</Text>
              <Text style={styles.sectionText}>
                {this.state.userProfile.address.city}{', '}{this.state.userProfile.address.state}
              </Text>
            </View>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              Account Information
            </Text>
            <Text style={styles.sectionText}>

            </Text>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              Loyalty Information
            </Text>
            <Text style={styles.sectionText}>

            </Text>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              Security Information
            </Text>
            <Text style={styles.sectionText}>

            </Text>
          </View>

        </SectionCard>
        </Navbar>

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.mercury,
    marginTop: 50,
  },

  footer: {
    flex: .10,
    backgroundColor: '#CCCCCC',
    borderTopWidth: 10,
    borderTopColor: '#fff',
  },

  headingText: {

    fontSize: 22,
    color: colors.boulder
  },

  sectionText: {

    fontSize: 18,
    color: colors.blueLagoon
  },

  mainText: {

    fontSize: 30,
    color: colors.boulder,
  },

  sectionStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.boulder
  },

  containerStyle: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 10,
    marginBottom: 0,
    margin: 10,
    borderRadius: 5,
  }
});

export default connect(({routes}) => ({routes}))(UserAccount);
