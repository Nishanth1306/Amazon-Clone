import 'react-native';
import React from 'react';
import OrderScreen from '../screens/OrderScreen';
import {render} from "@testing-library/react-native";


test('OrderScreen renders correctly', () => {
    const {getByText} = render(<OrderScreen />);
    const orderText = getByText('Your order is PLaced Successfully.');
    expect(orderText).toBeTruthy();
});
