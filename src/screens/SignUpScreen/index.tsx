import React from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { NavigationStackScreenComponent, NavigationStackProp } from 'react-navigation-stack';
import Form from '../../components/molecules/Form';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import GoBackArrow from '../../components/atoms/GoBackArrow';
import styles from './styles';

const SignUpScreen: NavigationStackScreenComponent = (props) => {
  return (
    <KeyboardAvoidingView behavior="position" enabled style={styles.keyboard}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.title}>Create Your Account</Text>
          <View style={styles.form}>
            <RenderForm
              navigation={props.navigation}
              registerUser={props.registerUser}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

interface FormProps {
  navigation: NavigationStackProp
  registerUser: Function;
}

const RenderForm: React.FC<FormProps> = (props) => {
  const handleRegister = (error, values) => {
    if (!error) {
      props.registerUser(values, (error, msg) => {
        Alert.alert(
          error ? 'Register Fail' : 'Register Success',
          msg,
          [
            {text: 'OK', onPress: () => {
              if (!error) props.navigation.navigate('App');
            }},
          ],
          {cancelable: false},
        );
      });
    }
  };

  return (
    <Form
      initialForm={{
        full_name: {value: '', validate: [{isRequired: true, message: 'Full name is required!'}]},
        email: {value: '', validate: [{isEmail: true, message: 'Email invalid'}]},
        password: {value: '', validate: [{min: 6, message: 'Min 6 characters'}]},
        confirm_password: {value: '', validate: [{min: 6, message: 'Min 6 characters'}]},
      }}
      onPressTrigger={handleRegister}
    >
      {(form, setFormKeys, onPress) => (
        <>
          <Input
            placeholder="Full name"
            error={form['full_name'].error}
            value={form['full_name'].value}
            onChangeText={setFormKeys['full_name']}
          />
          <Input
            placeholder="Email"
            error={form['email'].error}
            value={form['email'].value}
            onChangeText={setFormKeys['email']}
            keyboardType="email-address"
          />
          <Input
            secureTextEntry={true}
            placeholder="Password"
            error={form['password'].error}
            value={form['password'].value}
            onChangeText={setFormKeys['password']}
            keyboardType={'web-search'}
          />
          <Input
            secureTextEntry={true}
            placeholder="Confirm password"
            error={form['confirm_password'].error}
            value={form['confirm_password'].value}
            onChangeText={setFormKeys['confirm_password']}
            keyboardType={'web-search'}
          />
          <Button type="primary" onPress={onPress}>Register</Button>
        </>
      )}
    </Form>
  )
}

SignUpScreen.navigationOptions = ({ navigation }) => ({
  title: "Register",
  headerLeft: () => (
    <GoBackArrow onPress={() => navigation.goBack()} />
  ),
});

const mapDispatch = dispatch => ({
  registerUser: (user, callback) => dispatch({
    type: 'WATCH_SIGN_UP',
    payload: user,
    callback,
  }),
});

export default connect(null, mapDispatch)(SignUpScreen);