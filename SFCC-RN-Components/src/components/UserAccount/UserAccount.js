import React, { Component} from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Routes from '../../menuItems';
import { connect } from 'react-redux';
import SectionCard from '../Layout/SectionCard'
import { colors } from '../../styles/globalStyles';
import Navbar from '../Navbar/Navbar';

class UserAccount extends Component {

  constructor(props) {
    super(props);
    const screenSize = Dimensions.get('window');
    this.displayName = 'User Account';
    this.state = {
      menuItems: Routes,
      width: screenSize.width,
      height: screenSize.height,
      userProfile: props.student,
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
      //student: nextProps.student,
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
                source={require('../../../assets/images/static/images/user_icon.png')}>
              </Image>
            </View>
            <View style={[{paddingLeft: 15}, {paddingBottom: 15}]}>
              <Text style={styles.mainText}>
                {this.state.student.firstName} {this.state.student.lastName}
              </Text>
              <Text style={styles.sectionText}>{this.state.student.userName}</Text>
              <Text style={styles.sectionText}>
                {this.state.student.address.city}{', '}{this.state.student.address.state}
              </Text>
            </View>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              GPA
            </Text>
            <Text style={styles.sectionText}>
              {this.state.student.gpa? this.state.student.gpa : 'not available'}
            </Text>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              Standardized Test Scores
            </Text>
            <Text style={styles.sectionText}>
              {this.state.student.testScores? this.state.student.testScores : 'not available'}
            </Text>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              Personal Background
            </Text>
            <Text style={styles.sectionText}>
              {this.state.student.background? this.state.student.background : 'not available'}
            </Text>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              Education & Academic Interests
            </Text>
            <Text style={styles.sectionText}>
              {this.state.student.interest? this.state.student.interests : 'not available'}
            </Text>
          </View>

          <View style={[styles.sectionStyle, {flex: 0.15}]}>
            <Text style={styles.headingText}>
              College Majors
            </Text>
            <Text style={styles.sectionText}>
              {this.state.student.majors? this.state.student.majors : 'not available'}
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
