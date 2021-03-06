import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, SectionList, Button } from 'react-native';
import { Form, Separator, InputField, PickerField } from 'react-native-form-generator';

export default class QuestionEdit extends Component {
  render() {
    return (
      <View>
        <Form
          ref="EditQuestionForm"
          label="Edit Question">
          <Text>Question:</Text>
          <InputField placeholder="Enter your text"/>
          <Text>Answer:</Text>
          <InputField placeholder="Answer"/>
          <Text>Hint to the answer:</Text>
          <InputField placeholder="Hint to the answer"/>
          <Text>Clue Type:</Text>
          <PickerField value={"text"} options={{"":'',
                                text: "Text",
                                image: "Image"}}/>
          <Text>Clue Image:</Text>
          <InputField placeholder="Clue Image"/>
          <Text>Clue Text:</Text>
          <InputField placeholder="Clue Text"/>
          <Button
            onPress={() => this.props.navigation.navigate("QuestionIndex")}
            title="Update Question"
          />
        </Form>
      </View>
    );
  }
}

//Use sample data
