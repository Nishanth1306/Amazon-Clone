import 'react-native';
import React from 'react';
import Login from '../screens/Login';
import {render} from "@testing-library/react-native";


test("Login Button Works without crashing", () => {
    const {getByText} = render(<Login />);
    const LoginButton = getByText("Login");
    expect(LoginButton).toBePressable();
});
