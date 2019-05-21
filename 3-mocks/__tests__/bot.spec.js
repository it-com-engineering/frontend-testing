const { run, jokes } = require("../bot");

const slackMock = { post: jest.fn() };

describe("run", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls slack.post once", () => {
    run(slackMock);
    expect(slackMock.post).toHaveBeenCalledTimes(1);
  });

  it("posts a random joke", () => {
    run(slackMock);
    const message = slackMock.post.mock.calls[0][0];
    expect(jokes).toContain(message);
  });
});
