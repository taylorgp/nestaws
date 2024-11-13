import './.sst/platform/config';

export default $config({
  app(input) {
    return {
      name: 'nestaws',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {},
});
