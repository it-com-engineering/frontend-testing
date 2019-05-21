const React = require("react");
const { shallow, configure } = require("enzyme");
import Adapter from "enzyme-adapter-react-16";

const Toggle = require("../Toggle");

configure({ adapter: new Adapter() });

describe("<Toggle/>", () => {
  it("initially displays ON", () => {
    const wrapper = shallow(<Toggle />);
    expect(wrapper.text()).toEqual("ON");
  });

  it("displays OFF on click", () => {
    const wrapper = shallow(<Toggle />);
    wrapper.simulate("click");
    expect(wrapper.text()).toEqual("OFF");
  });
});
