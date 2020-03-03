import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../../modules/Counter.js';


describe ('<Counter />' , () => {

    it(' It Should be exists in our applications ', () => {
        // virtual 
        let app = shallow(<Counter />);
        // find the tag which already includes in our app 
        expect(app.find('h3').exists()).toBeTruthy();
    }) // end of it test 

    it(' It Should be change the state on click for Button 1 to increase the counter by 1 ', () => {
        // virtual 
        let app = mount(<Counter />);
        let button = app.find('#b1');
        button.simulate('click');
        expect(app.state('counter')).toEqual(1);
    }) // end of it button1

    it(' It Should be change the state on click for Button 1 to decrease the counter by 1 ', () => {
        // virtual 
        let app = mount(<Counter />);
        let button = app.find('#b2');
        button.simulate('click');
        expect(app.state('counter')).toEqual(-1);
    }) // end of it for button2

    it(' Renders correctly ' , () => {
        const tree = renderer.create(<Counter />).toJSON();
        expect(tree).toMatchSnapshot();
    }) // end of it test for render 

}); // end of describe test 