import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';

export default class DateTime extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showPicker: false,
            selectedDate: new Date(),
            
        };
    }

    showDatePicker = () => {
        this.setState({ showPicker: true,pickerMode:'date' });
    };

    showTimePicker = () => {
    this.setState({ showPicker: true,pickerMode:'time'});
  };

    onChange = (event, date) => {
        if (date) {
            this.setState({ selectedDate: date });
        }

        // On Android, always close picker after selection
        if (Platform.OS === 'android') {
            this.setState({ showPicker: false });
        }
    };

    render() {
        const { showPicker ,selectedDate,pickerMode } = this.state;

        return (
            <View style={{ padding: 20 }}>
     <Button title="Pick a Date" onPress={this.showDatePicker} />


<View style={{ height: 10 }} />
        <Button title="Pick a Time" onPress={this.showTimePicker} />


                {showPicker && (
                    <RNDateTimePicker
                        value={selectedDate}
                        mode={pickerMode}
                        display="default"
                        maximumDate={new Date(2030, 10, 20)}
                        onChange={this.onChange}
                    />
                )}

                {showPicker && (
                    <RNDateTimePicker
                        value={selectedDate}
                        mode={pickerMode}
                        display="default"
                        maximumDate={new Date(2030, 10, 20)}
                        onChange={this.onChange}
                    />
                )}

                <Text style={{ marginTop: 20, fontSize: 18 }}>
                    Selected Date: {selectedDate.toDateString()}
                </Text>
                <Text style={{ marginTop: 10, fontSize: 18 }}>
          Selected Time: {selectedDate.toLocaleTimeString()}
        </Text>
            </View>
        );
    }
}