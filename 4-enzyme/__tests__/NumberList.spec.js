const React = require("react");
const { shallow, configure } = require("enzyme");
import Adapter from "enzyme-adapter-react-16";

const NumberList = require("../NumberList");

configure({ adapter: new Adapter() });

describe("<NumberList/>", () => {
  it("displays a list item for every number", () => {
    const numbers = [0, 1, 2, 3, 4];
    const wrapper = shallow(<NumberList numbers={numbers} />);
    expect(wrapper.find("li")).toHaveLength(numbers.length);
  });
});
